import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/components/theme-provider'
// import { AuthGuard } from '@/components/auth/auth-guard'
import Layout from '@/components/layout'

import { PWAInstaller } from '@/components/pwa-installer'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { DebugEnv } from '@/components/debug-env'
import { cn } from '@/lib/utils'
// Import pages
import HomePage from '@/pages/HomePage'
import MoviesPage from '@/pages/MoviesPage'
import TvShowsPage from '@/pages/TvShowsPage'
import AnimePage from '@/pages/AnimePage'
import TamilMoviesPage from '@/pages/TamilMoviesPage'
import NewAndPopularPage from '@/pages/NewAndPopularPage'
import SearchPage from '@/pages/SearchPage'
import LoginPage from '@/pages/LoginPage'
import AboutPage from '@/pages/AboutPage'
import WatchMoviePage from '@/pages/WatchMoviePage'
import WatchTvPage from '@/pages/WatchTvPage'
import WatchAnimePage from '@/pages/WatchAnimePage'

function App() {
  return (
    <Router>
      <div
        className={cn(
          'overflow-y-auto min-h-screen overflow-x-hidden bg-background font-sans antialiased',
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <AuthGuard> */}
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/watch/movie/:slug" element={<WatchMoviePage />} />
              <Route path="/watch/tv/:slug" element={<WatchTvPage />} />
              <Route path="/watch/anime/:slug" element={<WatchAnimePage />} />
              <Route
                path="/*"
                element={
                  <Layout>
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/movies" element={<MoviesPage />} />
                      <Route path="/tv-shows" element={<TvShowsPage />} />
                      <Route path="/anime" element={<AnimePage />} />
                      <Route path="/tamil-movies" element={<TamilMoviesPage />} />
                      <Route path="/new-and-popular" element={<NewAndPopularPage />} />
                      <Route path="/search" element={<SearchPage />} />
                      <Route path="/about" element={<AboutPage />} />
                    </Routes>
                  </Layout>
                }
              />
            </Routes>
          {/* </AuthGuard> */}
          <PWAInstaller />
          <TailwindIndicator />
          <DebugEnv />
        </ThemeProvider>
      </div>
    </Router>
  )
}

export default App
