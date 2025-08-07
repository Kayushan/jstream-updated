import { useParams } from 'react-router-dom'
import EmbedPlayer from '@/components/watch/embed-player'
import { getIdFromSlug } from '@/lib/utils'

export default function WatchMoviePage() {
  const { slug } = useParams<{ slug: string }>()

  if (!slug) return <div>Movie not found</div>

  const movieId = getIdFromSlug(slug)
  
  if (!movieId) return <div>Invalid movie ID</div>

  return (
    <div className="h-screen">
      <EmbedPlayer url={`https://vidsrc.cc/v2/embed/movie/${movieId}`} />
    </div>
  )
}
