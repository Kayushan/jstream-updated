import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import SearchContainer from '@/components/search-container'

export default function SearchPage() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Search Results</h1>
      <SearchContainer query={query} />
    </div>
  )
}
