"use strict";

const { ServiceBroker } = require("moleculer");
const DbService = require("moleculer-db");
const PrismaAdapter = require("moleculer-db-adapter-prisma");

const broker = new ServiceBroker();

broker.createService({
    name: "posts",
    mixins: [DbService],
    adapter: new PrismaAdapter(),
    model: "post", // Model name in camelCase
});

broker.start()
    // Create a new post
    .then(() => broker.call("posts.create", {
        title: "My first post",
        votes: 0,
        status: true,
    }))

    // Get all posts
    .then(() => broker.call("posts.find").then(console.log));