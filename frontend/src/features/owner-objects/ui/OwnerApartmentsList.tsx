import { OwnerApartmentCard, type ApartmentCardProps } from "@/features/owner-objects/ui/OwnerApartmentCard";

 const mockApartments: ApartmentCardProps[] = [
  {
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    name: "Seaside Loft",
    address: "Norway, Oslo, Tjuvholmen 12",
    occupancy: 78,
    revenueMonth: 12450,
    nextBooking: new Date("2026-07-09T15:00:00"),
    roomsCount: 2,
    status: "active",
  },
  {
    img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    name: "Mountain Cabin",
    address: "Norway, Telemark, Gausta 5",
    occupancy: 52,
    revenueMonth: 8430,
    nextBooking: new Date("2026-07-11T12:00:00"),
    roomsCount: 3,
    status: "active",
  },
  {
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    name: "City Studio",
    address: "Norway, Oslo, Grünerløkka 8",
    occupancy: 91,
    revenueMonth: 16890,
    nextBooking: new Date("2026-07-07T10:00:00"),
    roomsCount: 1,
    status: "active",
  },
  {
    img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    name: "Lake House",
    address: "Norway, Vestfold, Sandefjord 3",
    occupancy: 0,
    revenueMonth: 0,
    nextBooking: new Date("2026-07-20T14:00:00"),
    roomsCount: 4,
    status: "paused",
  },
  {
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    name: "Modern Apartment",
    address: "Norway, Oslo, Majorstuen 21",
    occupancy: 64,
    revenueMonth: 11200,
    nextBooking: new Date("2026-07-08T18:00:00"),
    roomsCount: 2,
    status: "active",
  },
];

export const OwnerApartmentsList = () => {
	return (
		<div className="grid md:grid-cols-3 gap-3">
			{mockApartments.map(apartment => (
				<OwnerApartmentCard
					img={apartment.img}
					name={apartment.name}
					address={apartment.address}
					occupancy={apartment.occupancy}
					revenueMonth={apartment.revenueMonth}
					status={apartment.status}
				/>
			))}
		</div>
	)
}
