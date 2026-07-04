import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover"
import { type LucideIcon } from "lucide-react";

type Option = {
	icon?: LucideIcon,
	label: string,
	onClick: () => void,
	danger?: boolean;
}

type Props = {
	icon: React.ReactNode,
	label: string,
	options: Option[];
}

export const ProfileMenuPopover = ({icon, label, options}: Props) => {

	return (
		<Popover>
			<PopoverTrigger asChild>
				<button className="btn-nav-main">
					{icon ?? " "}
					<span>{label}</span>
				</button>
			</PopoverTrigger>
			<PopoverContent className="flex flex-col bg-white shadow-sm rounded-lg overflow-hidden">
				{options.map((option: Option) => (
					<button
						key={option.label}
						onClick={option.onClick}
						className="flex gap-2 cursor-pointer items-center w-full px-4 py-2 text-start text-sm text-gray-700 hover:bg-gray-100 focus-visible:outline-none focus-visible:bg-gray-100 transition-colors"
					>
						{option.icon && <option.icon className="size-4" />}
						{option.label}
					</button>
				))}
			</PopoverContent>
		</Popover>
	)
}
