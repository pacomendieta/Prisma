//  src/models/Mensaje.ts

//Definicion del model Mensaje
//Usando el objeto builder generado con la tool @pothos

// src/models/Message.ts

import { builder } from "../mischemabuilder";
import { prisma  } from "../db"

builder.prismaObject("Mensaje", {
  fields: (t) => ({
    id: t.exposeID("id"),
    cuerpo: t.exposeString("cuerpo"),
    userId: t.exposeInt("userId"),
    createdAt: t.expose("createdAt", {
      type: "Date",
    }),
  }),
});

// Define una GraphQL type definition (parte TYPEDEF del schema), que queda 
// embebida en el código del objeto builder.  Su equivalente en SDL es:
/*
type Message {
  cuerpo: String!
  createdAt: Date!
  id: ID!
}
*/

builder.queryField("getMensajesUsuario", (t) =>
  // 2
  t.prismaField({
    // 3
    type: ["Mensaje"],

    args: { userId:t.arg.int({defaultValue:12})},
    // 4
    resolve: async (query, root, args, ctx, info) => {
      console.log("ARGS:", query, args, root)
      return prisma.mensaje.findMany({ where:{userId: 12 }  });
    },
  })
);