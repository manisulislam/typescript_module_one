"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
}
var signInUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var heros = ["anis", "ahad", "fahad"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
addTwo(5);
getUpper("anis");
signUpUser("anis", "ak@gmail.com", true);
signInUser("ahad", "ahad@gmail.com");
