(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./src/sections/guides/partials.md":function(n,e){n.exports="# Custom Partials\n\nWhen creating a documentation site or styleguide, it is desirable to customize the look and feel of your layout and pages. Stylegator has been designed to easily plug in different partials into the styleguide. It is actually possible to override every component used in the default styleguide application, giving the author complete control over the appearance.\n\n## Defining the partials\n\nPartials can be any regular React component:\n\n```js\n// src/partials/Logo.jsx\n\nimport React from 'react'\n\nexport default ({ src }) => (\n  <a href=\"/\">\n    <img src={src} />\n  </a>\n)\n```\n\n## Giving the partial to Stylegator\n\nStylegator provides a utility function for configuring custom partials:\n\n```js\nimport { useCustomPartials } from 'stylegator'\n```\n\nUsing this, we can import our own partials and override the default ones:\n\n```js\nimport Logo from './src/partials/Logo'\n\nconst partials = useCustompartials({\n  Logo,\n})\n```\n\n## Complete example\n\n```js\nimport React from 'react'\nimport ReactDOM from 'react-dom'\nimport { useCustomPartials, Stylegator } from 'stylegator'\n\nimport Logo from './src/partials/Logo'\n\nconst partials = useCustomPartials({\n  Logo,\n})\n\nconst sections = []\n\nReactDOM.render(\n  <Stylegator sections={sections} partials={partials} />,\n  document.getElementById('app')\n)\n\n```\n\n## Annotated list of partials\n\n```js\nuseCustomPartials({\n  // The right content area containing the Page\n  Content,\n\n  // The credits text that sticks to the bottom of the sidebar\n  Credits,\n\n  // The wrapper component\n  Layout,\n\n  // The react-live markdown interactive sample output by using the \"code\" directive\n  LiveMarkdown,\n\n  // The logo showing at the top left\n  Logo,\n\n  // The menu containing navigation links\n  Menu,\n\n  // Menu icon\n  MenuIcon,\n\n  // Menu navigation links\n  MenuLink,\n\n  // The component responsible for rendering out a section\n  Page,\n\n  // The header component at the top of each page\n  PageHeader,\n\n  // The props table output by using the \"props\" directive\n  Props,\n\n  // The navigation filter input box\n  Search,\n\n  // The sidebar containing the logo, search, and menu\n  Sidebar,\n\n  // The responsive sidebar toggle\n  SidebarToggle,\n\n  // The component used to render static gfm code blocks\n  StaticMarkdown,\n})\n```\n"}}]);
//# sourceMappingURL=5.js.map