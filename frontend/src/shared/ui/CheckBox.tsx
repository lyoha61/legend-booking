import type { ReactNode } from "react"

type CheckBoxProps = {
	checked: boolean,
	onChange: (checked: boolean ) => void,
	children: ReactNode;
}

export const CheckBox = ({ checked, children, onChange }: CheckBoxProps) => {
	return (
		<label className="flex items-start gap-3 cursor-pointer mt-1 group">
	    <div className="relative shrink-0 mt-0.5">
	      <input
	        type="checkbox"
	        checked={checked}
	        onChange={(e) => onChange(e.target.checked)}
	        className="peer sr-only"
	      />
	      <div
	        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-150
	          ${checked
	            ? "bg-blue-600 border-blue-600"
	            : "border-slate-300 bg-white group-hover:border-blue-400"
	          }`}
	      >
	        {checked && (
	          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 12">
	            <path
	              d="M2 6l3 3 5-5"
	              stroke="currentColor"
	              strokeWidth="2"
	              strokeLinecap="round"
	              strokeLinejoin="round"
	            />
	          </svg>
	        )}
	      </div>
	    </div>
	    <span className="text-sm text-slate-600 leading-snug">
	      {children}
	    </span>
		</label>
	)
}
