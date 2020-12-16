## Docker

#### Install Docker [Get Docker](https://docs.docker.com/get-docker/)

#### See the [Docker file](https://github.com/concur-ada/concur-ada-front/blob/main/Dockerfile)

## Steps to run the docker container

1. Change directory to the project folder and Build the docker image

` cd concur-ada-front`

`docker build --tag concur-ada-front .`

2. Once the build is complete, you can check the image

`docker image ls concur-ada-front`

3. Run the container locally

`docker run -it -p 80:8080 concur-ada-front`

_Runs the container in interactive mode, mapping container port 8080 to host port 80_

4. Browse to the application

`http://localhost`


### References

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.