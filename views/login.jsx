var React = require('react');
var DefaultLayout = require('./layouts/default.jsx');

module.exports = React.createClass({
    getInitialState: function() {
        return{
            disabled:true,
            email:'a@a.com',
            message:''
        }
    },
    componentDidMount: function() {
        this.setState({disabled: false})
    },
    render: function() {
        return (
            <DefaultLayout title={this.props.title} js={this.props.js}>
                <form action="" method="post" onSubmit={this.onSubmit}>
                    <input type="email" name="email" placeholder="Your Email?" value={this.state.email} required="true" onChange={this.onChange} />
                    <input type="password" name="password" placeholder="Your password?" required="true" />
                    <input type="submit" disabled={this.state.disabled} value="Login" />
                    Don't have an account? Please <a href="/register">Register</a>
                    <div className="message-field">
                        { this.state.message }
                    </div>
                </form>
            </DefaultLayout>
        );
    },
    onSubmit:function(ev,rid){
        ev.preventDefault();
        var self = this;
        $('form[data-reactid="'+rid+'"]').form({
            success:function(data){
                console.log('success',data);
                self.setState({message: data.message});
                if(data.success){
                    location.assign('/');
                }
            }
        });
    },
    onChange:function(ev){
        this.setState({email: ev.target.value});
    }
});
