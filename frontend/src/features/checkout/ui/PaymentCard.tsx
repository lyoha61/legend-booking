import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { createBooking } from "../api/checkoutApi";

type Props = {
	apartmentId: string | null,
	checkIn: Date | undefined,
	checkOut: Date | undefined,
	guests: number | null,
}

export const PaymentCard = ({
	apartmentId,
	checkIn,
	checkOut,
	guests,
}: Props) => {

	const handlePayment = () => {
		console.log("handlePayment");
		if (!apartmentId || !checkIn || !checkOut || !guests) {
			console.log("Выберите даты проживания и кол-во персон")
			alert("Выберите даты проживания и кол-во персон");
			return;
		}
		const fetchCreateBooking = async () => {
			const data = {
				apartmentId,
				checkIn,
				checkOut,
				guests
			}
			createBooking(
				data
			);
		}

		fetchCreateBooking();
	}

	return (
		<Card className="h-fit">
			<CardHeader>
				<CardTitle>
					Стоимость
				</CardTitle>
			</CardHeader>


			<CardContent>

				<div className="space-y-3">

					<div className="flex justify-between">
						<span className="text-muted-foreground">
							5000 ₽ × 3 ночи
						</span>

						<span>
							15000 ₽
						</span>
					</div>


					<div className="flex justify-between">
						<span className="text-muted-foreground">
							Сервисный сбор
						</span>

						<span>
							0 ₽
						</span>
					</div>


					<Separator />


					<div className="flex justify-between text-lg font-semibold">
						<span>
							Итого
						</span>

						<span>
							15000 ₽
						</span>
					</div>


					<Button className="mt-4 w-full" onClick={handlePayment}>
						Перейти к оплате
					</Button>

				</div>

			</CardContent>
		</Card>
	)
}