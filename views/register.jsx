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
                <form action="" method="post" onSubmit={this.onSubmit} className="form-horizontal">
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" name="email" placeholder="Your email" required="true" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" name="password" placeholder="Your password" required="true" className="form-control" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label">Confirm</label>
                        <div className="col-sm-10">
                            <input type="password" name="confirm" placeholder="Password again" required="true" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <p className="text-danger">
                                { this.state.message }
                            </p>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" disabled={this.state.disabled}  className="btn btn-default">Register</button>
                            <span className="option-link">
                                have an account? Please <a href="/login">Login</a>, or back to <a href="/">home</a>
                            </span>
                        </div>
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
