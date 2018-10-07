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

#BUG-003
body 颜色不能改变

#BUG-004
移动端应该禁止用户缩放


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

## Vue instance router property

<https://vuejs.org/v2/guide/migration-vue-router.html#Router-Initialization>

```js
new Vue({
  el: '#app',
  router: router, // Router Initialization
  template: '<router-view></router-view>'
})
```

## vm.$mount()

<https://vuejs.org/v2/api/#el>

<https://48y127owv7.codesandbox.io>

Provide the Vue instance an existing DOM element to mount on. It can be a CSS selector string or an actual HTMLElement.

After the instance is mounted, the resolved element will be accessible as vm.$el.

If this option is available at instantiation, the instance will immediately enter compilation; otherwise, the user will have to explicitly call **vm.$mount()** to manually start the compilation.

## Vue router demo

<https://codesandbox.io/s/48y127owv7>

## Click the relevant link to show the relevant component content ( 单击相关链接以显示相关组件内容 )

<https://blog.csdn.net/wandoumm/article/details/80166414>

Use watch property to listening to the changing of the component id ( 使用 watch 监听组件 id 值的变化 )

### Programmatic Navigation

<https://router.vuejs.org/guide/essentials/navigation.html>

Inside of a Vue instance, you have access to the router instance as $router.

```js
watch: {
  // Which link has been clicked
  selected: function (newVal) {
    let compID = newVal
    switch (compID) {
      case 'iHome':
        console.log(this.$route) // {name: "HelloWorld", meta: {…}, path: "/", hash: "", query: {…}, …}
        console.log(this.$router) // access to the router instance ( VueRouter {app: Vue ...} )
        console.log('iHome')
        break;
    }
  }
}

```

### Router Construction Options

<https://router.vuejs.org/api/#router-construction-options>

```js
declare type RouteConfig = {
  path: string;
  component?: Component;
  name?: string; // for named routes
  components?: { [name: string]: Component }; // for named views
  redirect?: string | Location | Function;
  props?: boolean | string | Function;
  alias?: string | Array<string>;
  children?: Array<RouteConfig>; // for nested routes
  beforeEnter?: (to: Route, from: Route, next: Function) => void;
  meta?: any;

  // 2.6.0+
  caseSensitive?: boolean; // use case sensitive match? (default: false)
  pathToRegexpOptions?: Object; // path-to-regexp options for compiling regex
}
```

## Vue-router instance static properties

```js
// vue-router.js -- line 263
var route = {
  name: location.name || (record && record.name),
  meta: (record && record.meta) || {},
  path: location.path || '/',
  hash: location.hash || '',
  query: query,
  params: location.params || {},
  fullPath: getFullPath(location, stringifyQuery$$1),
  matched: record ? formatMatch(record) : []
};
```

![](./memo/images/vue-router-instance-static-properties.png)

## Vue instance API Reference ( Options / Data )

<https://vuejs.org/v2/api/#Options-Data>

<https://vuejs.org/v2/api/#name>

## Another benefit of specifying a name option is debugging ( Vue instance name property )

Another benefit of specifying a name option is debugging. Named components result in more helpful warning messages. Also, when inspecting an app in the vue-devtools, unnamed components will show up as <AnonymousComponent>, which isn’t very informative. By providing the name option, you will get a much more informative component tree.

```js
// Cart.vue
  export default {
    name: 'Cart', // if not the name of component will be anonymous ( while debugging )
    data() {
      return {
        msg: 'cart'
      }
    }
  }

//index.js
export default new Router({
routes: [
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }
]
})
```

![](./memo/images/components-option-property-name.gif)

## what's next

implement Header back function

should not display when the current route is home









