import { Header } from "@/widgets/header/Header";
import type { ReactNode } from "react";

type Props = {
	children: ReactNode;
}

export function GuestLayout({ children }: Props) {
	return (
		<>
			<Header />
			<div>{children}</div>
		</>
	)
}
