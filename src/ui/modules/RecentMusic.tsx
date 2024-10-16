import { fetchSanity, groq } from '@/lib/sanity/fetch'
import { PortableText } from 'next-sanity'
import Img from '@/ui/Img'
import { cn } from '@/lib/utils'

export default async function RecentMusic() {
	const recentMusic = await fetchSanity<Sanity.Music[]>(
		groq`*[_type == 'music']|order(releaseDate desc)`,
		{
			tags: ['music'],
		},
	)

	return (
		<section className="recent-music section">
			<h2 className="text-xl font-semibold">Recent Music</h2>
			{recentMusic && recentMusic.length > 0 ? (
				<div>
					{recentMusic.map((music, key) => (
						<Img
							className="music-image"
							image={music.coverImage}
							alt={music.title}
							key={key}
						/>
					))}
				</div>
			) : (
				<p>No recent music available.</p>
			)}
		</section>
	)
}
