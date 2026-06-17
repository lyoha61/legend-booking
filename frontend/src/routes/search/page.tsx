import { ApartmentList } from "@/features/apartments/ui/ApartmentList/ApartmentList";
import { SearchBar } from "@/features/search/ui/SearchBar/SearchBar";

export function SearchPage() {
	return (
		<div className="flex flex-col gap-3 p-4">
			<SearchBar />
			<ApartmentList />
		</div>
	);
}
