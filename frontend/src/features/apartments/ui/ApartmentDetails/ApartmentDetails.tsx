import { ApartmentBooking } from "./ApartmentBooking";
import { HostCard } from "./HostCard";
import { PhotoBentoGrid } from "./PhotoBentoGrid";
import { Users, PanelsTopLeft, MapPin } from "lucide-react";
import { RulesApartment } from "./RulesApartment";

type ApartmentDetailsProps = {
  id?: string;
};

const PHOTOS = [
	{ src: "https://images.unsplash.com/photo-1680416124510-5eae1beca412?w=1200", alt: "Гостиная" },
	{ src: "https://images.unsplash.com/photo-1682184805271-11671b7ecf4c?w=800", alt: "Спальня" },
	{ src: "https://images.unsplash.com/photo-1611094016919-36b65678f3d6?w=800", alt: "Вид из окна" },
	{ src: "https://images.unsplash.com/photo-1663811397207-418a92396ad5?w=800", alt: "Кухня" },
	{ src: "https://images.unsplash.com/photo-1653972233597-05822baa3c4e?w=800", alt: "Ванная" },
	{ src: "https://images.unsplash.com/photo-1645217709128-3ca7191704a0?w=800", alt: "Балкон" },
]

export const ApartmentsDetails = ({ id }: ApartmentDetailsProps) => {
	return (
		<div className="p-4">
			<PhotoBentoGrid photos={PHOTOS} />
			<div className="grid grid-cols-[2.5fr_1fr] 3xl:grid-cols-[3.5fr_1fr] w-full px-30 py-10">
				<div className="flex flex-col gap-3 pr-15">
					<h1 className="text-4xl">Премиум-апартаменты с видом на море — A-1203</h1>
					<div className="text-gray-500 text-xl font-light">
						<span>Здание Б, </span>
						<span>12-й этаж</span>
					</div>
					<div className="flex gap-5 text-gray-500 font-light">
						<div className="flex items-center gap-2">
							<Users className="size-4" />
							<span>4 гостя</span>
						</div>
						<span>·</span>
						<div className="flex items-center gap-2">
							<PanelsTopLeft className="size-4" />
							<span>85 м²</span>
						</div>
						<span>·</span>
						<div className="flex items-center gap-2">
							<MapPin className="size-4" />
							<span>Приморский комплекс, башня A</span>
						</div>
					</div>
					<div className="h-px w-full bg-gray-200" />
					<HostCard className="pt-3 pb-5"/>
					<div className="h-px w-full bg-gray-200 mb-7" />
					<RulesApartment />
					<div className="h-px w-full bg-gray-200 mt-9" />
				</div>
				<div className="sticky right-0 w-full">
					<ApartmentBooking />
				</div>
			</div>
		</div>
	)
}
