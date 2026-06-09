interface DatePickerFooterProps {
  onCancel?: () => void;
  onApply?: () => void;
  cancelText?: string;
  applyText?: string;
  disabled?: boolean;
}

export function CustomFooter({
  onCancel,
  onApply,
  cancelText = "Сбросить",
  applyText = "Применить",
  disabled = false,
}: DatePickerFooterProps) {

  return (
    <div className="flex gap-3 mt-4">
      <button
        type="button"
        onClick={onCancel}
        className="border border-gray-400 rounded-lg px-4 py-2 cursor-pointer"
      >
        {cancelText}
      </button>
      <button
        type="button"
        onClick={onApply}
        disabled={disabled}
				className={`bg-[#1A1A1A] rounded-lg text-white px-4 py-2 cursor-pointer ${
					disabled
					? "opacity-50 cursor-not-allowed"
					: ''
        }`
        }
      >
        {applyText}
      </button>
    </div>
  );
}
