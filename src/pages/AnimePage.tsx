import { useEffect, useState } from 'react'
import Hero from '@/components/hero'
import ShowsContainer from '@/components/shows-container'
import { siteConfig } from '@/configs/site'
import { Genre } from '@/enums/genre'
import { RequestType, type ShowRequest } from '@/enums/request-type'
import { getRandomShow } from '@/lib/utils'
import MovieService from '@/services/MovieService'
import { MediaType, type Show, type CategorizedShows } from '@/types'

export default function AnimePage() {
  const [allShows, setAllShows] = useState<CategorizedShows[]>([])
  const [loading, setLoading] = useState(true)
  const [randomShow, setRandomShow] = useState<Show | null>(null)

  const h1 = `${siteConfig.name} Anime`
  const requests: ShowRequest[] = [
    {
      title: 'Latest Anime',
      req: { requestType: RequestType.ANIME_LATEST, mediaType: MediaType.TV },
      visible: true,
    },
    {
      title: 'Trending Anime',
      req: { requestType: RequestType.ANIME_TRENDING, mediaType: MediaType.TV },
      visible: true,
    },
    {
      title: 'Top Rated Anime',
      req: { requestType: RequestType.ANIME_TOP_RATED, mediaType: MediaType.TV },
      visible: true,
    },
    {
      title: 'Netflix Anime',
      req: { requestType: RequestType.ANIME_NETFLIX, mediaType: MediaType.TV },
      visible: true,
    },
    {
      title: 'Action Anime',
      req: {
        requestType: RequestType.ANIME_GENRE,
        mediaType: MediaType.TV,
        genre: Genre.ACTION_ADVENTURE,
      },
      visible: true,
    },
    {
      title: 'Comedy Anime',
      req: {
        requestType: RequestType.ANIME_GENRE,
        mediaType: MediaType.TV,
        genre: Genre.COMEDY,
      },
      visible: true,
    },
    {
      title: 'Drama Anime',
      req: {
        requestType: RequestType.ANIME_GENRE,
        mediaType: MediaType.TV,
        genre: Genre.DRAMA,
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
