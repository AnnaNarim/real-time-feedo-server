const { GraphQLServer, PubSub } = require('graphql-yoga')
require('dotenv').config()
const { prisma } = require('./generated/prisma-client')
const resolvers = require('./resolvers')
const { SubscriptionServer } = require('subscriptions-transport-ws')
const { execute, subscribe } = require('graphql')
// const { schema } = require('./schema.graphql')

const pubsub = new PubSub()

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma,
      pubsub
    }
  },
})

// const websocketServer = createServer((request, response) => {
//   response.writeHead(404);
//   response.end();
// });

// // Bind it to port and start listening
// websocketServer.listen(WS_PORT, () => console.log(
//   `Websocket Server is now running on http://localhost:${WS_PORT}`
// ));

// const subscriptionServer = SubscriptionServer.create(
//   {
//   	schema,
//   	execute,
//     subscribe,
//   },
//   {
//     server,
//     path: '/graphql',
//   },
// );

const options = {
	port: process.env.PORT || 4000,
	subscriptions: subscribe
}

server.start(options, ({ port }) => console.log(`Server is running on http://localhost:${port}`));
