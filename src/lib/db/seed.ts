import { mkdirSync } from "node:fs";
import { getDb, closeDb } from "./client";
import { seedDatabase } from "./queries/content";

async function main() {
  mkdirSync("./data", { recursive: true });
  getDb();
  console.log("Seeding database…");
  await seedDatabase();
  console.log("Done.");
  await closeDb();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
