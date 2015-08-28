var MyApp = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <MyPicture />
        <MyIcon1 />
        <MyIcon2 />
        <MyIcon3 />
      </div>
    );
  }
});

var MyPicture = React.createClass({
  render: function(){
    return(
          <img className='me' alt='Picture of Me' src={'img/me.jpeg'} />
    );
  }
});

var MyIcon1 = React.createClass({
  render: function(){
    return(
          <a href={'https://www.linkedin.com/in/nnadi'}><img className='icon' src={'img/linkedIn.png'} /></a>
    );
  }
});
var MyIcon2 = React.createClass({
  render: function(){
    return(
          <a href={'https://github.com/Way2nnadi'}><img className='icon' src={'img/github.png'} /></a>
    );
  }
});
var MyIcon3 = React.createClass({
  render: function(){
    return(
          <a href={'https://nnadicode.wordpress.com/'}><img className='icon' src={'img/wordpress.png'} /></a>
    );
  }
});

React.render(
  <MyApp />,
  document.getElementById('react')
);