docker build . -t Portfolio
docker stop Portfolio || true
docker rm Portfolio || true
docker run -d -p 8080:8080 --name=Portfolio -e SPRING_PROFILES_ACTIVE=prod --network Portfolio-network --restart unless-stopped Portfolio