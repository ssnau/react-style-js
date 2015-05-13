var React = require('react');
var url = require('url');

function getURL(props) {
    return props.src || props.url || props.href;
}
function assign(obj, obj2, blacklist) {
    Object.keys(obj2).forEach(function(key) {
        if (blacklist.indexOf(key) === -1) {
            obj[key] = obj2[key];
        }
    });
    return obj;
}

export default class Stylejs extends React.Component {
    renderScript() {
        var data = assign({}, this.props, ['src', 'url', 'href']);
        return <script src={this.props.src} {...data}></script>
    }
    renderLink() {
        var props = this.props;
        var href = getURL(props);
        var type = this.props.type || 'text/css';
        var rel  = this.props.rel || 'stylesheet';
        var data = assign({}, props, ['src', 'url', 'href', 'type', 'rel']);
        return <link href={href} type={type} rel={rel} {...data}/>;
    }
    render() {
        var props = this.props;
        var src = getURL(props);
        var pathname = url.parse(src).pathname || '';
        if (pathname.slice(-('.js'.length)) === '.js') {
            return this.renderScript();
        } else {
            return this.renderLink();
        }
    }
}
