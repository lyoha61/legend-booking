type SubmitButtonProps = {
	loading?: boolean,
	agreed?: boolean,
	text: string,
	loadingText?: string,
	onClick?: () => void,
}

export const SubmitButton = ({
	loading,
	agreed,
	text,
	loadingText,
	onClick
}: SubmitButtonProps) => {
	return (
		<button
			type="submit"
			onClick={onClick}
      disabled={loading || !agreed}
      className={`
        mt-2 w-full py-3.5 rounded-xl text-sm font-bold text-white tracking-wide
        transition-all duration-200 relative overflow-hidden
        ${!agreed || loading
          ? "bg-blue-400 cursor-not-allowed opacity-70"
          : "bg-blue-600 hover:bg-blue-700 active:scale-[0.99] shadow-[0_4px_14px_rgba(37,99,235,0.35)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.45)]"
        }
      `}
      style={{ fontFamily: "Manrope, sans-serif" }}
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="3" strokeOpacity="0.3" />
            <path d="M12 2a10 10 0 0 1 10 10" stroke="white" strokeWidth="3" strokeLinecap="round" />
          </svg>
          {loadingText}
        </span>
      ) : (
      	text
      )}
		</button>
	)
}
