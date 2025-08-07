import { useEffect, useState } from 'react'
import Hero from '@/components/hero'
import ShowsContainer from '@/components/shows-container'
import { siteConfig } from '@/configs/site'
import { Genre } from '@/enums/genre'
import { RequestType, type ShowRequest } from '@/enums/request-type'
import { getRandomShow } from '@/lib/utils'
import MovieService from '@/services/MovieService'
import { MediaType, type Show, type CategorizedShows } from '@/types'

export default function TvShowsPage() {
  const [allShows, setAllShows] = useState<CategorizedShows[]>([])
  const [loading, setLoading] = useState(true)
  const [randomShow, setRandomShow] = useState<Show | null>(null)

  const h1 = `${siteConfig.name} TV Shows`
  const requests: ShowRequest[] = [
    {
      title: 'Trending Now',
      req: { requestType: RequestType.TRENDING, mediaType: MediaType.TV },
      visible: true,
    },
    {
      title: 'Netflix TV Shows',
      req: { requestType: RequestType.NETFLIX, mediaType: MediaType.TV },
      visible: true,
    },
    {
      title: 'Popular',
      req: {
        requestType: RequestType.TOP_RATED,
        mediaType: MediaType.TV,
        genre: Genre.FAMILY,
      },
      visible: true,
    },
    {
      title: 'Comedy TV Shows',
      req: {
        requestType: RequestType.GENRE,
        mediaType: MediaType.TV,
        genre: Genre.COMEDY,
      },
      visible: true,
    },
    {
      title: 'Action TV Shows',
      req: {
        requestType: RequestType.GENRE,
        mediaType: MediaType.TV,
        genre: Genre.ACTION_ADVENTURE,
      },
      visible: true,
    },
    {
      title: 'Drama TV Shows',
      req: {
        requestType: RequestType.GENRE,
        mediaType: MediaType.TV,
        genre: Genre.DRAMA,
      },
      visible: true,
    },
    {
      title: 'Scary TV Shows',
      req: {
        requestType: RequestType.GENRE,
        mediaType: MediaType.TV,
        genre: Genre.THRILLER,
      },
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
