var React = require('react');

var DefaultLayout = React.createClass({
  render: function(){
    return (
      <html>
        <head>
          <title>{this.prop.title}</title>
        </head>
        <body>
          {this.props.children}
        </body>
      </html>
      )
  }
});

module.exports = DefaultLayout;