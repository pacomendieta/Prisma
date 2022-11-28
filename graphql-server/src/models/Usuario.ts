// src/models/Usuario.ts
// Define el model Usuario: objeto Usuario con sus queries disponibles a traves del api


import { builder } from "../mischemabuilder";
import { prisma  } from "../db"

builder.prismaObject("Usuario", {
    fields: t=>({
        id: t.exposeID("id"),
        nombre: t.exposeString("nombre"),
        mensajes: t.relation("Mensaje")
    })
})

// Define una GraphQL type definition (parte TYPEDEF del schema), que queda 
// embebida en el código del objeto builder.  Su equivalente en SDL es:
/*
type User {
    id: ID!
    messages: [Message!]!
    name: String!
  }
*/
//-------definir las queries (Type Query de la parte TYPEDEF) -----------------
builder.queryField("getUsuarios", (t) =>
  // 2
  t.prismaField({
    // 3
    type: ["Usuario"],
    // 4
    resolve: async (query, root, args, ctx, info) => {
      return prisma.usuario.findMany({ ...query });
    },
  })
);
//----- El equivalente definiendo manualmente en lenguaje SDL:  
/* 
type Query {
    usuarios: [Usuario!]!
}
*/