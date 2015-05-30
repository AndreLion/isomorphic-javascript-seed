var React = require('react');
var DefaultLayout = require('./layouts/default.jsx');

module.exports = React.createClass({
    render: function() {
        return (
            <DefaultLayout title={this.props.title}>
                <p className="lead">Welcome {this.props.email?this.props.email:'Anonymous user'} !</p>
                {this.props.email
                    ? <p>You have logged in, now you can <a href="/logout">logout</a></p>
                    : <p>Please <a href="/login">Login</a> or <a href="/register">Register</a></p>
                }
            </DefaultLayout>
        );
    }
});
