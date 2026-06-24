import { useNavigate } from "react-router-dom";
import { ApartmentCard } from "./ApartmentCard";
import { useEffect, useState } from "react";
import type { Apartment } from "../../model/types";
import { getApartments } from "../../api/apartmentsApi";

export const ApartmentList = () => {
	const navigate = useNavigate();

	const [apartments, setApartments] = useState<Apartment[]>([]);

	useEffect(() => {
		const loadApartments = async () => {
			try {
				const apartments = await getApartments();
				setApartments(apartments);
			} catch (err) {
				console.error(err);
			}
		}

		loadApartments();
	}, []);

	return (
		<div className="flex flex-col gap-3">
			<h2 className="text-gray-900 ml-2">Доступные квартиры</h2>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
				{
					apartments.map((apartment) => (
						<ApartmentCard
							key={apartment.id}
							{...apartment}
							onDetailsClick={(id) => navigate(`/apartments/${id}`)}
						/>
					))
				}
			</div>
		</div>
	)
}
