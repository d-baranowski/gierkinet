PRODUCT="gierkinet"
ENVIRONMENT="prod"
CLIENT_BUCKET ?= $(PRODUCT)-$(ENVIRONMENTI)-s3-client

package:
	npm run build

deploy: package
	aws s3 cp --recursive ./ s3://$(CLIENT_BUCKET)
