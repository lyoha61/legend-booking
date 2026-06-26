import { ApartmentsDetails } from "@/features/apartments/ui/ApartmentDetails/ApartmentDetails"
import { useParams } from "react-router-dom"

export const ApartmentPage = () => {
	const { id } = useParams<{ id: string }>();

	if (!id) return;

	return (
		<div>
			<ApartmentsDetails id={id} />
		</div>
	)
}
