import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover"
import type { ReactNode } from "react"
import { ChevronDownIcon } from "lucide-react";

type SelectOption<T = string> = {
  value: T;
  label: string;
};


type PopoverSelectProps<T = string> = {
	icon?: ReactNode,
	label: string,
	value?: number | string | null,
	options: SelectOption<T>[],
	onChange?: (value: T) => void,
	contentProps?: React.ComponentProps<typeof PopoverContent>;
}

export const PopoverSelect = <T extends string | number> ({
	icon,
	label,
	value,
	options,
	onChange,
	contentProps
}: PopoverSelectProps<T>) => {

	const selected = options.find(option => option.value === value);

	return (
		<Popover>
			<PopoverTrigger className="w-full" asChild>
				<button className="flex w-full justify-start gap-2 text-sm text-gray-500 items-center">
					{icon ?? " "}
					<span className={` ${selected?.label ? "text-gray-900" : "text-muted-foreground"}`}>
						{selected?.label ?? label}
					</span>
					<ChevronDownIcon className="size-4" />
				</button>
			</PopoverTrigger>
			<PopoverContent className="flex flex-col bg-white shadow-sm rounded-lg"  {...contentProps}>
				{options.map((option) => (
					<button
						key={option.value}
						onClick={() => onChange?.(option.value)}
						className="cursor-pointer items-center w-full px-4 py-2 text-start text-sm text-gray-700 hover:bg-gray-100 focus-visible:outline-none focus-visible:bg-gray-100 transition-colors"
					>
						{option.label}
					</button>
				))}
			</PopoverContent>
		</Popover>
	)
}
