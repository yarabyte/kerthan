import { Pool } from "pg";
import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";
import * as schema from "./schema";

let pool: Pool | null = null;
let db: NodePgDatabase<typeof schema> | null = null;

/** Connexion PostgreSQL. Variable requise : DATABASE_URL. */
export function getDatabaseUrl(): string | undefined {
  return process.env.DATABASE_URL;
}

export function getDb(): NodePgDatabase<typeof schema> {
  const url = getDatabaseUrl();
  if (!url) {
    throw new Error(
      "DATABASE_URL manquant. Créez une base PostgreSQL dans Coolify et définissez cette variable.",
    );
  }
  if (!db) {
    pool = new Pool({ connectionString: url });
    db = drizzle({ client: pool, schema });
  }
  return db;
}

export async function closeDb(): Promise<void> {
  await pool?.end();
  pool = null;
  db = null;
}
