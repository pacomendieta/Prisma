//  src/schema.ts

import {builder} from "./mischemabuilder"

// Importa los models 
import "./models/Mensaje"
import "./models/Usuario.ts"

export const schema = builder.toSchema({})