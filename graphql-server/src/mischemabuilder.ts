// src/schemabuilder.ts   Crear schema con la tool @pothos/core
// - Registra un scalar type: Date  (ya que Date no un es un tipo escalar incluido)
//  Exporta un schema que:
//   incluye el type Date

// src/builder.ts

import SchemaBuilder from "@pothos/core";
import { DateResolver } from "graphql-scalars";
import PrismaPlugin from "@pothos/plugin-prisma";
import type PrismaTypes from "@pothos/plugin-prisma/generated";
import { prisma } from "./db";

export const builder = new SchemaBuilder<{
  Scalars: {
    Date: { Input: Date; Output: Date };
  };
  PrismaTypes: PrismaTypes;
}>({
  plugins: [PrismaPlugin],
  prisma: {client:prisma}
});

builder.addScalarType("Date", DateResolver, {});

builder.queryType({});