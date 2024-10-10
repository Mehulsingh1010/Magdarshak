'use client'
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { GiTrafficLightsGreen } from "react-icons/gi";
import FeaturesPage from "@/components/Features";

// Custom component for video with fallback image
const VideoWithFallback = ({ src, fallbackSrc, ...props }) => {
  const [videoError, setVideoError] = useState(false);

  return videoError ? (
    <Image
      src={fallbackSrc}
      alt="Video placeholder"
      width={640}
      height={360}
      className="w-full h-full object-cover"
    />
  ) : (
    <video
      src={src}
      onError={() => setVideoError(true)}
      {...props}
    >
      Your browser does not support the video tag.
    </video>
  );
};

export default function HomePage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="z-[50] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
        <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-8">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-85 transition-opacity duration-300"
          >
            <GiTrafficLightsGreen size={30} />
            <span className="font-bold text-xl md:text-2xl lg:text-3xl text-gray-900 dark:text-gray-100">Maर्गदर्शk</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full p-2 bg-background dark:bg-gray-800"
              asChild
            >
              <Link href="" className="text-gray-900 dark:text-gray-100">
                <GitHubLogoIcon className="h-5 w-5" />
              </Link>
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </header>
      
      <main className="flex-1 py-6 md:py-12 bg-gray-50 dark:bg-black">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <section className="flex flex-col items-center gap-6 md:gap-8 lg:gap-12 py-8">
            <h1 className="text-center text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl text-gray-900 dark:text-gray-100">
              Maर्गदर्शk: Smart Traffic Control, Safety First
            </h1>
            <p className="text-center text-lg font-light text-gray-700 dark:text-gray-300 max-w-3xl">
              Margdarshak uses AI to manage traffic efficiently by analyzing vehicle counts, controlling signals at intersections, and detecting collisions to alert emergency services.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Button variant="default" asChild>
                <Link href="/dashboard" className="flex items-center">
                  Get Started
                  <ArrowRightIcon className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  Learn More
                </Link>
              </Button>
            </div>
          </section>
          
          {isClient && (
            <div className="flex flex-col md:flex-row justify-center gap-6 py-8">
              <div className="w-full md:w-[48%] rounded-lg shadow-md border border-gray-300 dark:border-gray-700 overflow-hidden">
                <VideoWithFallback
                  src="/videos/animation_1.mp4"
                  fallbackSrc="/images/traffic_thumbnail_1.jpg"
                  className="w-full h-full object-cover"
                  autoPlay
                  
                  loop
                  muted
                  playsInline
                
                />
              </div>
              <div className="w-full md:w-[48%] rounded-lg shadow-md border border-gray-300 dark:border-gray-700 overflow-hidden">
                <VideoWithFallback
                  src="/videos/animation_2.mp4"
                  fallbackSrc="/images/traffic_thumbnail_2.jpg"
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
            
                />
              </div>
            </div>
          )}
        </div>
      </main>
      <FeaturesPage />
    </div>
  );
}