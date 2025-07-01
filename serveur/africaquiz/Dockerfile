FROM openjdk:17
VOLUME /tmp
EXPOSE 8080
ARG JAR FILE
COPY target/africaquiz-app.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
