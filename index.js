'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var React = require('react');
var url = require('url');

function getURL(props) {
    return props.src || props.url || props.href;
}
function assign(obj, obj2, blacklist) {
    Object.keys(obj2).forEach(function (key) {
        if (blacklist.indexOf(key) === -1) {
            obj[key] = obj2[key];
        }
    });
    return obj;
}

var Stylejs = (function (_React$Component) {
    function Stylejs() {
        _classCallCheck(this, Stylejs);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(Stylejs, _React$Component);

    _createClass(Stylejs, [{
        key: 'renderScript',
        value: function renderScript() {
            var data = assign({}, this.props, ['src', 'url', 'href']);
            return React.createElement('script', _extends({ src: this.props.src }, data));
        }
    }, {
        key: 'renderLink',
        value: function renderLink() {
            var props = this.props;
            var href = getURL(props);
            var type = this.props.type || 'text/css';
            var rel = this.props.rel || 'stylesheet';
            var data = assign({}, props, ['src', 'url', 'href', 'type', 'rel']);
            return React.createElement('link', _extends({ href: href, type: type, rel: rel }, data));
        }
    }, {
        key: 'render',
        value: function render() {
            var props = this.props;
            var src = getURL(props);
            var pathname = url.parse(src).pathname || '';
            if (pathname.slice(-'.js'.length) === '.js') {
                return this.renderScript();
            } else {
                return this.renderLink();
            }
        }
    }]);

    return Stylejs;
})(React.Component);

exports['default'] = Stylejs;
module.exports = exports['default'];
