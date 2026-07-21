import { DateRangeField } from "./DateRangeField";
import { GuestsField } from "./GuestsField";
import { ApartmenField } from "./ApartmentField";
import { Calendar } from "lucide-react";

export function SearchBar() {

  return (
    <div className="flex bg-white border border-gray-200 rounded-lg shadow-sm">
			<DateRangeField icon={Calendar} />
			<div className="w-px bg-gray-200 self-stretch" />
			<GuestsField />
			<div className="w-px bg-gray-200 self-stretch" />
      <ApartmenField />
    </div>
  );
}
