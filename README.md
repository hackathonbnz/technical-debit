# Boilerplate for React-Webpack-Express && Sass!



### Free to a good home


#### To Run:

` npm install `

You will need to run two terminals with this boilerplate; one for webpack and another to compile Sass.

1. Node server && webpack:

` npm run dev `

2. To compile sass:

`npm run scss`

#### For WINDOWS OS:

In order to run webpack on windows you will need to do the following:

` npm install npm-run-all `

Next, in your ` package.json ` under scripts, replace ` "dev": "node server & webpack --watch" ` with these *three* lines:

```
"dev": "npx run-p run-client run-server",
"run-client": "webpack --watch",
"run-server": "node server"
```

Run node server && webpack with ` npm run dev `

**Enjoy!**
