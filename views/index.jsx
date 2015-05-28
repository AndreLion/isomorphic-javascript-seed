var React = require('react');
var DefaultLayout = require('./layouts/default');

var HelloMessage = React.createClass({
    render: function() {
        return (
            <DefaultLayout title={this.props.title}>
                <div>Hello Guest!</div>
                <a href="/login">Login / Register</a>
            </DefaultLayout>
        );
    }
});

module.exports = HelloMessage;
