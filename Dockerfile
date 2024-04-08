FROM maven:3.8.7-openjdk-18-slim  AS MAVEN_BUILD
COPY ./pom.xml ./pom.xml
RUN mvn dependency:go-offline -B
COPY ./src ./src
RUN mvn package

FROM openjdk:21-slim-bookworm
EXPOSE 8080
COPY --from=MAVEN_BUILD /target/Portfolio-*.jar /app.jar
ENTRYPOINT ["java","-jar","/app.jar"]