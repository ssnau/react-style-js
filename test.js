var React = require('react');
var Stylejs = require('./');
var assert = require('assert');
describe('render', function () {
    it('should render stylesheet', function() {
        var markup = React.renderToStaticMarkup(<Stylejs src='/a/b/c.css' />);
        assert.equal(markup, '<link href="/a/b/c.css" type="text/css" rel="stylesheet">');
    });

    it('should render script', function() {
        var markup = React.renderToStaticMarkup(<Stylejs src='/a/b/c.js' />);
        assert.equal(markup, '<script src="/a/b/c.js"></script>');
    });

    it('should render extra props', function () {
        var markup = React.renderToStaticMarkup(<Stylejs src='/a/b/c.css' id='ss'/>);
        assert.equal(markup, '<link href="/a/b/c.css" type="text/css" rel="stylesheet" id="ss">');
    });
});
