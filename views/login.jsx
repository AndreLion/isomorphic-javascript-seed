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
                <form action="" method="post" onSubmit={this.onSubmit} className="form-horizontal">
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control"  placeholder="Email" name="email" value={this.state.email} required="true" onChange={this.onChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" name="password" placeholder="Your password?" required="true" className="form-control" placeholder="Password" />
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
                            <button type="submit" disabled={this.state.disabled}  className="btn btn-default">Login</button>
                            <span className="option-link">
                                Have no account? Please <a href="/register">Register</a>, or back to <a href="/">home</a>
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
