import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover"
import type { ReactNode } from "react"
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "lucide-react";

type PopoverSelectProps = {
	icon: ReactNode,
	label: string,
	options: string[],
	onChange?: (value: string) => void,
	contentProps?: React.ComponentProps<typeof PopoverContent>;
}

export const PopoverSelect = ({
	icon,
	label,
	options,
	onChange,
	contentProps
}: PopoverSelectProps) => {

	return (
		<Popover>
			<PopoverTrigger className="w-full">
				<button className="flex w-full justify-start gap-2 text-sm text-gray-500 items-center">
					{icon ?? " "}
					<span className="text-gray-900">{label}</span>
					<ChevronDownIcon className="size-4" />
				</button>
			</PopoverTrigger>
			<PopoverContent className="flex flex-col bg-white shadow-sm rounded-lg"  {...contentProps}>
				{options.map((option) => (
					<button
						key={option}
						onClick={() => onChange?.(option)}
						className="cursor-pointer items-center w-full px-4 py-2 text-start text-sm text-gray-700 hover:bg-gray-100 focus-visible:outline-none focus-visible:bg-gray-100 transition-colors"
					>
						{option}
					</button>
				))}
			</PopoverContent>
		</Popover>
	)
}
