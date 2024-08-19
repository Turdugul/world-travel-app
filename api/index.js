import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('./api/data/cities.json'); // Path to your data
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

export default server;