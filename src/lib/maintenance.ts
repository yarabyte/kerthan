import { getMaintenanceMode } from "@/lib/db/queries/content";

/** Active le mode maintenance (page « Bientôt en ligne »). */
export async function isMaintenanceMode(): Promise<boolean> {
  return getMaintenanceMode();
}

/** Sync check for env-only fallback (middleware edge). */
export function isMaintenanceModeEnv(): boolean {
  return process.env.MAINTENANCE_MODE === "true";
}
