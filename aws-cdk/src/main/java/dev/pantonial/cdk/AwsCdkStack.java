package dev.pantonial.cdk;

import software.amazon.awscdk.App;
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
import software.amazon.awscdk.services.route53.IHostedZone;
import software.amazon.awscdk.services.route53.RecordTarget;
import software.amazon.awscdk.services.route53.targets.CloudFrontTarget;
import software.amazon.awscdk.services.s3.BlockPublicAccess;
import software.amazon.awscdk.services.s3.Bucket;
import software.amazon.awscdk.services.s3.IBucket;
import software.amazon.awscdk.services.s3.deployment.BucketDeployment;
import software.amazon.awscdk.services.s3.deployment.Source;

import java.util.Collections;
import java.util.List;

public class AwsCdkStack extends Stack {

    private static final String BASE_DOMAIN_NAME = "pantonial.dev";
    private static final String SITE_DOMAIN_NAME = "rodney." + BASE_DOMAIN_NAME;
    private static final String WWW_SITE_DOMAIN_NAME = "www." + SITE_DOMAIN_NAME;

    private IHostedZone zone;
    private IBucket bucket;
    private ViewerCertificate viewerCertificate;
    private IOriginAccessIdentity accessIdentity;
    private IDistribution cloudFrontDistribution;

    @SuppressWarnings("unused")
    public AwsCdkStack(final App scope, final String id) {
        this(scope, id, null);
    }

    private void buildHostedZone() {
        zone = HostedZone.fromLookup(this, "zone", HostedZoneProviderProps.builder()
                .domainName(BASE_DOMAIN_NAME)
                .privateZone(false)
                .build());
    }

    private void buildBucket() {
        // S3 Bucket Creation
        bucket = Bucket.Builder.create(this, "PantonialDevBucket")
                .bucketName(SITE_DOMAIN_NAME)
                .autoDeleteObjects(true)
                .blockPublicAccess(BlockPublicAccess.BLOCK_ACLS)
                .websiteIndexDocument("index.html")
                .removalPolicy(RemovalPolicy.DESTROY)
                .build();

    }

    private void buildViewerCertificate() {

        // TLS Certificate
        var certificate = DnsValidatedCertificate.Builder.create(this, "SiteCertificate")
                .domainName(BASE_DOMAIN_NAME)
                .hostedZone(zone)
                .region("us-east-1")
                .subjectAlternativeNames(List.of(WWW_SITE_DOMAIN_NAME, SITE_DOMAIN_NAME))
                .validation(CertificateValidation.fromDns(zone))
                .build();

        var viewerCertificateOptions = ViewerCertificateOptions.builder()
                .aliases(List.of(BASE_DOMAIN_NAME, SITE_DOMAIN_NAME, WWW_SITE_DOMAIN_NAME))
                .sslMethod(SSLMethod.SNI)
                .securityPolicy(SecurityPolicyProtocol.TLS_V1_2_2021)
                .build();

        viewerCertificate = ViewerCertificate.fromAcmCertificate(certificate, viewerCertificateOptions);

    }

    private void buildAccessIdentity() {

        // S3 Bucket Access Configuration
        accessIdentity = OriginAccessIdentity.Builder.create(this, "CloudfrontAccess")
                .build();

        var cloudfrontUserAccessPolicy = PolicyStatement.Builder.create()
                .actions(List.of("s3:GetObject"))
                .principals(List.of(accessIdentity.getGrantPrincipal()))
                .resources(List.of(bucket.arnForObjects("*")))
                .build();

        bucket.addToResourcePolicy(cloudfrontUserAccessPolicy);

    }

    private void buildCloudfrontDistribution() {

        var sourceConfiguration =
                SourceConfiguration.builder()
                        .s3OriginSource(S3OriginConfig.builder()
                                .originAccessIdentity(accessIdentity)
                                .s3BucketSource(bucket)
                                .originPath("/web/static")
                                .build())
                        .behaviors(Collections.singletonList(
                                Behavior.builder()
                                        .compress(true)
                                        .isDefaultBehavior(true)
                                        .build()))
                        .build()
                ;

        // CloudFront Distribution
        cloudFrontDistribution = CloudFrontWebDistribution.Builder
                .create(this, "PantonialDevCloudfrontDistrib")
                .viewerCertificate(viewerCertificate)
                .defaultRootObject("index.html")
                .viewerProtocolPolicy(ViewerProtocolPolicy.REDIRECT_TO_HTTPS)
                .httpVersion(HttpVersion.HTTP2)
                .priceClass(PriceClass.PRICE_CLASS_100)
                .originConfigs(List.of(sourceConfiguration))
                .build();

    }

    private void buildDnsRecords() {

        // Route 53 Record
        ARecord.Builder.create(this, "RodneyPantonialDevRecord")
                .recordName(SITE_DOMAIN_NAME)
                .target(RecordTarget.fromAlias(new CloudFrontTarget(cloudFrontDistribution)))
                .zone(zone)
                .build();

        // Route 53 Record
        ARecord.Builder.create(this, "WwwRodneyPantonialDevRecord")
                .recordName(WWW_SITE_DOMAIN_NAME)
                .target(RecordTarget.fromAlias(new CloudFrontTarget(cloudFrontDistribution)))
                .zone(zone)
                .build();

    }

    private void buildAssetDeployment() {
        var sources = List.of(Source.asset("../dist"));

        // Deploy site contents to S3 Bucket
        BucketDeployment.Builder.create(this, "DeployWithInvalidation")
                .sources(sources)
                .destinationKeyPrefix("web/static")
                .destinationBucket(bucket)
                .distribution(cloudFrontDistribution)
                .build();

    }

    public AwsCdkStack(final App scope, final String id, final StackProps props) {
        super(scope, id, props);

        // Collection of DNS (Domain Name Server) Records
        buildHostedZone();

        // S3 Bucket Creation
        buildBucket();

        // S3 Bucket Access Configuration
        buildAccessIdentity();

        // Certificate to use for SSL
        buildViewerCertificate();

        // CDN
        buildCloudfrontDistribution();

        // Point the DNS to the CDN
        buildDnsRecords();

        // Deploy the source code here
        buildAssetDeployment();
    }
}

