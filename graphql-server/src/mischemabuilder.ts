// src/schemabuilder.ts   Crear schema con la tool @pothos/core

import SchemaBuilder from "@pothos/core";
import {DateResolver} from "graphql-scalars"


export const builder = new SchemaBuilder<{
    Scalars: {
      Date: { Input: Date; Output: Date };
    };
  }>({});
  
  // 3
  builder.addScalarType("Date", DateResolver, {});