export const validateApartmentName = (value: string) => {
	if (!value.trim()) {
		return "Введите название апартаментов";
	}

	if (value.length < 3) {
		return "Минимум 3 символа";
	}

	return null;
};

export const validateApartmentNumber = (value: string) => {
	const number = value.trim();

	if (!number) {
		return "Введите номер квартиры";
	}

	if (number.length > 50) {
		return "Максимальная длина номера — 50 символов";
	}

	return null;
};


export const validatePrice = (value: string) => {
	const price = Number(value.trim());

	if (!value.trim()) {
		return "Введите стоимость за ночь";
	}

	if (Number.isNaN(price)) {
		return "Цена должна быть числом";
	}

	if (price <= 0) {
		return "Цена должна быть больше 0";
	}

	if (price > 1000000) {
		return "Слишком большая цена";
	}

	return null;
};


export const validateApartmentArea = (value: string) => {
	const area = Number(value.trim());

	if (!value.trim()) {
		return "Введите площадь квартиры";
	}

	if (Number.isNaN(area)) {
		return "Площадь должна быть числом";
	}

	if (area <= 0) {
		return "Площадь должна быть больше 0";
	}

	if (area > 1000) {
		return "Слишком большая площадь";
	}

	return null;
};
