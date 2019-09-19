"use strict";

const express = require("express")
const routes = require("./routes/routes.js")

const getMethods = routes.getMethods

const registerServer = () => {
   const app = express();

   const port = 8000;

   getMethods.forEach(route => {
      app.get(route.url, route.method);
   })

   app.listen(port, () => {
      console.log("Running RestHub on port " + port);
   });
}

module.exports.register = registerServer

