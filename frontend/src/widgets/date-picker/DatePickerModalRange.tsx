import { useState, useCallback, useMemo } from "react";
import { DayPicker, type DateRange } from "@daypicker/react";
import { ru } from "date-fns/locale";
import "./DatePickerStyles.css";
import { CustomCaptionLabel } from "./CustomCaptionLabel";
import { CustomFooter } from "./CustomFooter";
import { isSameDay, isBefore } from "date-fns";

interface DatePickerModalRangeProps {
  selected?: DateRange;
	onApply?: (value: DateRange) => void;
	onCancel?: () => void;
}

export function DatePickerModalRange({
  selected,
	onApply,
	onCancel,
}: DatePickerModalRangeProps) {
  const [internalValue, setInternalValue] = useState<DateRange | undefined>(
    selected
  );

  const today = useMemo(() => new Date(), []);

	const isValidDateRange = (range: DateRange | undefined): boolean => {
	  if (!range?.from || !range?.to) return false;

	  if (isBefore(range.to, range.from)) return false;

	  if (isSameDay(range.from, range.to)) return false;

	  return true;
	};

  const handleSelect = useCallback((value: DateRange | undefined) => {
    setInternalValue(value);
  }, []);

  const handleCancel = useCallback(() => {
		setInternalValue(undefined);
		onCancel?.();
  }, [onCancel]);

  const handleApply = useCallback(() => {
		if (internalValue?.from && internalValue?.to &&  isValidDateRange(internalValue)) {
	    onApply?.(internalValue);
		} else {
			console.log("Invalid date range selected");
			alert("Неверный выбор даты")
		}
  }, [internalValue, onApply]);

  const isDisabled = !(internalValue?.from && internalValue?.to);

  return (
    <div className="bg-white p-4 shadow-sm rounded-lg">
      <DayPicker
        mode="range"
        selected={internalValue}
        defaultMonth={today}
        onSelect={handleSelect}
        required
        className="w-full"
        captionLayout="label"
        hideNavigation={true}
        weekStartsOn={1}
        locale={ru}
        modifiersClassNames={{
          selected: "bg-[#1A1A1A] text-white rounded-lg",
        }}
        components={{
          CaptionLabel: CustomCaptionLabel,
        }}
        footer={
          <CustomFooter
            disabled={isDisabled}
            onCancel={handleCancel}
            onApply={handleApply}
          />
        }
      />
    </div>
  );
}
