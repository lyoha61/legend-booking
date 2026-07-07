import { ObjectsTitle } from "@/features/owner-objects/ui/ObjectsTitle"
import { OwnerApartmentsList } from "@/features/owner-objects/ui/OwnerApartmentsList"

export const ObjectsPage = () => {
	return (
		<div className="flex flex-col gap-5 pt-4">
			<ObjectsTitle />
			<OwnerApartmentsList />
		</div>
	)
}
