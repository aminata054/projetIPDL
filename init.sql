CREATE SCHEMA IF NOT EXISTS africaquiz_schema;

CREATE TABLE
    africaquiz_schema.users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        date_creation TIMESTAMP NOT NULL,
        role VARCHAR(50) NOT NULL DEFAULT 'USER'
    );