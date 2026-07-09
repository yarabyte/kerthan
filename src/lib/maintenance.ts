import { getMaintenanceMode } from "@/lib/db/queries/content";

/** Active le mode maintenance (page « Bientôt en ligne »). */
export async function isMaintenanceMode(): Promise<boolean> {
  return getMaintenanceMode();
}

export { isMaintenanceModeEnv } from "./maintenance-env";
