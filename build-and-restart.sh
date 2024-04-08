docker build . -t portfolio
docker stop portfolio || true
docker rm portfolio || true
docker run -d -p 8080:8080 --name=portfolio -e SPRING_PROFILES_ACTIVE=prod --network portfolio-network --restart unless-stopped portfolio