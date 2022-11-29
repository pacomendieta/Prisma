// src/index.ts
// CREAR UN SCHEMA FAKE -------------------------
import { createSchema } from 'graphql-yoga'
import { schema } from './schema';
//----------------------------------------------

// --- CREAR YOGA GRAPHQL SERVER ----------------------
// 1
import { createServer } from "node:http";
import { createYoga } from 'graphql-yoga'
const yoga = createYoga({ schema })
// 2
const port = Number(process.env.GRAPHQL_API_PORT) || 4000
// 3
const server = createServer( yoga );
// 4
server.listen(port,() => {
  console.log(`🚀 GraphQL Server ready at http://localhost:${port}/graphql`);
});