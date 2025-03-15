// scripts/seed.ts
import { seed } from "@/prisma-db"; // Asegúrate de que la ruta sea correcta

async function runSeed() {
  try {
    console.log("Ejecutando la semilla...");
    await seed();
    console.log("Semilla completada con éxito.");
  } catch (error) {
    console.error("Error al ejecutar la semilla:", error);
  } finally {
    process.exit(0); // Termina el proceso
  }
}

runSeed();