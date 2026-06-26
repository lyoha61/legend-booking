export const validateEmail = (email: string): string | null => {
  if (!email) return "Email обязателен";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Некорректный email";
  return null;
};

export const validatePassword = (password: string): string | null => {
  if (!password) return "Пароль обязателен";
  if (password.length < 8) return "Пароль слишком короткий";
  return null;
};

export const validateAgreement = (agreed: boolean): string | null => {
  if (!agreed) return "Необходимо согласиться с условиями";
  return null;
};
