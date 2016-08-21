"use strict";

var Hello = React.createClass({
  displayName: "Hello",

  render: function render() {
    var time = this.props.time;

    var n = (time.getTime() - birth) / 1000 / 31556926;
    var num = new Number(n).toFixed(9);
    return React.createElement(
      "div",
      null,
      num
    );
  }
});
var birth = new Date("November 24, 1994 05:00:00").getTime();
var time = new Date();
setInterval(function () {
  time = new Date();
  React.render(React.createElement(Hello, { time: time }), document.getElementById('playground'));
}, 40);