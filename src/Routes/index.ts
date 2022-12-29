import express, { Application } from "express";


const test = require("./test");

const routes = function (server:  Application) {
  server.use("/test", test);
};

module.exports = routes;