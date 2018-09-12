
[![npm version](https://badge.fury.io/js/nss-console.svg)](https://badge.fury.io/js/nss-console)
# NSS-Console
your chrome console is now super cool
=============

With NSS-Console you can output image directy on your chrome console

you can also output nice looking message

You may think it's stupid?
it's Not-So-Stupid!

![NSS-Console demo](https://raw.githubusercontent.com/jerome-birembaut/nss-console/master/assets/demo0.jpg)

### Setup ###


NSS-Console can be installed with [npm](https://docs.npmjs.com/getting-started/what-is-npm) or simply using a content delivery network (CDN) URL to embed NSS-Console directly on your HTML page.

#### NPM Install

```sh
npm install nss-console
```
The correct way to import NSS-Console is:

```js
import NSSConsole from 'nss-console'
NSSConsole.message('YO')
```

Using common file:
```js
<script async src="../dist/nss-console.common.js"></script>
```
#### Latest Release can be downloaded here

```html
https://github.com/jerome-birembaut/nss-console/releases/tag/1.1.6
```

### Current features ###

- output nice message with auto color swapping
- output nice message with the color you want to use
- output image and adjust size

### Basic Usage Example ###

```js
// output a message
NSSConsole.message('Hello')
// output an image
NSSConsole.image('https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-1/p200x200/35966_149142151763715_7577518_n.jpg?_nc_cat=0&oh=73843ee73938ed97dc52fc91ae4fdcd8&oe=5C3B257A')
// output an image and put a messages just below
NSSConsole.image('https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-1/p200x200/35966_149142151763715_7577518_n.jpg?_nc_cat=0&oh=73843ee73938ed97dc52fc91ae4fdcd8&oe=5C3B257A', 0.5).then(() => {
    NSSConsole.message('Développé par l\'équipe Not-So-Stupid !')
    NSSConsole.message('http://not-so-stupid.com')
    NSSConsole.message('contact@not-so-stupid.com')
  })
}
```
![NSS-Console demo](https://raw.githubusercontent.com/jerome-birembaut/nss-console/master/assets/demo0.jpg)



#### BUILD API

```
npm ci
npm run build
```

### License ###

This content is released under the (http://opensource.org/licenses/MIT) MIT License.
