import { useParams } from 'react-router-dom'
import EmbedPlayer from '@/components/watch/embed-player'
import { getIdFromSlug } from '@/lib/utils'

export default function WatchAnimePage() {
  const { slug } = useParams<{ slug: string }>()

  if (!slug) return <div>Anime not found</div>

  // Handle anime slug format (e.g., "m-123" or "t-456")
  let animeId = slug
  if (slug.includes('-')) {
    const parts = slug.split('-')
    if (parts.length >= 2) {
      animeId = parts.slice(1).join('-') // Remove prefix and get the actual slug
    }
  }
  
  const id = getIdFromSlug(animeId)
  
  if (!id) return <div>Invalid Anime ID</div>

  return (
    <div className="h-screen">
      <EmbedPlayer url={`https://vidsrc.cc/v2/embed/anime/${id}`} />
    </div>
  )
}
