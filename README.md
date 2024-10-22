<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Small Bakcend service using nest and docker.

## Developers
<table align="center">
    <tbody>
        <tr>
            <td align="center"><a href="https://github.com/Fussita" rel="nofollow"><img src="https://avatars.githubusercontent.com/u/110612202?v=4" width="150px;" alt="" style="max-width:100%;"><br><sub><b>Fussita</b></sub></a><br><a href="" title="Commits"><g-emoji class="g-emoji" alias="book" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4d6.png">📖</g-emoji></a></td>
            <td align="center"><a href="https://github.com/C102002" rel="nofollow"><img src="https://avatars.githubusercontent.com/u/116277334?v=4" width="150px;" alt="" style="max-width:100%;"><br><sub><b>Alfredo Fung</b></sub></a><br><a href="" title="Commits"><g-emoji class="g-emoji" alias="book" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4d6.png">📖</g-emoji></a></td>
            <td align="center"><a href="https://github.com/DanielBortot" rel="nofollow"><img src="https://avatars.githubusercontent.com/u/103535845?v=4" width="150px;" alt="" style="max-width:100%;"><br><sub><b>Daniel Borot</b></sub></a><br><a href="" title="Commits"><g-emoji class="g-emoji" alias="book" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4d6.png">📖</g-emoji></a></td>
        </tr>
    </tbody>
</table>

## Installation

```bash
$ pnpm install
```

## Running the app

### 1. Add Evaroment variables to the repository

First you need to add the .env into the root of the prject

```bash
#Example
PORT=3000
DB_HOST=mongodb://root:12345@mongodb:27017/
MONGO_INITDB_DATABASE=practica-3
MONGO_INITDB_ROOT_USERNAME=root
MONGO_INITDB_ROOT_PASSWORD=12345
ME_CONFIG_MONGODB_ADMINUSERNAME=root
ME_CONFIG_MONGODB_ADMINPASSWORD=12345
ME_CONFIG_MONGODB_URL=mongodb://root:12345@mongodb:27017/
```

## 2. Run the application

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod

# deploy local version
$ docker compose up -d

# deploy DockerHub version
$ docker compose -f docker-compose-dockerhub.yml up -d
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

### 3. See runing the application

To see the application database you must enter to one url which is deployed mongo express. In our case is:

```bash
# mongo express
http://localhost:8081

# the app (backend)
http://localhost:3000

```
To see the changes you must send a pettition to the following endpoints

```bash 
GET /status/ -> Responde simplemente pong.
GET /directories/ -> Listado de objetos.
POST /directories/ -> Creación de objeto.
GET /directories/{id} -> Obtener un objeto.
PUT /directories/{id} -> Actualizar un objeto.
PATCH /directories/{id} -> Actualizar parcialmente un objeto.
DELETE /directories/{id} -> Eliminar un objeto.
```

```bash
{
   "name": "Rómulo Rodríguez",
   "emails": [
           "rjrodrig@ucab.edu.ve",
           "rjrodriguezr.12@est.ucab.edu.ve"
   ]
}
```

```bash

{
   "count": <Total de objetos>,
   "next": "link a siguiente página",
   "previous": "link a página previa",
   "results": [
           {
                   "id": 1,
                   "name": "Rómulo Rodríguez",
                   "emails": [
                           "rjrodrig@ucab.edu.ve",
                           "rjrodriguezr.12@est.ucab.edu.ve"
                   ]
           },
   ...

    ]
}
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).


## Requirements
<p align="center">
<table align="center">
    <tbody>
        <tr>
            <td align="center"> <a href="https://docs.nestjs.com" rel="nofollow"> <img src="./public/images/dependencies/nest-logo.svg" width="150px;" alt="" style="max-width:100%;"><br><sub><b>NestJS</b></sub></a><br><a href="https://docs.nestjs.com" title="Commits"><g-emoji class="g-emoji" alias="book" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4d6.png">📖</g-emoji></a></td>
            <td align="center"> <a href="https://nodejs.org/docs/latest/api/" rel="nofollow"> <img src="./public/images/dependencies/nodejs-png-nodejs-icon-png-50-px-1600.png" width="150px;" alt="" style="max-width:100%;"><br><sub><b>NodeJS</b></sub></a><br><a href="https://docs.nestjs.com" title="Commits"><g-emoji class="g-emoji" alias="book" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4d6.png">📖</g-emoji></a></td>
            <td align="center"> <a href="https://docs.docker.com" rel="nofollow"> <img src="./public/images/dependencies/Docker-Symbol.png" width="275px;" alt="https://docs.docker.com" style="max-width:100%;"><br><sub><b>Docker</b></sub></a><br><a href="https://docs.docker.com" title="Commits"><g-emoji class="g-emoji" alias="book" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4d6.png">📖</g-emoji></a></td>
        </tr>
    </tbody>
</table>
</p>
