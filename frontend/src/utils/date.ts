import { format, isValid } from "date-fns";
import { ru } from "date-fns/locale";
import { capitalizeFirst } from "./capitalizeFirst";

export function formatDate(date: Date | undefined, pattern: string = "d MMMM"): string {
  if (!date || !isValid(date)) return "";
  return capitalizeFirst(format(date, pattern, { locale: ru }));
}
