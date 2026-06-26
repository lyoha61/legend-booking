import { useState } from "react";

type FieldState = "idle" | "focused" | "valid" | "error";

export interface Field {
  value: string;
  state: FieldState;
  error: string;
}

type UseFieldReturn = {
  field: Field;
  onChange: (v: string) => void;
  onFocus: () => void;
  onBlur: () => void;
  setError: (e: string) => void;
};

export function useField(initial = "", validate?: (v: string) => string | null): UseFieldReturn {
	const [field, setField] = useState<Field>({
		value: initial,
		state: "idle",
		error: "",
	});

	const onChange = (v: string) =>
		setField((f) => ({ ...f, value: v, error: "", state: "focused" }));
	const onFocus = () => setField((f) => ({ ...f, state: "focused" }));
	const onBlur = () => {
		setField((f) => {
			if (!f.value) {
				return {
					...f,
					error: "",
					state: "idle"
				};
			}

			const errorMsg = validate ? validate(f.value) : "";

			return {
				...f,
				error: errorMsg || "",
				state: errorMsg ? "error" : "valid"
			};
		});
	};
	const setError = (e: string) =>
		setField((f) => ({ ...f, state: "error", error: e }));

	return { field, onChange, onFocus, onBlur, setError };
}
