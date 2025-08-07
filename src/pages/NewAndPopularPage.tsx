import { useEffect, useState } from 'react'
import Hero from '@/components/hero'
import ShowsContainer from '@/components/shows-container'
import { siteConfig } from '@/configs/site'
import { RequestType, type ShowRequest } from '@/enums/request-type'
import { getRandomShow } from '@/lib/utils'
import MovieService from '@/services/MovieService'
import { MediaType, type Show, type CategorizedShows } from '@/types'

export default function NewAndPopularPage() {
  const [allShows, setAllShows] = useState<CategorizedShows[]>([])
  const [loading, setLoading] = useState(true)
  const [randomShow, setRandomShow] = useState<Show | null>(null)

  const h1 = `${siteConfig.name} New & Popular`
  const requests: ShowRequest[] = [
    {
      title: 'Trending Now',
      req: { requestType: RequestType.TRENDING, mediaType: MediaType.ALL },
      visible: true,
    },
    {
      title: 'Popular Movies',
      req: { requestType: RequestType.POPULAR, mediaType: MediaType.MOVIE },
      visible: true,
    },
    {
      title: 'Popular TV Shows',
      req: { requestType: RequestType.POPULAR, mediaType: MediaType.TV },
      visible: true,
    },
  ]

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const shows = await MovieService.getShows(requests)
        setAllShows(shows)
        setRandomShow(getRandomShow(shows))
      } catch (error) {
        console.error('Error fetching shows:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchShows()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <h1 className="hidden">{h1}</h1>
      <Hero randomShow={randomShow} />
      <ShowsContainer shows={allShows} />
    </>
  )
}
