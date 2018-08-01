;(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    './src/sections/guides/appendix.md': function(e, n) {
      e.exports =
        "# The Appendix\n\nStylegator will recognize a special section named `__appendix.md`. In order to use this section, add it as an entry in your `sections` list:\n\n```js\n// index.js\n\nconst sections = [\n  ...,\n  {\n    title: 'Appendix',\n    loader: pageLoader(() => import('./sections/__appendix.md')),\n  }\n]\n\nReactDOM.render(\n  <Stylegator {...{ sections }}/>,\n  document.getElementById('app')\n)\n```\n\nUnder the hood, a Webpack plugin will concatenate all of the sibling sections declared in the same `index.js` file and write the result to the `__appendix` asset.\n\n**Note:**\n\nBecause of the Webpack plugin usage live reload is currently not working. You will need to restart your dev server or re-build in order to see appendix updates.\n"
    },
  },
])
