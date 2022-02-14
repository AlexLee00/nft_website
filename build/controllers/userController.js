"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wallet = exports.see = exports.remove = exports.register = exports.logout = exports.login = exports.join = exports.edit = void 0;

var join = function join(req, res) {
  return res.send("Join");
};

exports.join = join;

var login = function login(req, res) {
  return res.render("Login");
};

exports.login = login;

var register = function register(req, res) {
  return res.render("Register");
};

exports.register = register;

var wallet = function wallet(req, res) {
  return res.render("Wallet");
};

exports.wallet = wallet;

var see = function see(req, res) {
  return res.send("See User");
};

exports.see = see;

var logout = function logout(req, res) {
  return res.send("Logout");
};

exports.logout = logout;

var edit = function edit(req, res) {
  return res.send("Edit User");
};

exports.edit = edit;

var remove = function remove(req, res) {
  return res.send("Delete User");
};

exports.remove = remove;