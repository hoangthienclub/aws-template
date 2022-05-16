# Products service

## Environment set-up

Create an `.env` file at the root of portal folder structure.
Do not check this file in.
Add these lines to it (edit to taste):
```
INFERENCE_URL=http://localhost:8080/products
```

## Getting Started
```
npm install
npm run
```
Note, this will use the env vars from your `.env` file. You can also `export NODE_ENV=prd` etc., which has precedence over the `.env`.

## Dockerize
### Build the docker image
```
docker build -t pch/products -f docker/Dockerfile .
```
### Run the docker image
```
docker run -p 48080:3000 -d pch/products
```
### Review the logs
```
docker logs
```
### Enter to the container if needed
```
docker exec -it d0e4f5245bb14e9744f350d26e72d4b78d0637195c043811b7ff90f250a1439c
```
# aws-template
