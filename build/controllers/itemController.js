"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upload = exports.see = exports.remove = exports.rankings = exports.news = exports.main = exports.help = exports.gallery = exports.explore = exports.edit = exports.detail = exports.contact = void 0;

var main = function main(req, res) {
  return res.render("index");
};

exports.main = main;

var explore = function explore(req, res) {
  return res.render("explore");
};

exports.explore = explore;

var see = function see(req, res) {
  return res.render("see");
};

exports.see = see;

var detail = function detail(req, res) {
  return res.render("detail");
};

exports.detail = detail;

var rankings = function rankings(req, res) {
  return res.render("rankings");
};

exports.rankings = rankings;

var news = function news(req, res) {
  return res.render("news");
};

exports.news = news;

var gallery = function gallery(req, res) {
  return res.render("gallery");
};

exports.gallery = gallery;

var contact = function contact(req, res) {
  return res.render("contact");
};

exports.contact = contact;

var help = function help(req, res) {
  return res.render("help");
};

exports.help = help;

var edit = function edit(req, res) {
  return res.render("edit");
};

exports.edit = edit;

var remove = function remove(req, res) {
  return res.send("Remove Item");
};

exports.remove = remove;

var upload = function upload(req, res) {
  return res.send("Upload Item");
};

exports.upload = upload;