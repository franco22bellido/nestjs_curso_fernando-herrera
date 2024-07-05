<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Execute in dev mode
1. clone repository
2. execute
```
yarn install
```
3. have installed nest CLI
```
npm i -g @nestjs/cli
```
4. up the database
```
docker-compose up -d
```
5. Reconstruir la base de datos con la semilla
````
GET
https://localhost:3000/api/v2/seed
````

## Stack
* MongoDB
* NestJS