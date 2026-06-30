export const ErrorCode = {
	EMAIL_ALREADY_EXISTS: "EMAIL_ALREADY_EXISTS",
	INVALID_CREDENTIALS: "INVALID_CREDENTIALS",
	REFRESH_TOKEN_EXPIRED: "REFRESH_TOKEN_EXPIRED",
} as const;

export type ErrorCode =
	typeof ErrorCode[keyof typeof ErrorCode];


export const errorMessages: Record<ErrorCode, string> = {
	[ErrorCode.EMAIL_ALREADY_EXISTS]: "Такой email уже зарегистрирован",
	[ErrorCode.INVALID_CREDENTIALS]: "Неверный email или пароль",
	[ErrorCode.REFRESH_TOKEN_EXPIRED]: "Сессия истекла, войдите снова",
};
