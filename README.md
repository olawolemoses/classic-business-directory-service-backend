## About Business Classic Directory Service

* The application is an approach to building a Classic Directory Service. 

* The backend apis was built with Laravel with a tightly coupled VueJS frontend view. 

* InertiaJS was used to bridge Laravel and Vuejs so there is no need to write Blade. 

* Ziggy was used to make the routes available on the frontend.

* Rating system and Search were also integrated

## Environment Setup

```
php 7.4.6
apache 2.4
mysql 5.7
```

## Project Setup
```sh
git clone https://github.com/olawolemoses/classic-business-directory-service-backend.git cbdsb
cd cbdsb
```

Install PHP dependencies:

```sh
composer install
```

Install NPM dependencies:

```sh
npm install
```

Build assets:

```sh
npm run dev
```

Setup configuration:

```sh
cp .env.example .env
```

Generate application key:

```sh
php artisan key:generate
```

Setup a (MySQL, Postgres), database accordingly & Run database migrations:

```sh
php artisan migrate:refresh --seed
```

Run the dev server (the output will give the address):

```sh
php artisan serve
```

You're ready to go! Login with:

- **Username:** simpleadmin@inits.com
- **Password:** 123456

