import Img, { Source } from '@/ui/Img'
import { PortableText, stegaClean } from 'next-sanity'
import CTAList from '@/ui/CTAList'
import Pretitle from '@/ui/Pretitle'
import Reputation from '@/ui/Reputation'
import { cn } from '@/lib/utils'
import 'tailwindcss/tailwind.css' // Ensure Tailwind CSS is imported

export default function Hero({
	pretitle,
	content,
	ctas,
	bgImage,
	bgImageMobile,
	textAlign = 'center',
	alignItems,
}: Partial<{
	pretitle: string
	content: any
	ctas: Sanity.CTA[]
	bgImage: Sanity.Image
	bgImageMobile: Sanity.Image
	textAlign: React.CSSProperties['textAlign']
	alignItems: React.CSSProperties['alignItems']
	recentMusic: Sanity.Music[] // Define the type for recentMusic
}>) {
	const hasImage = !!bgImage?.asset

	return (
		<section
			className={cn(
				hasImage &&
					'grid overflow-hidden bg-ink text-canvas *:col-span-full *:row-span-full',
			)}
		>
			{hasImage && (
				<picture>
					<Source image={bgImageMobile} imageWidth={1200} />
					<Img
						className="size-full max-h-fold object-cover"
						image={bgImage}
						imageWidth={1800}
						draggable={false}
					/>
				</picture>
			)}

			{/* Additional content rendering here */}
			{content && (
				<div className="section flex w-full flex-col">
					{/* Render pretitle, content, and CTAs */}
					<Pretitle>{pretitle}</Pretitle>
					<PortableText value={content} />
					<CTAList ctas={ctas} />
				</div>
			)}
		</section>
	)
}
