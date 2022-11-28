//  src/models/Mensaje.ts

//Definicion del model Mensaje
//Usando el objeto builder generado con la tool @pothos

// src/models/Message.ts

import { builder } from "../mischemabuilder";

builder.prismaObject("Mensaje", {
  fields: (t) => ({
    id: t.exposeID("id"),
    cuerpo: t.exposeString("cuerpo"),
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