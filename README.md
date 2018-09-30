# a_mobile_super_mini_project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## fetch

```js
fetch('http://www.liulongbin.top:3005/api/getnewslist')
  .then(function (response) {
    console.log(response);
  })
  .then(function (data) {
    console.log(data.message);
  })
```

## Technology stack

[mint-ui](http://mint-ui.github.io/#!/en)

## babel-plugin-component

```json
{
  "presets": [
    [
      "env",
      {
        "modules": false,
        "targets": {
          "browsers": [
            "> 1%",
            "last 2 versions",
            "not ie <= 8"
          ]
        }
      }
    ],
    "stage-2"
  ],
  "plugins": [
    "transform-vue-jsx",
    "transform-runtime",
    // import style automatically
    [
      "component",
      {
        "libraryName": "mint-ui",
        "style": true
      }
    ]
  ],
  "env": {
    "test": {
      "presets": [
        "env",
        "stage-2"
      ]
    }
  }
}
```

## static file

静态资源需要放到 static 文件夹下，否则也需要进行路由匹配 ( Static resources need to be placed in the static folder, otherwise, route matching is required. )

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>a_mobile_super_mini_project</title>
  <link rel="shortcut icon" href="./static/favicon.ico">
  <link rel="stylesheet" type="text/css" href="./static/iconfont.css">
</head>

<body>
  <div id="app"></div>
  <!-- built files will be auto injected -->
</body>

</html>
```

## iconfont.cn

Using the iconfont downloaded from iconfont.cn

## BUG-001

```css
.mint-tab-item-label {
  font-size: 11px; /* 为啥不管用 */
}
```
