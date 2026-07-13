import { ApartmentsTitle } from "@/features/owner-objects/ui/ApartmentsTitle"
import { OwnerApartmentsList } from "@/features/owner-objects/ui/OwnerApartmentsList"

export const ApartmentsPage = () => {
	return (
		<div className="flex flex-col gap-5 pt-4">
			<ApartmentsTitle />
			<OwnerApartmentsList />
		</div>
	)
}
