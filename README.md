# secret-stories-game

Competitive Creative Writing Web Game

# to start in development:

for now, it is important to build the `dist` dir via Nest CLI first.

```ts
$ cd server/
$ npm run start:dev
```

the above will Bootstrap Nest `app` and listen on port `3000`. it will also init handlebars template engine.

new terminal:

```
$ cd client/
$ npm run build
```

this order will distribute the CRA build to the correct directory on the backend and hbs will attach to the created `index.html`

# _NoSQL_ Database:

## _Mongo_

_DEPENDENCIES_: @nestjs/mongoose mongoose

```ts
$ sudo service mongodb start

$ sudo service mongodb status

$ sudo service mongodb stop
```

_to enter shell:_

```ts
$ mongosh
```

### _COMMANDS_

- `db`: <-- shows current db
- `show dbs`: <-- shows all dbs available
- `use [database]`: <-- connect to db
- `show collections`: <-- show db collections
