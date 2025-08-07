'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Icons } from '@/components/icons';
import { siteConfig } from '@/configs/site';
import { useNavigate } from 'react-router-dom';

export default function AboutPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Back Button */}
      <div className="mb-6">
        <Button
          variant="ghost"
          onClick={handleBack}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
        >
          <Icons.chevronLeft className="h-4 w-4" />
          Back
        </Button>
      </div>

      <div className="space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <Icons.logo className="h-16 w-16" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {siteConfig.name}
            </h1>
          </div>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Premium streaming platform for movies, TV shows, and anime
          </p>
          <div className="flex justify-center">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              🚀 Professional Streaming Experience
            </Badge>
          </div>
        </div>

        {/* About Section */}
        <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50 dark:border-blue-800 dark:from-blue-950 dark:to-purple-950">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-blue-700 dark:text-blue-300">
              About Jstream
            </CardTitle>
            <CardDescription className="text-lg">
              Professional streaming platform built with modern technology
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-center">
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-lg leading-relaxed">
                <strong>Jstream</strong> is a premium streaming platform designed to provide the ultimate movie and TV show 
                watching experience. Built with cutting-edge web technologies, it offers fast, reliable streaming 
                with a beautiful, intuitive interface.
              </p>
              <p className="text-lg leading-relaxed">
                Our platform brings together the best of modern streaming technology with a focus on user experience, 
                performance, and accessibility. Every feature is designed to make your streaming experience seamless 
                and enjoyable across all devices.
              </p>
              <div className="flex items-center justify-center space-x-4 mt-6">
                <Icons.zap className="h-8 w-8 text-blue-500" />
                <span className="text-xl font-semibold text-blue-700 dark:text-blue-300">
                  Built with modern web technologies
                </span>
                <Icons.zap className="h-8 w-8 text-blue-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Products & Features */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Our Products & Features</h2>
            <p className="text-xl text-muted-foreground">
              Discover what makes Jstream the perfect streaming companion
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Movies */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Icons.movie className="h-8 w-8 text-blue-500" />
                  <CardTitle>Movies</CardTitle>
                </div>
                <CardDescription>
                  Extensive collection of movies from all genres
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Latest releases and classics</li>
                  <li>• Multiple genres and categories</li>
                  <li>• High-quality streaming</li>
                  <li>• Detailed movie information</li>
                </ul>
              </CardContent>
            </Card>

            {/* TV Shows */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Icons.tvShow className="h-8 w-8 text-green-500" />
                  <CardTitle>TV Shows</CardTitle>
                </div>
                <CardDescription>
                  Binge-worthy TV series and episodes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Complete seasons and episodes</li>
                  <li>• Popular and trending shows</li>
                  <li>• Episode guides and ratings</li>
                  <li>• Seamless episode navigation</li>
                </ul>
              </CardContent>
            </Card>

            {/* Anime */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Icons.list className="h-8 w-8 text-purple-500" />
                  <CardTitle>Anime</CardTitle>
                </div>
                <CardDescription>
                  Japanese animation and manga adaptations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Popular anime series</li>
                  <li>• Subbed and dubbed versions</li>
                  <li>• Seasonal releases</li>
                  <li>• Anime-specific features</li>
                </ul>
              </CardContent>
            </Card>

            {/* Search & Discovery */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Icons.search className="h-8 w-8 text-orange-500" />
                  <CardTitle>Smart Search</CardTitle>
                </div>
                <CardDescription>
                  Find exactly what you're looking for
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Advanced search filters</li>
                  <li>• Genre-based recommendations</li>
                  <li>• Trending content discovery</li>
                  <li>• Personalized suggestions</li>
                </ul>
              </CardContent>
            </Card>

            {/* Mobile Experience */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Icons.smartphone className="h-8 w-8 text-indigo-500" />
                  <CardTitle>Mobile Optimized</CardTitle>
                </div>
                <CardDescription>
                  Perfect viewing on any device
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Responsive design</li>
                  <li>• Touch-friendly interface</li>
                  <li>• Cross-platform compatibility</li>
                  <li>• Offline viewing options</li>
                </ul>
              </CardContent>
            </Card>

            {/* User Experience */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Icons.user className="h-8 w-8 text-teal-500" />
                  <CardTitle>User Experience</CardTitle>
                </div>
                <CardDescription>
                  Designed for the best viewing experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Intuitive navigation</li>
                  <li>• Dark/light theme support</li>
                  <li>• Fast loading times</li>
                  <li>• Minimal ads and distractions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Technology Stack */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Built with Modern Technology</CardTitle>
            <CardDescription>
              Cutting-edge tech stack for the best performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center p-4 border rounded-lg">
                <Icons.code className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                <h4 className="font-semibold">Next.js</h4>
                <p className="text-sm text-muted-foreground">React Framework</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <Icons.palette className="h-8 w-8 mx-auto mb-2 text-green-500" />
                <h4 className="font-semibold">Tailwind CSS</h4>
                <p className="text-sm text-muted-foreground">Styling Framework</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <Icons.database className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                <h4 className="font-semibold">TMDb API</h4>
                <p className="text-sm text-muted-foreground">Movie Database</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <Icons.zap className="h-8 w-8 mx-auto mb-2 text-orange-500" />
                <h4 className="font-semibold">Vidsrc</h4>
                <p className="text-sm text-muted-foreground">Streaming Service</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Legal Disclaimer */}
        <Alert className="border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950">
          <Icons.alertTriangle className="h-4 w-4 text-orange-600" />
          <AlertDescription className="text-orange-800 dark:text-orange-200">
            <strong>Legal Notice:</strong> Jstream is a content discovery and aggregation platform. We do not host, store, or distribute any copyrighted content on our servers. All content is provided by third-party streaming services.
          </AlertDescription>
        </Alert>

        {/* Footer */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <Icons.heart className="h-5 w-5 text-pink-500" />
            <p className="text-lg font-semibold">
              Made with love by Shan for Jessy
            </p>
            <Icons.heart className="h-5 w-5 text-pink-500" />
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Jstream. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
} 