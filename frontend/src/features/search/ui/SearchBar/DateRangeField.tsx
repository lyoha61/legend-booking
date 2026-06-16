import { type DateRange } from "@daypicker/react";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { DatePickerModalRange } from "@/widgets/date-picker/";
import { useState } from "react";
import { Calendar } from 'lucide-react';
import { formatDate } from "@/utils/date";
import { MoveRight } from 'lucide-react';

export function DateRangeField() {
	const [range, setRange] = useState<DateRange | undefined>(undefined);
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
							if ('from' in value)
								setRange(value)
						}}
						onCancel={() => setRange(undefined)}
					/>
				</PopoverContent>
			</Popover>
		</div>
	)
}
