'use client'
import React, { useEffect, useRef } from 'react'

interface HeroImageProps {
  backgroundImage: string
  mobileBackgroundImage: string
  positionX?: string
  positionY?: string
  alt: string
  children?: React.ReactNode
}

export default function HeroImage({
  backgroundImage,
  mobileBackgroundImage,
  positionX = '30%',
  positionY = '50%',
  alt,
  children,
}: HeroImageProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const heroElement = heroRef.current
    const parallaxElement = parallaxRef.current
    if (!heroElement || !parallaxElement) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            parallaxElement.style.willChange = 'transform'
            window.addEventListener('scroll', updateParallax)
          } else {
            parallaxElement.style.willChange = 'auto'
            window.removeEventListener('scroll', updateParallax)
          }
        })
      },
      { threshold: 0 }
    )

    observer.observe(heroElement)

    function updateParallax() {
      const scrollPosition = window.pageYOffset
      const parallaxFactor = 0.5
      parallaxElement!.style.transform = `translate3d(0, ${scrollPosition * parallaxFactor}px, 0)`
    }

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', updateParallax)
    }
  }, [])

  return (
    <div
      ref={heroRef}
      className="relative flex flex-col justify-center items-center text-center h-screen mb-8 md:-mx-16 -mx-8 overflow-hidden"
      data-pagefind-body
    >
      <div
        ref={parallaxRef}
        className="absolute inset-0"
        style={{
          willChange: 'transform',
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-no-repeat md:hidden"
          style={{
            backgroundImage: `url(${mobileBackgroundImage})`,
            backgroundPosition: `${positionX} ${positionY}`,
            top: '-20%',
            height: '120%',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-cover bg-no-repeat hidden md:block"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: `${positionX} ${positionY}`,
            top: '-20%',
            height: '120%',
          }}
          aria-hidden="true"
        />
      </div>
      <div className="relative">
        {children}
      </div>
      <img src={backgroundImage} alt={alt} className="sr-only" />
      <style>
        {`
        main {
          padding-top: 0 !important;
        }
      `}
      </style>
    </div>
  )
}
