package dev.pantonial.cdk;

import java.util.Collections;
import java.util.List;
import software.amazon.awscdk.*;
import software.amazon.awscdk.services.certificatemanager.DnsValidatedCertificate;
import software.amazon.awscdk.services.cloudfront.*;
import software.amazon.awscdk.services.route53.*;
import software.amazon.awscdk.services.route53.targets.CloudFrontTarget;
import software.amazon.awscdk.services.s3.Bucket;
//import software.amazon.awscdk.services.s3.deployment.BucketDeployment;
//import software.amazon.awscdk.services.s3.deployment.Source;

public class AwsCdkStack extends Stack {
    public AwsCdkStack(final App scope, final String id) {
        this(scope, id, null);
    }

    public AwsCdkStack(final App scope, final String id, final StackProps props) {
        super(scope, id, props);

        try {
            IHostedZone zone = HostedZone.fromLookup(this, "zone", HostedZoneProviderProps.builder()
                    .domainName("pantonial.dev")
                    .privateZone(false)
                    .build());

            // S3 Bucket Creation
            Bucket bucket = Bucket.Builder.create(this, "PantonialDevBucket")
                    .bucketName("pantonial.dev")
                    .websiteIndexDocument("index.html")
                    .publicReadAccess(false)
                    .removalPolicy(RemovalPolicy.DESTROY)
                    .build();

            // CloudFront Distribution
            CloudFrontWebDistribution cloudFrontDistribution = CloudFrontWebDistribution.Builder.create(this, "PantonialDevCloudfrontDistrib")
                    .defaultRootObject("index.html")
                .viewerCertificate(ViewerCertificate.fromAcmCertificate(
                        DnsValidatedCertificate.Builder.create(this, "SiteCertificate")
                                .domainName("pantonial.dev")
                                .hostedZone(zone)
                                .build()
                        , ViewerCertificateOptions.builder()
//                                .aliases("pantonial.dev")
                                .sslMethod(SSLMethod.SNI)
//                                .securityPolicy(SecurityPolicyProtocol.TLS_V1_1_2016)
                                .build()
                ))
                    .originConfigs(List.of(
                            SourceConfiguration.builder()
                                    .s3OriginSource(S3OriginConfig.builder()
                                            .s3BucketSource(bucket)
                                            .build())
                                    .behaviors(Collections.singletonList(
                                            Behavior.builder()
                                                    .isDefaultBehavior(true)
                                                    .build()))
                                    .build()
                    ))
                    .build();

            // Route 53 Record
            ARecord.Builder.create(this, "PantonialDevRecord")
                    .recordName("example.pantonial.dev")
                    .target(RecordTarget.fromAlias(new CloudFrontTarget(cloudFrontDistribution)))
                    .zone(zone)
                    .build();

            // Deploy site contents to S3 Bucket
//            BucketDeployment.Builder.create(this, "DeployWithInvalidation")
//                    .sources(Collections.singletonList(Source.asset("")))
//                    .destinationKeyPrefix("web/static")
//                    .destinationBucket(bucket)
//                    .distribution(cloudFrontDistribution)
//                    .build();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}