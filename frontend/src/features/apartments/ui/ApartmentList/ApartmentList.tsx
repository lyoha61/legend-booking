import { useNavigate } from "react-router-dom";
import { ApartmentCard } from "./ApartmentCard";

const APARTMENTS: Apartment[] = [
  {
    id: "1",
    name: "Unit A-1203",
    floor: 12,
    building: "Tower A",
    capacity: 4,
    price: 450,
    imageUrl:
      "https://images.unsplash.com/photo-1680416124510-5eae1beca412?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvciUyMG1vZGVybnxlbnwxfHx8fDE3ODA1MjI2ODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    status: "available",
    badges: ["Sea view", "Premium"],
    view: "Sea",
    size: 85,
    type: "2br",
  },
  {
    id: "2",
    name: "Unit B-0807",
    floor: 8,
    building: "Tower B",
    capacity: 2,
    price: 320,
    imageUrl:
      "https://images.unsplash.com/photo-1682184805271-11671b7ecf4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvciUyMG1vZGVybnxlbnwxfHx8fDE3ODA1MjI2ODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    status: "available",
    badges: ["Verified"],
    view: "City",
    size: 62,
    type: "1br",
  },
  {
    id: "3",
    name: "Unit A-1501",
    floor: 15,
    building: "Tower A",
    capacity: 6,
    price: 680,
    imageUrl:
      "https://images.unsplash.com/photo-1611094016919-36b65678f3d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvciUyMG1vZGVybnxlbnwxfHx8fDE3ODA1MjI2ODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    status: "limited",
    badges: ["Sea view", "Verified"],
    view: "Sea",
    size: 110,
    type: "2br",
  },
  {
    id: "4",
    name: "Unit C-1102",
    floor: 11,
    building: "Tower C",
    capacity: 3,
    price: 390,
    imageUrl:
      "https://images.unsplash.com/photo-1663811397207-418a92396ad5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvciUyMG1vZGVybnxlbnwxfHx8fDE3ODA1MjI2ODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    status: "available",
    badges: ["Balcony"],
    view: "Courtyard",
    size: 72,
    type: "1br",
  },
  {
    id: "5",
    name: "Unit A-2001",
    floor: 20,
    building: "Tower A",
    capacity: 4,
    price: 850,
    imageUrl:
      "https://images.unsplash.com/photo-1653972233597-05822baa3c4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvciUyMG1vZGVybnxlbnwxfHx8fDE3ODA1MjI2ODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    status: "available",
    badges: ["Penthouse", "Premium", "Sea view"],
    view: "Sea",
    size: 125,
    type: "penthouse",
  },
  {
    id: "6",
    name: "Unit B-0505",
    floor: 5,
    building: "Tower B",
    capacity: 2,
    price: 280,
    imageUrl:
      "https://images.unsplash.com/photo-1643376452350-97eadd2c417f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvciUyMG1vZGVybnxlbnwxfHx8fDE3ODA1MjI2ODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    status: "booked",
    view: "City",
    size: 58,
    type: "studio",
  },
  {
    id: "7",
    name: "Unit C-1405",
    floor: 14,
    building: "Tower C",
    capacity: 5,
    price: 520,
    imageUrl:
      "https://images.unsplash.com/photo-1645217709128-3ca7191704a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvciUyMG1vZGVybnxlbnwxfHx8fDE3ODA1MjI2ODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    status: "available",
    badges: ["Premium", "Verified"],
    view: "City",
    size: 95,
    type: "2br",
  },
  {
    id: "8",
    name: "Unit A-0903",
    floor: 9,
    building: "Tower A",
    capacity: 3,
    price: 410,
    imageUrl:
      "https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvciUyMG1vZGVybnxlbnwxfHx8fDE3ODA1MjI2ODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    status: "available",
    badges: ["Balcony", "Kitchen"],
    view: "Sea",
    size: 78,
    type: "1br",
  },
];


export const ApartmentList = () => {
	const navigate = useNavigate();


	return (
		<div className="flex flex-col gap-3">
			<h2 className="text-gray-900 ml-2">Доступные квартиры</h2>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
				{
					APARTMENTS.map((apartment) => (
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
