import "../load-env";
import { getDb, closeDb } from "./client";
import { seedDatabase } from "./queries/content";

async function main() {
  getDb();
  console.log("Seeding PostgreSQL database…");
  await seedDatabase();
  console.log("Done.");
  await closeDb();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
