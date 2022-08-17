import fastify, { FastifyInstance } from "fastify";

const server: FastifyInstance = fastify();

server.get("/", async (req, res) => {
  res.send("Hello World!");
});

server
  .listen({ port: 9000 })
  .then(() => console.log("FASTIFY SERVER RUNNING ON PORT 9000"));
