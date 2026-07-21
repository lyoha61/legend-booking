import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";

import { PaymentCard } from "@/features/checkout/ui/PaymentCard";
import type { DateRange } from "@daypicker/react";
import { DateRangeField } from "@/features/search/ui/SearchBar/DateRangeField";
import { PopoverSelect } from "@/shared/PopoverSelect";


export const CheckoutPage = () => {
	const [searchParams] = useSearchParams();
	
	const [dates, setDates] = useState<DateRange | undefined>(() => {
		const checkIn = searchParams.get("checkIn");
		const checkOut = searchParams.get("checkOut");

		if (checkIn && checkOut) {
			const from = new Date(checkIn);
			const to = new Date(checkOut);

			if (
				!isNaN(from.getTime()) &&
				!isNaN(to.getTime())
			) {
				return {
					from,
					to,
				};
			}
		}

		return undefined;
	});

	const apartmentId = searchParams.get("apartmentId");
	const [guests, setGuests] = useState<number | null>(null);
	const options = [
		{ value: 1, label: "1 гость" },
		{ value: 2, label: "2 гостя" },
		{ value: 3, label: "3 гостя" },
		{ value: 4, label: "4 гостя" },
		{ value: 5, label: "5 гостей" },
		{ value: 6, label: "6 гостей" },
	];
	const checkIn = dates?.from;
	const checkOut = dates?.to;

	const canPay = Boolean(
		apartmentId &&
		checkIn &&
		checkOut
	);


	return (
		<div className="min-h-screen bg-gray-50 py-10">
			<div className="mx-auto max-w-6xl px-6">

				<h1 className="mb-8 text-3xl font-bold">
					Оформление бронирования
				</h1>


				<div className="grid gap-8 lg:grid-cols-[1fr_380px]">


					<div className="space-y-6">


						<Card>
							<CardHeader>
								<CardTitle className="flex flex-col">
									<span>Ваше бронирование</span>
									<span className="text-sm">Пожалуйста проверти и заполните данные</span>
								</CardTitle>
							</CardHeader>


							<CardContent className="space-y-5">
								<div className="flex gap-4">
									<div className="h-24 w-32 rounded-lg bg-gray-200" />
									<div>
										<h3 className="font-semibold">
											Название апартаментов
										</h3>
									</div>
								</div>

								<Separator />

								<div>
									<span className="font-semibold">Даты проживания </span>
									<DateRangeField
										value={dates}
										onChange={setDates}
										className="px-2 py-1"
									/>
								</div>

								<div className="flex flex-col gap-2">
									<p className="font-semibold">
										Гости
									</p>

									<div className="font-medium py-3 px-2 hover:bg-gray-200/50 w-fit rounded-lg">
										<PopoverSelect<number> 
											label="Выберите кол-во персон" 
											value={guests}
											options={options} 
											onChange={(value) => setGuests(value)}
											/>
									</div>
								</div>

								<div>
									<p className="text-sm font-medium">
										После подтверждения данных вы можете оплатить бронирование и будете перенаправлены
										на страницу оплаты.
									</p>
								</div>

							</CardContent>
						</Card>

					</div>

					<PaymentCard 
						apartmentId={apartmentId} 
						checkIn={checkIn} 
						checkOut={checkOut} 
						guests={guests}
					/>
				</div>

			</div>
		</div>
	);
};