package dev.pantonial.cdk;

import software.amazon.awscdk.App;
import software.amazon.awscdk.CfnOutput;
import software.amazon.awscdk.RemovalPolicy;
import software.amazon.awscdk.Stack;
import software.amazon.awscdk.StackProps;
import software.amazon.awscdk.services.certificatemanager.CertificateValidation;
import software.amazon.awscdk.services.certificatemanager.DnsValidatedCertificate;
import software.amazon.awscdk.services.cloudfront.*;
import software.amazon.awscdk.services.iam.PolicyStatement;
import software.amazon.awscdk.services.route53.ARecord;
import software.amazon.awscdk.services.route53.HostedZone;
import software.amazon.awscdk.services.route53.HostedZoneProviderProps;
import software.amazon.awscdk.services.route53.RecordTarget;
import software.amazon.awscdk.services.route53.targets.CloudFrontTarget;
import software.amazon.awscdk.services.s3.BlockPublicAccess;
import software.amazon.awscdk.services.s3.Bucket;
import software.amazon.awscdk.services.s3.deployment.BucketDeployment;
import software.amazon.awscdk.services.s3.deployment.Source;

import java.util.Collections;
import java.util.List;

public class AwsCdkStack extends Stack {

    @SuppressWarnings("unused")
    public AwsCdkStack(final App scope, final String id) {
        this(scope, id, null);
    }

    public AwsCdkStack(final App scope, final String id, final StackProps props) {
        super(scope, id, props);
        var baseDomainName = "pantonial.dev";
        var domainName = "example.pantonial.dev";

        var wwwDomainName = "www.example.pantonial.dev";

        try {
            // Collection of DNS Records (Domain Name Server)
            // IP(1.1.1.1 or 192.168.10.1) <-> Domain Name (facebook.com or pantonial.dev)
            var zone = HostedZone.fromLookup(this, "zone", HostedZoneProviderProps.builder()
                    .domainName(baseDomainName)
                    .privateZone(false)
                    .build());

            // S3 Bucket Creation
            var bucket = Bucket.Builder.create(this, "PantonialDevBucket")
                    .bucketName(domainName)
                    .autoDeleteObjects(true)
                    .blockPublicAccess(BlockPublicAccess.BLOCK_ACLS)
                    // TODO: check if this is the correct one
                    .websiteIndexDocument("index.html")
                    .removalPolicy(RemovalPolicy.DESTROY)
                    .build();

            // security to allow access to the bucket for cloudfront user
            var accessIdentity = OriginAccessIdentity.Builder.create(this, "CloudfrontAccess")
                    .build();

            var cloudfrontUserAccessPolicy = PolicyStatement.Builder.create()
                    .actions(List.of("s3:GetObject"))
                    .principals(List.of(accessIdentity.getGrantPrincipal()))
                    .resources(List.of(bucket.arnForObjects("*")))
                    .build();

            bucket.addToResourcePolicy(cloudfrontUserAccessPolicy);

            // TLS Certificate
            var certificate = DnsValidatedCertificate.Builder.create(this, "SiteCertificate")
                    .domainName(baseDomainName)
                    .hostedZone(zone)
                    .region("us-east-1")
                    .subjectAlternativeNames(List.of(wwwDomainName, domainName))
                    .validation(CertificateValidation.fromDns(zone))
                    .build();

            CfnOutput.Builder.create(this, "Certificate")
                    .description("Certificate ARN")
                    .value(certificate.getCertificateArn())
                    .build();

            var viewerCertificateOptions = ViewerCertificateOptions.builder()
                    .aliases(List.of(baseDomainName, domainName, wwwDomainName))
                    .sslMethod(SSLMethod.SNI)
                    .securityPolicy(SecurityPolicyProtocol.TLS_V1_2_2021)
                    .build();
            var viewerCertificate = ViewerCertificate.fromAcmCertificate(certificate, viewerCertificateOptions);

            // CloudFront Distribution
            var cloudFrontDistribution = CloudFrontWebDistribution.Builder
                    .create(this, "PantonialDevCloudfrontDistrib")
                    .viewerCertificate(viewerCertificate)
                    .defaultRootObject("index.html")
                    .viewerProtocolPolicy(ViewerProtocolPolicy.REDIRECT_TO_HTTPS)
                    .httpVersion(HttpVersion.HTTP2)
                    .priceClass(PriceClass.PRICE_CLASS_100)
                    .originConfigs(List.of(
                            SourceConfiguration.builder()
                                    .s3OriginSource(S3OriginConfig.builder()
                                            .originAccessIdentity(accessIdentity)
                                            .s3BucketSource(bucket)
                                            // TODO: determine origin path
                                            // .originPath("")
                                            .build())
                                    .behaviors(Collections.singletonList(
                                            Behavior.builder()
                                                    .compress(true)
                                                    .isDefaultBehavior(true)
                                                    .build()))
                                    .build()
                    ))
                    .build();

            // Route 53 Record
            ARecord.Builder.create(this, "ExamplePantonialDevRecord")
                    .recordName(domainName)
                    .target(RecordTarget.fromAlias(new CloudFrontTarget(cloudFrontDistribution)))
                    .zone(zone)
                    .build();

            // Route 53 Record
            ARecord.Builder.create(this, "WwwExamplePantonialDevRecord")
                    .recordName(wwwDomainName)
                    .target(RecordTarget.fromAlias(new CloudFrontTarget(cloudFrontDistribution)))
                    .zone(zone)
                    .build();

            var sources = List.of(Source.asset("src/main/resources"));

            // Deploy site contents to S3 Bucket
            BucketDeployment.Builder.create(this, "DeployWithInvalidation")
                    .sources(sources)
                    .destinationKeyPrefix("web/static")
                    .destinationBucket(bucket)
                    .distribution(cloudFrontDistribution)
                    .build();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

