'use strict';

var MyApp = React.createClass({
  displayName: 'MyApp',

  render: function render() {
    return React.createElement(
      'div',
      { className: 'commentBox' },
      React.createElement(MyPicture, null),
      React.createElement(MyIcon1, null),
      React.createElement(MyIcon2, null),
      React.createElement(MyIcon3, null)
    );
  }
});

var MyPicture = React.createClass({
  displayName: 'MyPicture',

  render: function render() {
    return React.createElement('img', { className: 'me', alt: 'Picture of Me', src: 'img/me.jpeg' });
  }
});

var MyIcon1 = React.createClass({
  displayName: 'MyIcon1',

  render: function render() {
    return React.createElement(
      'a',
      { href: 'https://www.linkedin.com/in/nnadi' },
      React.createElement('img', { className: 'icon', src: 'img/linkedIn.png' })
    );
  }
});
var MyIcon2 = React.createClass({
  displayName: 'MyIcon2',

  render: function render() {
    return React.createElement(
      'a',
      { href: 'https://github.com/Way2nnadi' },
      React.createElement('img', { className: 'icon', src: 'img/github.png' })
    );
  }
});
var MyIcon3 = React.createClass({
  displayName: 'MyIcon3',

  render: function render() {
    return React.createElement(
      'a',
      { href: 'https://nnadicode.wordpress.com/' },
      React.createElement('img', { className: 'icon', src: 'img/wordpress.png' })
    );
  }
});

React.render(React.createElement(MyApp, null), document.getElementById('react'));
//# sourceMappingURL=logic.js.map
