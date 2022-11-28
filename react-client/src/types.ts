import { GetUsuariosQuery } from "./graphql/generated";

// Modulo  TS para definir y exportar tipos de datos
export type Mensaje = GetUsuariosQuery["getUsuarios"][0]["mensajes"][0]

export type Usuario = GetUsuariosQuery["getUsuarios"][0]

