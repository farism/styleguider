webpackJsonp([0],{

/***/ "../stylegator/src/app/assets/__appendix.md":
/***/ (function(module, exports) {

module.exports = "# Introduction\n\nStylegator is a tool designed to aide in the building of documentation websites. Using markdown, users can intuitively author content for any type of project. In fact, the documentation for Stylegator was made with Stylegator!\n\n# Features\n\n- Easy to use partial system for customization and branding.\n- Live code editing using the excellent `react-live`.\n- Support for React code.\n\n# Contributing\n\nStylegator is open source. You can contribute on [Github](https://github.com/farism/stylegator)\n# Installation\n\nUse npm to install `Stylegator`\n\n```sh\nyarn add stylegator -D\nnpm install -D stylegator\n```\n\n# Configure an `index.html` page\n\n```html\n<-- src/template.html -->\n\n<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"UTF-8\">\n    <title><%= htmlWebpackPlugin.options.title %></title>\n  </head>\n  <body>\n    <div id=\"app\" />\n  </body>\n</html>\n\n```\n\n```js\n// stylegator.config.js\n\nmodule.exports = {\n  template: 'src/index.html',\n  title: 'Docs'\n}\n```\n\n# Setup the `src/index.js` entry point\n\nStylegator expects an index file to live at `src/index.js`. This will be used as the entry point for `webpack`.\n\n```js\n// src/index.js\n\nimport React from 'react'\nimport ReactDOM from 'react-dom'\nimport { pageLoader, Stylegator } from 'stylegator'\n\nconst sections = [\n  {\n    title: 'Hello World',\n    loader: pageLoader(() => import('./sections/hello-world.md')),\n  },\n]\n\nReactDOM.render(\n  <Stylegator sections={sections} />,\n  document.getElementById('app')\n)\n\nif (module.hot) {\n  module.hot.accept()\n}\n```\n\n# Author some content\n\n```md\n// src/sections/hello-world.md\n\n# Hello World!\n```\n\nSee the [Authoring Content](#authoring-content) section for more information.\n# Authoring Content\n\nYou can author a variety of different types of content using stylegator. Most [github flavored markdown](https://github.github.com/gfm/) is supported via [`react-markdown`](https://github.com/rexxars/react-markdown).\n\nIn order to add a section of content, you must declare it in the `sections` that are provided to the top level `<Stylegator />` component, e.g.\n\n```js\n// src/index.js\n\nimport React from 'react'\nimport ReactDOM from 'react-dom'\nimport { pageLoader, Stylegator } from 'stylegator'\n\nconst sections = [\n  {\n    title: 'Hello World',\n    loader: pageLoader(() => import('./sections/hello-world.md')),\n  },\n]\n\nReactDOM.render(\n  <Stylegator sections={sections} />,\n  document.getElementById('app')\n)\n```\n\n## Interactive code samples\n\nAn interactive code sample can be created by using the `code` directive:\n\n\n    ```code\n    <button>a button</button>\n    ```\n\nThis will create a sandbox for a viewer to play with:\n\n```code\n<button>a button</button>\n```\n# Configuration\n\nStylegator can be configured through the `stylegator.config.js` file.\n\nThe following is an annotated configuration object:\n\n```js\n// styleguide.config.js\n\nmodule.exports = {\n  // The source directory\n  srcDir: 'src',\n\n  // Entry point for webpack,\n  entryPoint: 'index.js',\n\n  // The build output directory\n  buildDir: 'build',\n\n  // The path of the html template file - used by `html-webpack-plugin`\n  template: 'index.html',\n\n  // The title of the website - used by `html-webpack-plugin`\n  title: 'My App'\n}\n```\n# Custom Partials\n\nWhen creating a documentation site or styleguide, it is desirable to customize the look and feel of your layout and pages. Stylegator has been designed to easily plug in different partials into the styleguide. It is actually possible to override every component used in the default styleguide application, giving the author complete control over the appearance.\n\n## Defining the partials\n\nPartials can be any regular React component:\n\n```js\n// src/partials/Logo.jsx\n\nimport React from 'react'\n\nexport default ({ src }) => (\n  <a href=\"/\">\n    <img src={src} />\n  </a>\n)\n```\n\n## Giving the partial to Stylegator\n\nStylegator provides a utility function for configuring custom partials:\n\n```js\nimport { useCustomPartials } from 'stylegator'\n```\n\nUsing this, we can import our own partials and override the default ones:\n\n```js\nimport Logo from './src/partials/Logo'\n\nconst partials = useCustompartials({\n  logo: Logo\n})\n```\n\n## Complete example\n\n```js\nimport React from 'react'\nimport ReactDOM from 'react-dom'\nimport { useCustomPartials, Stylegator } from 'stylegator'\n\nimport Logo from './src/partials/Logo'\n\nconst partials = useCustomPartials({\n  logo: Logo\n})\n\nconst sections = []\n\nReactDOM.render(\n  <Stylegator sections={sections} partials={partials} />,\n  document.getElementById('app')\n)\n\n```\n\n## Annotated list of partials\n\n```js\nuseCustomPartials({\n  // The right content area containing the Page\n  content,\n\n  // The wrapper component\n  layout,\n\n  // The react-live markdown interactive sample output by using the \"code\" directive\n  liveMarkdown,\n\n  // The logo showing at the top left\n  logo,\n\n  // The menu containing navigation links\n  menu,\n\n  // Menu icon\n  menuIcon,\n\n  // Menu navigation links\n  menuLink,\n\n  // The component responsible for rendering out a section\n  page,\n\n  // The props table output by using the \"props\" directive\n  props,\n\n  // The navigation filter input box\n  search,\n\n  // The sidebar containing the logo, search, and menu\n  sidebar,\n\n  // The responsive sidebar toggle\n  sidebarToggle,\n\n  // The component used to render static gfm code blocks\n  staticMarkdown,\n})\n```\n# Static Content\n\nStylegator supports static markdown by simply using\n\n# Examples\n\n## html\n\n```md\n ```html\n <button>label</button>\n ```\n```\n\nresults in:\n\n```html\n<button>label</button>\n```\n\n## images\n\n```md\n![alt text](assets/logo.png)\n```\n\nresults in:\n\n![alt text](assets/logo.png)\n# React Content\n\nAuthoring documentation for React components is slightly more involved than dealing with static markup.\n\nFirst, we must expose the components we wish to document to Stylegator:\n\n```js\nimport React from 'react'\nimport ReactDOM from 'react-dom'\nimport { Stylegator } from 'stylegator'\n\nimport MyComponent from './src/components/MyComponent'\n\nconst sections = []\n\nconst components = {\n  MyComponent,\n}\n\nReactDOM.render(\n  <Stylegator sections={sections} components={components} />,\n  document.getElementById('app')\n)\n```\n\nOnce components have been exposed, they will be added to the global context and usable in code samples:\n\n```md\n ```code\n <MyComponent />\n ```\n```\n\nWhich will result in an interactive code sample using `react-live`:\n```code\n<MyComponent />\n```\n\n## Displaying component props\n\nStylegator comes with a code directive for rendering the PropTypes of a React component. Using the \"props\" directive, along with the [`prop-type-docs`](https://www.npmjs.com/package/prop-types-docs) package, an author can give more descriptive meanings to the props that a component accepts:\n\n```js\n// src/components/MyComponent.js\n\nimport React from 'react'\nimport PropTypes, { withPropDocs } from 'prop-types-docs'\n\nconst MyComponent = ({ children }) => <div>My Component!</div>\n\nexport default withPropDocs({\n  name: 'MyComponent',\n  props: {\n    foo: {\n      type: PropTypes.string,\n      required: false,\n      default: 'bar',\n      description: 'This is a foo',\n    },\n    ...\n    bar: {\n      type: PropTypes.oneOf(['red', 'blue']),\n      description: 'This should be an enum',\n    },\n    ...\n  },\n})(MyComponent)\n```\n\nWith the component props now having full documentation, we can generate a props table in Stylegator using the \"props\" directive:\n\n```md\n ```props\n component: MyComponent\n ```\n```\n\nwill result in:\n\n```props\ncomponent: MyComponent\n```\n# The Appendix\n\nStylegator automatically creates an `/appendix` route. This is a concatenation of all the pages in the styleguide.\n\nBy default, there will be no navigation item for this page displayed in the sidebar.\n\nIf you wish to enable it in the navigation, you can pass `showAppendix: true`:\n\n```js\nReactDOM.render(\n  <Stylegator sections={...} showAppendix={true} />,\n  document.getElementById('app')\n)\n```\n\n**Note:**\n\nThe Appendix currently relies on a Webpack plugin and it does not live reload. You will need to restart your dev server or re-build in order to see appendix updates.\n"

/***/ })

});