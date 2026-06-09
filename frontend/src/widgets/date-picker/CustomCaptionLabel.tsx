import { useMemo } from "react";
import { useDayPicker } from "@daypicker/react";
import type { CaptionLabelProps } from "@daypicker/react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { capitalizeFirst } from "@/utils/capitalizeFirst";

export function CustomCaptionLabel(props: CaptionLabelProps) {
  const { previousMonth, nextMonth, goToMonth } = useDayPicker();

 const monthLabel = useMemo(() => {
    const fallback = format(new Date(), "MMMM yyyy", { locale: ru });
    return capitalizeFirst(props.children ?? fallback);
  }, [props.children]);

  return (
		<div
			className="flex items-center justify-center gap-4"
		>
      <button
        onClick={() => previousMonth && goToMonth(previousMonth)}
        disabled={!previousMonth}
				className="nav-month-button"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <span>{monthLabel}</span>

      <button
        onClick={() => nextMonth && goToMonth(nextMonth)}
        disabled={!nextMonth}
				style={{ cursor: nextMonth ? "pointer" : "default" }}
				className="nav-month-button"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
