import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { LeftPanel } from "./LeftPanel";
import { InputWrapper } from "@/shared/InputWrapper";
import { useField } from "@/shared/hooks/useField";
import { useState } from "react";
import { GoogleIcon } from "@/shared/icons/GoogleIcon";
import { SubmitButton } from "@/shared/ui/SubmitButton";
import { validateAgreement, validateEmail, validatePassword } from "@/shared/utils/validation";
import { CheckBox } from "@/shared/ui/CheckBox";
import { register } from "./api/authApi";
import type { ApiError } from "@/shared/api/types";
import { ErrorCode, errorMessages } from "@/shared/messages/errors";


export const Register = () => {
	const {
	  field: email,
	  onChange: setEmail,
	  onFocus: emailFocus,
	  onBlur: emailBlur,
	  setError: setEmailError
	} = useField("", validateEmail);

	const {
	  field: password,
	  onChange: setPassword,
	  onFocus: passwordFocus,
	  onBlur: passwordBlur,
	  setError: setPasswordError
	} = useField("", validatePassword);

	const [showPass, setShowPass] = useState(false);
	const [agreed, setAgreed] = useState(false);
	const [loading, setLoading] = useState(false);
	const [serverError, setServerError] = useState("");

	const inputClass =
		"w-full pl-10 pr-10 py-3 bg-transparent text-sm text-slate-800 placeholder:text-slate-400 outline-none rounded-xl";

	const handleSubmit = async (e: React.SubmitEvent) => {
		e.preventDefault();
		const emailError = validateEmail(email.value);
		const passwordError = validatePassword(password.value);
		const agreedError = validateAgreement(agreed);

	  if (emailError) setEmailError(emailError);
	  if (passwordError) setPasswordError(passwordError);
		if (agreedError) setAgreed(false);

		if (emailError || passwordError || agreedError) {
			return;
		}

		try {
			await register({
				email: email.value,
				password: password.value
			});
		} catch (err) {
			const error = err as ApiError;
			if (error.code === ErrorCode.EMAIL_ALREADY_EXISTS) {
				setEmailError(errorMessages[error.code]);
				return;
			}

			setServerError(errorMessages[error.code]);
		}
	}

	return (
		<div className="flex flex-col sm:grid grid-cols-[1.5fr_2fr] h-full w-full ">
			<LeftPanel className="" />

			<div className="flex  flex-col items-center justify-center px-5 py-10 md:py-16 bg-[#F7F8FC]">
				<div className="w-full max-w-[440px]">
					<div className="mb-8 flex flex-col gap-1.5">
						<h2 className="text-2xl md:text-3xl fontfont-extrabold text-slate-900">
							Создать аккаунт
						</h2>
						<p className="text-slate-500 text-sm">
							Заполните форму, чтобы начать пользоваться сервисом
						</p>
					</div>

					<form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
						<InputWrapper label="Email" icon={Mail} field={email} >
							<input
								type="email"
								placeholder="ivan@example.com"
								className={inputClass}
								onChange={(e) => setEmail(e.target.value)}
								onFocus={emailFocus}
								onBlur={emailBlur}
								autoComplete="email"
							/>
						</InputWrapper>

						<InputWrapper label="Пароль" icon={Lock} field={password}>
              <input
                type={showPass ? "text" : "password"}
                placeholder="Минимум 8 символов"
                value={password.value}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={passwordFocus}
                onBlur={passwordBlur}
                className={inputClass}
                autoComplete="new-password"
              />
              <button
                type="button"
                tabIndex={-1}
                onClick={() => setShowPass((v) => !v)}
                className={`absolute right-3.5 text-slate-400 hover:text-slate-600 transition-colors ${password.state === "error" || password.state === "valid" ? "right-9" : "right-3.5"}`}
              >
                {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
						</InputWrapper>

						<CheckBox checked={agreed} onChange={setAgreed}>
							Я соглашаюсь с{" "}
              <a href="#" className="text-blue-600 hover:text-blue-700 underline underline-offset-2 font-medium">
                условиями использования
              </a>{" "}
              и{" "}
              <a href="#" className="text-blue-600 hover:text-blue-700 underline underline-offset-2 font-medium">
                политикой конфиденциальности
              </a>
						</CheckBox>

						{serverError && (
							<div className="flex justify-center items-center gap-2 text-red-500 text-sm">
								<AlertCircle className="w-4 h-4" />
								<span className="text-base">{serverError}</span>
							</div>
						)}

						<SubmitButton
							text="Зарегистрироваться"
							agreed={agreed}
							loading={loading}
						/>

						<div className="flex items-center gap-3 my-1">
		          <div className="flex-1 h-px bg-slate-200" />
		          <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">или</span>
		          <div className="flex-1 h-px bg-slate-200" />
						</div>

						<button
							type="button"
							onClick={() => alert("В разработке")}
	            className="w-full py-3.5 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-700
	              flex items-center justify-center gap-2.5
	              hover:border-slate-300 hover:bg-slate-50 hover:shadow-sm
	              active:scale-[0.99] transition-all duration-200"
	          >
	            <GoogleIcon />
	            Продолжить через Google
	          </button>
					</form>

				<p className="text-center text-sm text-slate-500 mt-7">
	       	Уже есть аккаунт?{" "}
	        <a
						href="#"
						onClick={() => alert("В разработке")}
	          className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
	        >
	          Войти
	        </a>
	      </p>
				</div>
			</div>
		</div>
	)
}
