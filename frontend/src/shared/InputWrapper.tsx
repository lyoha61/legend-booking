import {
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import type { Field } from "./hooks/useField";

type InputWrapperProps = {
	label: string,
	icon?: React.ElementType,
	field: Field
	children: React.ReactNode,
	suffix?: string
}

export const InputWrapper = ({
	label,
	icon: Icon,
	field,
	children,
	suffix
}: InputWrapperProps) => {

	const borderColor = {
		error: "border-red-400 bg-red-50/40",
		valid: "border-emerald-400 bg-emerald-50/30",
		focused: "border-blue-500 bg-white shadow-[0_0_0_3px_rgba(37,99,235,0.12)]",
		idle: "border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-white",
	} as const;

	const iconColor = {
		error: "text-red-400",
		valid: "text-emerald-500",
		focused: "text-blue-500",
		idle: "text-slate-400"
	} as const;

	return (
		<div className="flex flex-col gap-1.5">
			<label className="text-sm font-semibold text-slate-700">
				{label}
			</label>
			<div
				className={`relative flex items-center rounded-xl border ${borderColor[field.state]}`}
			>
				{Icon &&
					<Icon
						className={`absolute left-3.5 w-4 h-4 shrink-0 transition-colors ${iconColor[field.state]}`}
					/>
				}
				{children}
				<div className="absolute right-3.5 flex items-center gap-2">
					{suffix && (
						<span className="text-slate-400">{suffix}</span>
					)}

					{field.state == "valid" && (
						<CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
					)}

					{field.state == "error" && (
						<AlertCircle className="w-4 h-4 text-red-400 shrink-0"/>
					)}
				</div>
			</div>
		</div>
	)
}
