"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _userController = require("../controllers/userController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userRouter = _express["default"].Router();

userRouter.get(":id", _userController.see);
userRouter.get("/logout", _userController.logout);
userRouter.get("/edit", _userController.edit);
userRouter.get("/remove", _userController.remove);
var _default = userRouter;
exports["default"] = _default;