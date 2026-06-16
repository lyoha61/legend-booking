import { PopoverSelect } from "@/shared/PopoverSelect"
import { Users } from "lucide-react";
import { useState } from "react";

export const GuestsField = () => {
	const options = ["Любая вмест.", "1+ гость", "2+ гостя", "3+ гостя", "4+ гостя", "5+ гостей"];
  const [value, setValue] = useState(options[0])

	return (
		<div className="px-4 py-3 min-w-[160px]">
			<p className="uppercase text-xs text-gray-500 mb-1.5 tracking-wide">Гости</p>
			<div className="flex items-center justify-between">
				<PopoverSelect
					icon={<Users className="size-4" />}
					label={value}
					options={options}
					onChange={(value) => setValue(value)}
				/>
			</div>
		</div>
	)
}
