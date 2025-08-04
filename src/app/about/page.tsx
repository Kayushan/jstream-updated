'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { siteConfig } from '@/configs/site';
import { useRouter } from 'next/navigation';

export default function AboutPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
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
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Icons.logo className="h-12 w-12" />
            <h1 className="text-4xl font-bold">{siteConfig.name}</h1>
          </div>
          <p className="text-xl text-muted-foreground">{siteConfig.slogan}</p>
        </div>

        {/* Legal Disclaimer */}
        <Alert className="border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950">
          <Icons.alertTriangle className="h-4 w-4 text-orange-600" />
          <AlertDescription className="text-orange-800 dark:text-orange-200">
            <strong>Important Legal Notice:</strong> {siteConfig.name} does not host, store, or distribute any copyrighted content on our servers.
          </AlertDescription>
        </Alert>

        {/* About Content */}
        <Card>
          <CardHeader>
            <CardTitle>About {siteConfig.name}</CardTitle>
            <CardDescription>
              Your premium streaming platform for discovering and watching movies and TV shows
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">What We Do</h3>
              <p className="text-muted-foreground leading-relaxed">
                {siteConfig.name} is a content discovery and aggregation platform that helps users find and access 
                movies and TV shows from various third-party streaming providers. We provide a unified interface 
                for browsing, searching, and discovering entertainment content across multiple sources.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Content Sources</h3>
              <p className="text-muted-foreground leading-relaxed">
                All streaming content available through {siteConfig.name} is provided by third-party streaming 
                services and content providers. We embed links and content from these external sources, but we 
                do not host, store, or distribute any copyrighted material on our own servers.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Legal Compliance</h3>
              <p className="text-muted-foreground leading-relaxed">
                We are committed to operating within legal boundaries and respecting intellectual property rights. 
                Our platform serves as a discovery tool and aggregator, similar to search engines, by providing 
                links to content hosted elsewhere on the internet.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">DMCA Compliance</h3>
              <p className="text-muted-foreground leading-relaxed">
                If you are a copyright holder and believe that content linked through our platform infringes 
                your rights, please contact us with proper documentation. We will promptly review and remove 
                any links that violate copyright laws.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">User Responsibility</h3>
              <p className="text-muted-foreground leading-relaxed">
                Users are responsible for ensuring they have the legal right to access content through 
                third-party providers. We encourage users to use legitimate streaming services and 
                respect copyright laws in their jurisdiction.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to provide a seamless, user-friendly platform for discovering entertainment 
                content while maintaining transparency about our role as a content aggregator and discovery tool.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Contact & Support</CardTitle>
            <CardDescription>
              Get in touch with us for questions, support, or legal matters
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold mb-2">General Inquiries</h4>
                <p className="text-sm text-muted-foreground">
                  For general questions about our platform and services.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Legal Matters</h4>
                <p className="text-sm text-muted-foreground">
                  For copyright concerns, DMCA requests, or legal inquiries.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer Note */}
        <div className="text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="mt-2">
            This platform is designed for content discovery and aggregation purposes only.
          </p>
        </div>
      </div>
    </div>
  );
} 