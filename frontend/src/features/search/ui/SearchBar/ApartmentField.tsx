import { PopoverSelect } from "@/shared/PopoverSelect"
import { Home } from "lucide-react";
import { useState } from "react";

export const ApartmenField = () => {
	const options = ["Все", "Студия", "1-ком", "2-ком", "3-ком", "Пентхаус"];
  const [value, setValue] = useState(options[0])

	return (
		<div className="px-4 py-3 min-w-[160px]">
			<p className="uppercase text-xs text-gray-500 mb-1.5 tracking-wide">Тип</p>
			<div className="flex items-center justify-between">
				<PopoverSelect
					icon={<Home className="size-4" />}
					label={value}
					options={options}
					onChange={(value) => setValue(value)}
				/>
			</div>
		</div>
	)
}
