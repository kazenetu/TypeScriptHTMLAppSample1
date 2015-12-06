var Greeter_1 = require('./Greeter');
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter_1.default(el);
    greeter.start();
};
