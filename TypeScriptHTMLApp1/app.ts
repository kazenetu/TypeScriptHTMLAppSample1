import Greeter = require("./Greeter");

window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter.Greeter(el);
    greeter.start();
};