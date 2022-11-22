//fichero para alimentar de datos de prueba la bbdd usando la clase PrismaClient (paquete @prisma/client) y el método create() que crea directamente el registro en la bbdd
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Delete all `usuario` and `mensaje` records
  await prisma.mensaje.deleteMany({});
  await prisma.usuario.deleteMany({});
  // (Re-)Create dummy `usuario` and `mensaje` records
  await prisma.usuario.create({
    data: {
      nombre: "Jack",
      mensajes: {
        create: [
          {
            cuerpo: "A Note for Jack",
          },
          {
            cuerpo: "Another note for Jack",
          },
        ],
      },
    },
  });
  await prisma.usuario.create({
    data: {
      nombre: "Ryan",
      mensajes: {
        create: [
          {
            cuerpo: "A Note for Ryan",
          },
          {
            cuerpo: "Another note for Ryan",
          },
        ],
      },
    },
  });
  await prisma.usuario.create({
    data: {
      nombre: "Adam",
      mensajes: {
        create: [
          {
            cuerpo: "A Note for Adam",
          },
          {
            cuerpo: "Another note for Adam",
          },
        ],
      },
    },
  });
}

main().then(() => {
  console.log("Datos alimentados en la bbdd ...");
});