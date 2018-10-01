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

## BUG-002

On the mobile phone side, while clicking the tab item, the background color will flash.

## mt-tab-item

```js
/***/ 177:
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    staticClass: "mint-tab-item",
    class: {
      // <a data-v-7ba5bd90="" class="mint-tab-item is-selected">
      // _vm.$parent.value derived from <mt-tabbar v-model="selected">
      // The value will be dynamically changed when which link has been clicked ( id of component mt-tab-item )
      'is-selected': _vm.$parent.value === _vm.id
    },
    on: {
      "click": function($event) {
        // value of selected derived from _vm.id
        // @click="$parent.$emit('input', id)" <- tab-item.vue
        _vm.$parent.$emit('input', _vm.id)
      }
    }
  }, [_c('div', {
    staticClass: "mint-tab-item-icon"
  }, [_vm._t("icon")], 2), _vm._v(" "), _c('div', {
    staticClass: "mint-tab-item-label"
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
```

![](./memo/images/mt-tabbar-attr-selected.gif)

## Passing Static or Dynamic Props

<https://vuejs.org/v2/guide/components-props.html#Passing-Static-or-Dynamic-Props>

```html
<!-- App.vue -->
<mt-tabbar v-model="selected" :class="{'is-fixed': fixed}" :fixed="fixed">

<script>

  export default {
    name: 'App',
    data: function () {
      return {
        selected: null,
        fixed: true
      }
    }
  }
</script>

<!-- tabbar.vue -->
<script>
export default {
  name: 'mt-tabbar',

  props: {
    fixed: Boolean, // value derived from :fixed="fixed"
    value: {} // value derived from v-model
  }
};
</script>
```

![](./memo/images/passing-dynamic-props.gif)

## add padding-top and padding-bottom for route content

```css
.hello[data-v-469af010] {
    padding-top: 40px;
    padding-bottom: 51px;
}
```

![](./memo/images/adding-padding-for-route-content.gif)