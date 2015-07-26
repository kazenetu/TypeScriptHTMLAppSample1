var Greeter = require("./Greeter");
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter.Greeter(el);
    greeter.start();
};
