var React = require('react');
var DefaultLayout = require('./layouts/default.jsx');

module.exports = React.createClass({
    render: function() {
        return (
            <DefaultLayout title={this.props.title}>
                <form action="./" method="post" onSubmit={this.onSubmit}>
                    <input type="email" name="email" placeholder="Your Email?" value="a@a.com" onChange={this.onChange} />
                    <input type="password" name="password" placeholder="Your password?" />
                    <input type="submit" />
                </form>
                <script src="/bundle.js"></script>
            </DefaultLayout>
        );
    },
    onSubmit:function(ev){
        console.log('stop');
        ev.preventDefault();
    },
    onChange:function(ev){
        console.log('on change');
    }
});
