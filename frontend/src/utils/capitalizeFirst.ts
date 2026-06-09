import type { ReactNode } from "react";

/**
 * Делает первую букву строки заглавной
 */
export function capitalizeFirst(value: ReactNode | string | number | null | undefined): string {
	if (value === null || value === undefined) return "";

  const str = String(value);
  if (!str) return str;

  return str.charAt(0).toUpperCase() + str.slice(1);
}
