var React = require('react');
var DefaultLayout = require('./layouts/default.jsx');

module.exports = React.createClass({
    getInitialState: function() {
        return{
            disabled:true,
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
                    <input type="email" name="email" placeholder="Your Email?" required="true" />
                    <input type="password" name="password" placeholder="Your password" required="true" />
                    <input type="password" name="confirm" placeholder="Your password again" required="true" />
                    <input type="submit" disabled={this.state.disabled} value="Register" />
                    Already have an account? Please <a href="/login">Login</a>
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
        var form = $('form[data-reactid="'+rid+'"]');
        var password = form.find('input[name="password"]').val();
        var confirm = form.find('input[name="confirm"]').val();
        if(password === confirm){
            form.form({
                success:function(data){
                    console.log('success',data);
                    self.setState({message: data.message});
                    if(data.success === true){
                        location.assign('/');
                    }else{
                        //
                    }
                }
            });
        }else{
            self.setState({message: 'Passwords don\'t match.'});
        }
    }
});
