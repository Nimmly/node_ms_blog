This is a local (dev) project that represents the microservices architecture and the inner workings of message broker.
NOT PRODUCTION READY
It been coded on MacBook with M1 chip, and for most of installation brew was used.
Everything is dockerized and configured to work with kubernetes
Also for automation of tasks like building the images, applying deployments for kubernetes skaffold was used.
Client side of the app is written in react, server side is in nodejs.
For usage hosts file shoud be updated so i has 127.0.0.1 posts.com rule

brew => /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
docker-desktop(kubernetes) => https://www.docker.com/products/docker-desktop/
ingress-nginx => kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.5.1/deploy/static/provider/cloud/deploy.yaml
skaffold.dev => brew install skaffold
