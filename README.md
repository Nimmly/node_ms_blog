## About
This is a local (dev) project that represents the microservices architecture and the inner workings of message broker.

## NOT PRODUCTION READY

## Setup
It's been coded on MacBook with M1 chip, and for most of installation [brew](https://brew.sh/) was used.
Everything is [dockerized](https://www.docker.com/products/docker-desktop/) and configured to work with [kubernetes](https://kubernetes.io/docs/tasks/tools/install-kubectl-macos/).
Also for automation of tasks like building the images, applying deployments for kubernetes [skaffold](https://skaffold.dev/) was used.
For usage, hosts file shoud be updated so it has `127.0.0.1 posts.com` rule.

## Stack
Server side is coded in NodeJS
Client side is coded in ReactJS
Node version is v16.17.0

## Installation commands 
1. brew => /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
2. docker-desktop(kubernetes) => https://www.docker.com/products/docker-desktop/
3. ingress-nginx => kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.5.1/deploy/static/provider/cloud/deploy.yaml
4. skaffold.dev => brew install skaffold
