import { format, isValid, parseISO } from "date-fns";
import { ru } from "date-fns/locale";
import { capitalizeFirst } from "./capitalizeFirst";

export function formatDate(
	date: Date | string | undefined | null,
	pattern: string = "d MMMM"
): string {
	if (!date) return "";

	let dateObj: Date;
	if (typeof date === "string") {
		dateObj = parseISO(date);

		if (!isValid(dateObj)) dateObj = new Date(date);

	} else {
		dateObj = date;
	}

	if (!isValid(dateObj)) return "";

	return capitalizeFirst(format(dateObj, pattern, { locale: ru }));
}
