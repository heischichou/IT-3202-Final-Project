package com.myorg;

import software.constructs.Construct;
import software.amazon.awscdk.*;
import software.amazon.awscdk.services.s3.Bucket;

public class AwsCdkStack extends Stack {
    public AwsCdkStack(final App scope, final String id) {
        this(scope, id, null);
    }

    public AwsCdkStack(final App scope, final String id, final StackProps props) {
        super(scope, id, props);

        Bucket.Builder.create(this, "MyFirstBucket")
                .bucketName("pantonial-dev-cdk")
                .versioned(true).build();
    }
}