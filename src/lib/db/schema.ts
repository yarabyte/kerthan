import { sql } from "drizzle-orm";
import { integer, primaryKey, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const siteSettings = sqliteTable(
  "site_settings",
  {
    key: text("key").notNull(),
    scope: text("scope", { enum: ["draft", "published"] }).notNull(),
    value: text("value", { mode: "json" }).notNull(),
    updatedAt: integer("updated_at", { mode: "timestamp" })
      .notNull()
      .default(sql`(unixepoch())`),
  },
  (table) => [primaryKey({ columns: [table.key, table.scope] })],
);

export const contentItems = sqliteTable("content_items", {
  id: text("id").primaryKey(),
  itemType: text("item_type").notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
  status: text("status", { enum: ["draft", "published"] }).notNull(),
  data: text("data", { mode: "json" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(unixepoch())`),
});

export const contactSubmissions = sqliteTable("contact_submissions", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  service: text("service"),
  message: text("message"),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(unixepoch())`),
  readAt: integer("read_at", { mode: "timestamp" }),
});
