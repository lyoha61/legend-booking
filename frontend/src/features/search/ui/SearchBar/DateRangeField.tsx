import { type DateRange } from "@daypicker/react";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { DatePickerModalRange } from "@/widgets/date-picker/";
import { useState, useEffect } from "react";
import { Calendar } from 'lucide-react';
import { formatDate } from "@/utils/date";
import { MoveRight } from 'lucide-react';
import { useSearchStore } from "@/shared/store/useSearchStore";

export function DateRangeField() {
	const { checkInDate, checkOutDate, setDates } = useSearchStore();
	const [range, setRange] = useState<DateRange | undefined>(() => {
		if (checkInDate && checkOutDate) {
			return { from: new Date(checkInDate), to: new Date(checkOutDate) }
		}
		return undefined;
	});

	const hasDates = !!range?.from && !!range?.to;

	return (
		<div className="flex-1 p-4">
			<Popover>
				<PopoverTrigger asChild>
					<button
						className={`flex w-full rounded-lg px-4 py-2  min-w-67 ${
							hasDates ? "text-gray-900 gap-3" : "text-gray-500 gap-7"
							}`}
					>
						<Calendar className="w-5" />
						<div className="flex flex-1 gap-3">
							<span>
								{formatDate(range?.from) || "Заезд"}
							</span>
							<MoveRight
								className={`w-4 ${hasDates ? "text-gray-900" : "text-gray-500"}`} />
							<span>
								{formatDate(range?.to) || "Выезд"}
							</span>
						</div>
					</button>
				</PopoverTrigger>
				<PopoverContent alignOffset={50} align="start" sideOffset={10}>
					<DatePickerModalRange
						selected={range}
					 	onApply={(value) => {
							if ('from' in value) {
								setRange(value);

								setDates(
					        value.from?.toISOString() || null,
					        value.to?.toISOString() || null
					      );
              }
            }}
						onCancel={() => setRange(undefined)}
					/>
				</PopoverContent>
			</Popover>
		</div>
	)
}
