// src/schema2.ts   Es una version alternativa a schema.ts
// En lugar de crear el schema con el builder, crear el schema "a mano" usando el 
// lenguage SDL, y el metodo makeExecutableSchema

import { prisma  } from "./db"
const { makeExecutableSchema } = require('@graphql-tools/schema')


const typeDefs =`
scalar Date

type Mensaje {
  cuerpo: String!
  createdAt: Date!
  id: ID!
}

type Query {
  getUsuarios: [Usuario!]!
  getMensajes: [Mensaje!]!
}

type Usuario {
  id: ID!
  mensajes: [Mensaje!]!
  nombre: String!
}
`
const resolvers = {
        Query:{
            getUsuarios() {
                return prisma.usuario.findMany({})
            },
            getMensajes() {
              return prisma.mensaje.findMany({})
          }

    }  //end resolvers

}

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

