import { type DateRange } from "@daypicker/react";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { DatePickerModalRange } from "@/widgets/date-picker/";
import { useState } from "react";
import { formatDate } from "@/utils/date";
import { MoveRight } from 'lucide-react';
import { useSearchStore } from "@/shared/store/useSearchStore";
import { cn } from "@/lib/utils";

type Props = {
	value?: DateRange;
	onChange?: (range: DateRange | undefined) => void;
	icon?: React.ElementType;
	className?: string;
};


export function DateRangeField({
	value,
	onChange,
	icon: Icon,
	className,
}: Props) {
	const { checkInDate, checkOutDate, setDates } = useSearchStore();
	const [range, setRange] = useState<DateRange | undefined>(() => {
		if (value) {
			return value;
		}

		if (checkInDate && checkOutDate) {
			const from = new Date(checkInDate);
			const to = new Date(checkOutDate);

			if (
				!isNaN(from.getTime()) &&
				!isNaN(to.getTime())
			) {
				return {
					from,
					to
				};
			}
		}

		return undefined;
	});

	const hasDates = !!range?.from && !!range?.to;

	return (
		<div className={cn("flex-1 p-4", className)}>
			<Popover>
				<PopoverTrigger asChild>
					<button
						className={`flex w-full rounded-lg ${Icon ? "px-4" : ""} py-2  min-w-67 ${
							hasDates ? "text-gray-900 gap-3" : "text-gray-500 gap-7"
							}`}
					>
						{Icon && <Icon className="w-5" />}
						<div className="flex flex-1 gap-3 items-center">
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

								onChange?.(value);

								if (!onChange) {
									setDates(
										value.from?.toISOString() || null,
										value.to?.toISOString() || null
									);
								}
              }
            }}
						onCancel={() => setRange(undefined)}
					/>
				</PopoverContent>
			</Popover>
		</div>
	)
}
