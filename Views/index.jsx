var React = require('react');
var DefaultLayout = require('./layouts/defaults');

var HelloMessage = React.createClass({
  render: function(){
    return (
      <DefaultLayout title={this.props.title}>
        <div>Hello {this.prop.name}</div>
      </DefaultLayout>
    );
  }
})

module.exports = HelloMessage;