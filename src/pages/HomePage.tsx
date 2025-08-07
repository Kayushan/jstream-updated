import { useEffect, useState } from 'react'
import Hero from '@/components/hero'
import ShowsContainer from '@/components/shows-container'
import { MediaType, type Show } from '@/types'
import { siteConfig } from '@/configs/site'
import { RequestType, type ShowRequest } from '@/enums/request-type'
import MovieService from '@/services/MovieService'
import { Genre } from '@/enums/genre'
import { getRandomShow } from '@/lib/utils'
import { type CategorizedShows } from '@/types'

export default function HomePage() {
  const [allShows, setAllShows] = useState<CategorizedShows[]>([])
  const [loading, setLoading] = useState(true)
  const [randomShow, setRandomShow] = useState<Show | null>(null)

  const h1 = `${siteConfig.name} Home`
  const requests: ShowRequest[] = [
    {
      title: 'Trending Now',
      req: { requestType: RequestType.TRENDING, mediaType: MediaType.ALL },
      visible: true,
    },
    {
      title: 'Netflix TV Shows',
      req: { requestType: RequestType.NETFLIX, mediaType: MediaType.TV },
      visible: true,
    },
    {
      title: 'Popular TV Shows',
      req: {
        requestType: RequestType.TOP_RATED,
        mediaType: MediaType.TV,
        genre: Genre.TV_MOVIE,
      },
      visible: true,
    },
    {
      title: 'Korean Movies',
      req: {
        requestType: RequestType.KOREAN,
        mediaType: MediaType.MOVIE,
        genre: Genre.THRILLER,
      },
      visible: true,
    },
    {
      title: 'Comedy Movies',
      req: {
        requestType: RequestType.GENRE,
        mediaType: MediaType.MOVIE,
        genre: Genre.COMEDY,
      },
      visible: true,
    },
    {
      title: 'Action Movies',
      req: {
        requestType: RequestType.GENRE,
        mediaType: MediaType.MOVIE,
        genre: Genre.ACTION,
      },
      visible: true,
    },
    {
      title: 'Romance Movies',
      req: {
        requestType: RequestType.GENRE,
        mediaType: MediaType.MOVIE,
        genre: Genre.ROMANCE,
      },
      visible: true,
    },
    {
      title: 'Scary Movies',
      req: {
        requestType: RequestType.GENRE,
        mediaType: MediaType.MOVIE,
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
