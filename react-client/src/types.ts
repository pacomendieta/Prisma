// Modulo TS para definir y exportar tipos de datos
export type Mensaje = {
    cuerpo: string;
}

export type Usuario = {
    nombre: String,
    mensajes: Mensaje[]
}