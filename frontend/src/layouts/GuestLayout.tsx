import type { ReactNode } from "react";
import { GuestHeader } from "../widgets/header/GuestHeader";

type Props = {
	children: ReactNode;
}

export function GuestLayout({ children }: Props) {
	return (
		<>
			<GuestHeader />
			<div>{children}</div>
		</>
	)
}
