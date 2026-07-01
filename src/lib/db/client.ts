import { createClient, type Client } from "@libsql/client";
import { drizzle, type LibSQLDatabase } from "drizzle-orm/libsql";
import * as schema from "./schema";

let client: Client | null = null;
let db: LibSQLDatabase<typeof schema> | null = null;

function getDatabaseUrl(): string {
  const url = process.env.TURSO_DATABASE_URL;
  if (url) return url;
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
