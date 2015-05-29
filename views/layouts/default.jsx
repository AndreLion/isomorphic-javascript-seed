var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <html>
                <head>
                    <meta charSet="utf-8" />
                    <title>{this.props.title}</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </head>
                <body>
                    {this.props.children}
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
