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
