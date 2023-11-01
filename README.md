# Getting started with Prisma

For more info on Prisma installation and pre-requisites refer to the quickstart docs. If the setup notes don't work as expected or a version change affects the following setup, this is the best place to solve those issues.

https://www.prisma.io/docs/getting-started/quickstart

## Disclaimer

Use appropriate database credentials depending on the environment you'll be hosting your database on. You should always use a local sandbox or staging environment before rolling out wholesale db changes to your live server environment. As a full stack or database admin it is your responsibility to ensure you don't accidentially overwrite important or critical client data you can't afford to lose. Do make data backups before running a batch process that has the power to make permanent changes to your database. Managing extra user roles and permissions is outside the scope of this project.

# Install project dependencies:

1. Download and install the latest free version of Docker for your computer's OS
2. Download and install globally the latest stable release of Node.js
3. Install the npm packages for the project
   `npm install`

## Initialise Prisma

`npx prisma init`

Define model(s) in the schema.prisma file that represent the db tables and field types you want to create. The schema model Profile is just an example. You should create unique data models to closely match your project data requirements.

Next run docker comopse up to start up a new docker container and server based on the config set in the docker-compose.yml file.

`docker compose up -D`

## Configure a .env file and DB connection

Create a new local .env file and define a DATABASE_URL connection string including the db protocol you intend to use i.e. postgres/myqsl/sqlite,then localhost:<PORT>, then append the string values you set for POSTGRES_USER, POSTGRES_PASSWORD, then a / and append the value for POSTGRES_DB. These are all defined in the docker-compose.yml file under the environemt key. If they don't exist be sure to add them or it won't work.

## Prisma migration

Next run Prisma migrate to generate the db tables in the sub folder according to the volumes path set in in `docker-compose.yml`. Earler versions of prisma used npx prisma migrate save which is deprecated. You can name the migration whatever you want. If you forget to supply a `--name` param then Prisma should prompt you for one. For our purposes we can name it `init` for simplicity.

`npx prisma migrate dev --name init`

All being well you should have a prisma/migrations with a subfolder named according to the current timestamp and the name you gave the migration. The file migration_lock.toml should have the provider entry set that matches the database be it Postgres or MySQL etc.

# Querying the DB migration

To inspect your data run the command alias `npm run dev`

It will run the sample Typescript to check for entries. This is the functional equivalent of running MySQL Select queries to look up data by columns. Once complete Prisma client automatically disconnects. You can uncomment lines to add new data according to the data models you define in schema.prisma.
