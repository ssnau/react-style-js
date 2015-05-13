react-style-js
---------

A simple Style/Script Wrapper that render expected tag for you base on the url/href/src you passed.

Install
-------

```
npm install react-style-js
```

Example
-------

```
var Stylejs = require('react-style-js');
// eleminate the gap between src/href/url props
React.renderToStaticMarkup(<Stylejs src="a/b/c.css" />);
React.renderToStaticMarkup(<Stylejs href="a/b/c.css" />);
React.renderToStaticMarkup(<Stylejs url="a/b/c.css" />);
// => <link href="/a/b/c.css" type="text/css" rel="stylesheet">

React.renderToStaticMarkup(<Stylejs src="a/b/c.js" />);
// => <script src="a/b/c.js"></script>
```

Why?
------

For some reason, I compiled scss/css/less/stylus into js file to let them support HMR, thus i needed the style tag to be automatically transformed into script tag. Moreover, the properties (`rel`, `href`, `type`) on `<link>` tag are always annoying so I decided to ignore them when create link tag;

License
------
MIT
