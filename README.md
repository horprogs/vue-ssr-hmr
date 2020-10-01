# VueJS + Vuex + SSR + HMR boilerplate

Demo: https://vue-ssr-hmr.herokuapp.com/

Article: https://medium.com/js-dojo/how-i-made-it-easy-to-develop-on-vue-js-with-server-side-rendering-fdeebdd7e8d8

I decided develop my new application, using VueJS. 
I was looking for convenient examples of VueJS, Vuex, which using SSR and hot reloading, 
but I didn't find them. 

So, I decided to create this boilerplate. I hope that it will be helpful for somebody.

It includes:

### Server-side rendering (SSR)

It helps to user to receive content faster. Also, it improves SEO.

### Single page application

Routing without full reload pages.

### Vuex state management

State management pattern. Represents centralized store for all the components in an application. 

Also, it contains example of fetch data from API and store it to Vuex modules.

More: https://vuex.vuejs.org

### CSS modules

System for modularizing and composing CSS. You can use it as:
```html
<style module>
.red {
  color: red;
}
.bold {
  font-weight: bold;
}
</style>
```

```html
<template>
  <p :class="$style.red">
    This should be red
  </p>
</template>
```

And result class will be shown like `.red_<hash>`.

More: https://vue-loader.vuejs.org/guide/css-modules.html#usage

### Hot reloading, including server-side

Technique, which improves your development performance significantly. 
When you change your code or css you will see result immediately in browser. 
If you use SSR, probably, usually you have a problem, when you reload page, 
because your server-side code doesn't have hot-reloading. 
But in this boilerplate similar problem resolved. 
When you change code, server-side code will recompile too. 
And if you reload page, you will see changes on server side.


### Code-splitting

In this boilerplate you doesn't have one huge js bundle, 
but you have one main bundle a few small bundles for each page.

It allows not to load unnecessary code for current page.

### Easy and customizable build for local development and production

Boilerplate has a base webpack config and different configs for client and server.
Production build has minified css and js bundles with hash in name for caching static in browser.

Also, there is a convenient html template where you can put your common html code.

### Code quality

Boilerplate has ESLint with Airbnb VueJS config and Prettier for awesome code formatting.


## How to use it

To start environment for local development, use:
```
yarn run dev
# or solution for linux
sudo yarn run build && yarn run dev
```
**If you run it the first time, you'll get error, that server bundle wasn't found. 
It's normal. Just re-run this task.**

To production build, use (assets will be served from `dist` folder):
```
yarn run build
```

To run server side, use:
```
yarn run start
```
(Note, this way isn't for production. 
Better, you should use process manager, like `PM2`)

Application will be available on http://localhost:3000/ 

___

Thank you for your time! ❤️
 
If you have any questions, please send new pull requests or create issues.
