CREATE TABLE "users" (
    "id" SERIAL PRIMARY KEY NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW()
);

CREATE TABLE "company" (
    "id" SERIAL PRIMARY KEY NOT NULL,
    "userId" INTEGER NOT NULL REFERENCES "users"("id"),
    "name" TEXT NOT NULL,
    "CNPJ" INTEGER NOT NULL UNIQUE,
    "description" TEXT NULL,
    "createdAt" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW()
);

CREATE TABLE "responsibles" (
    "id" SERIAL PRIMARY KEY NOT NULL,
    "name" TEXT NOT NULL,
    "phone" NUMERIC NOT NULL UNIQUE,
    "CEP" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" NUMERIC NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "isMainResponsible" BOOLEAN,
    "idCompany"  INTEGER NOT NULL REFERENCES "company"("id"),
    "createdAt" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW()
);

CREATE TABLE "places" (
    "id" SERIAL PRIMARY KEY NOT NULL,
    "name" TEXT NOT NULL UNIQUE,
    "CEP" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" NUMERIC NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "sendEmailTo" TEXT NULL,
    "idCompany" INTEGER NOT NULL REFERENCES "company"("id"),
    "idResponsible"  INTEGER NOT NULL REFERENCES "responsibles"("id"),
    "createdAt" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW()
);

create type status_type as ENUM('pendente','cancelado','concluido')

CREATE TABLE "tickets" (
"id" SERIAL PRIMARY KEY NOT NULL,
"idResp" INTEGER NOT NULL REFERENCES "responsibles"("id"),
"idLocal" INTEGER NOT NULL REFERENCES "places"("id"),
"title" TEXT NOT NULL,
"userReceived" TEXT NOT NULL,
"status" status_type,
"createdAt" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
"updatedAt" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW()
);
