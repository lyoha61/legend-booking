import { useEffect, useState } from "react"
import { Images, X, ChevronLeft, ChevronRight } from "lucide-react"

export type ApartmentPhoto = {
	src: string
	alt?: string
}

type PhotoBentoGridProps = {
	photos: ApartmentPhoto[]
	className?: string
}

export const PhotoBentoGrid = ({ photos, className }: PhotoBentoGridProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const [activeIndex, setActiveIndex] = useState(0)

	const visiblePhotos = photos.slice(0, 5)
	const remainingCount = Math.max(0, photos.length - 5)

	useEffect(() => {
		if (!isOpen) return

		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") setIsOpen(false)
			if (e.key === "ArrowLeft") setActiveIndex((i) => Math.max(0, i - 1))
			if (e.key === "ArrowRight") setActiveIndex((i) => Math.min(photos.length - 1, i + 1))
		}

		document.addEventListener("keydown", onKeyDown)
		document.body.style.overflow = "hidden"
		return () => {
			document.removeEventListener("keydown", onKeyDown)
			document.body.style.overflow = ""
		}
	}, [isOpen, photos.length])

	if (photos.length === 0) {
		return (
			<div className={`bg-gray-100 rounded-xl border border-gray-200 flex items-center justify-center h-80 ${className}`}>
				<span className="text-gray-400 text-sm">Нет фотографий</span>
			</div>
		)
	}

	const getItemClass = (index: number, total: number) => {
		const base = "relative overflow-hidden rounded-xl bg-gray-100 aspect-[4/3] md:aspect-auto cursor-pointer"
		const main = "md:col-span-2 md:row-span-2"
		const side = "md:col-span-2 md:row-span-1"
		const small = "md:col-span-1 md:row-span-1"

		if (total === 1) return `${base} md:col-span-4 md:row-span-2 md:h-[420px]`
		if (total === 2) return `${base} md:col-span-2 md:row-span-2 md:h-[420px]`
		if (index === 0) return `${base} ${main} md:h-[420px]`

		if (total === 3 && index >= 1) return `${base} ${side} md:h-[204px]`
		if (total === 4 && index === 1) return `${base} ${side} md:h-[204px]`
		if (total === 4 && index >= 2) return `${base} ${small} md:h-[204px]`

		return `${base} ${small} md:h-[204px]`
	}

	return (
		<>
			<div className={`grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2 md:gap-3 ${className}`}>
				{visiblePhotos.map((photo, index) => {
					const isLast = index === visiblePhotos.length - 1 && remainingCount > 0

					return (
						<button
							key={`${photo.src}-${index}`}
							type="button"
							className={`group ${getItemClass(index, visiblePhotos.length)}`}
							onClick={() => {
								setActiveIndex(index)
								setIsOpen(true)
							}}
						>
							<img
								src={photo.src}
								alt={photo.alt || `Фото ${index + 1}`}
								className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								loading={index < 2 ? "eager" : "lazy"}
							/>
							<div className="absolute inset-0 bg-black/0 transition-colors duration-200 group-hover:bg-black/10" />

							{isLast && (
								<div className="absolute inset-0 flex items-center justify-center bg-black/45 text-white">
									<div className="flex items-center gap-2 text-sm font-medium">
										<Images className="size-4" />
										<span>+{remainingCount}</span>
									</div>
								</div>
							)}

							<div className="absolute right-3 top-3 rounded-md bg-white/90 p-1.5 text-gray-700 opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
								<Images className="size-4" />
							</div>
						</button>
					)
				})}
			</div>

			{isOpen && (
				<div
					className="fixed inset-0 z-50 flex flex-col bg-black/95"
					onClick={() => setIsOpen(false)}
				>
					<div className="flex items-center justify-between px-4 py-3">
						<span className="text-sm text-gray-300">
							{activeIndex + 1} / {photos.length}
						</span>
						<button
							type="button"
							onClick={() => setIsOpen(false)}
							className="rounded-md p-2 text-white hover:bg-white/10"
						>
							<X className="size-5" />
						</button>
					</div>

					<div className="relative flex flex-1 items-center justify-center px-4">
						<button
							type="button"
							disabled={activeIndex === 0}
							onClick={(e) => {
								e.stopPropagation()
								setActiveIndex((i) => Math.max(0, i - 1))
							}}
							className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 disabled:opacity-30"
						>
							<ChevronLeft className="size-6" />
						</button>

						<img
							src={photos[activeIndex]?.src}
							alt={photos[activeIndex]?.alt}
							className="max-h-full max-w-full rounded-md object-contain"
							onClick={(e) => e.stopPropagation()}
						/>

						<button
							type="button"
							disabled={activeIndex === photos.length - 1}
							onClick={(e) => {
								e.stopPropagation()
								setActiveIndex((i) => Math.min(photos.length - 1, i + 1))
							}}
							className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 disabled:opacity-30"
						>
							<ChevronRight className="size-6" />
						</button>
					</div>
				</div>
			)}
		</>
	)
}
