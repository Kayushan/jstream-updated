import { useParams } from 'react-router-dom'
import EmbedPlayer from '@/components/watch/embed-player'
import { getIdFromSlug } from '@/lib/utils'

export default function WatchTvPage() {
  const { slug } = useParams<{ slug: string }>()

  if (!slug) return <div>TV Show not found</div>

  const tvId = getIdFromSlug(slug)
  
  if (!tvId) return <div>Invalid TV Show ID</div>

  return (
    <div className="h-screen">
      <EmbedPlayer url={`https://vidsrc.cc/v2/embed/tv/${tvId}`} />
    </div>
  )
}
