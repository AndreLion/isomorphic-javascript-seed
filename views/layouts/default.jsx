var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <html>
                <head>
                    <meta charSet="utf-8" />
                    <title>{this.props.title}</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="stylesheet" href="/lib/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="/css/base.css" />
                </head>
                <body>
                    <div className="wrap">
                        {this.props.children}
                    </div>
                    <script src="/lib/js/react.min.js"></script>
                    <script src="/lib/js/jquery.min.js"></script>
                    <script src="/js/jquery-form.js"></script>
                    {this.props.js && this.props.js.map(function(src, i){
                        return <script key={i} src={src}></script>
                    })}
                </body>
            </html>
        );
    }
});
