# Sample Docker and Node.JS app.

This code sample uses the Node.js web framework Express to create a basic web server that listens for HTTP requests on port 8080.

The code includes a Dockerfile in `app/Dockerfile`, which includes the steps to build a container image that can run a Node.js web server. The code sample also includes `deployment.yml` and `service.yml`. `deployment.yml` describe how to deploy the containerized Node.JS application to a Kubernetes cluster. `service.yml` creates a service and a secret resource.

To use the secret resource, you'll need first create a service account and associated secret. See this [Developer Community post](https://developercommunity.visualstudio.com/t/New-Kubernetes-service-connection-causes/10138123#T-N10138393) for more help. 


