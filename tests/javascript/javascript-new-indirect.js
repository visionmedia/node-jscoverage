function X() {}
function y() { return X; }
x = new (y())();
x = new (y())(1);
x = new (y())(1, 2);
