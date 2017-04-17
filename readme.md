Use npm to build/test/deploy:

$ npm run deploy

manual way to deploy:

$ ./node_modules/serverless/bin/serverless deploy -v --stage production --region us-west-1

$ ./node_modules/serverless/bin/serverless deploy function -f hello
