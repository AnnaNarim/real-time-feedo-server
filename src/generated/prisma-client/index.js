"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Answer",
    embedded: false
  },
  {
    name: "Class",
    embedded: false
  },
  {
    name: "Field",
    embedded: false
  },
  {
    name: "Post",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://real-time-feedo-881c916ca7.herokuapp.com/default/default`
});
exports.prisma = new exports.Prisma();
var models = [
  {
    name: "Answer",
    embedded: false
  },
  {
    name: "Class",
    embedded: false
  },
  {
    name: "Field",
    embedded: false
  },
  {
    name: "Post",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];
