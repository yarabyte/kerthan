/** Vérification synchrone du mode maintenance (compatible Edge / middleware). */
export function isMaintenanceModeEnv(): boolean {
  return process.env.MAINTENANCE_MODE === "true";
}
