import { createClient, type Client } from "@libsql/client";
import { drizzle, type LibSQLDatabase } from "drizzle-orm/libsql";
import * as schema from "./schema";

let client: Client | null = null;
let db: LibSQLDatabase<typeof schema> | null = null;

function getDatabaseUrl(): string {
  const url = process.env.TURSO_DATABASE_URL;
  if (url) return url;

  if (!process.env.VERCEL) {
    return "file:./data/kerthan.db";
  }

  // Vercel build: DB fichier indisponible — mémoire éphémère pour la génération statique
  if (process.env.NEXT_PHASE === "phase-production-build") {
    return ":memory:";
  }

  return "file:./data/kerthan.db";
}

function getAuthToken(): string | undefined {
  return process.env.TURSO_AUTH_TOKEN || undefined;
}

export function getDb(): LibSQLDatabase<typeof schema> {
  if (!db) {
    client = createClient({
      url: getDatabaseUrl(),
      authToken: getAuthToken(),
    });
    db = drizzle(client, { schema });
  }
  return db;
}

export async function closeDb(): Promise<void> {
  if (client) {
    client.close();
    client = null;
    db = null;
  }
}
