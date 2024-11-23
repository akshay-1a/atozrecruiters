'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { H2 } from '../animations/animated-tags'

gsap.registerPlugin(ScrollTrigger)

interface StoryProps {
  data: {
    title: string
    content: string
    milestones: {
      year: number
      title: string
      description: string
      image: string
    }[]
  }
}

export function StorySection({ data }: StoryProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.vertical-timeline-element'),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1,
          },
        }
      )
    }
  }, [])

  return (
    <section ref={sectionRef} className="w-full py-20 bg-gray-50 overflow-hidden">
      <motion.div style={{ opacity, scale }} className="container mx-auto px-4">
        <h2 className="w-full text-3xl sm:text-4xl md:text-6xl font-sans font-extrabold text-slate-800 mb-8 text-center">{data.title}</h2>
        <p className="text-xl mb-12 max-w-3xl mx-auto text-center">{data.content}</p>
        <VerticalTimeline lineColor="#1e293b">
          {data.milestones.map((milestone, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element"
              contentStyle={{ background: '#1e293b', color: '#1e293b', boxShadow: 'none' }}
              contentArrowStyle={{ borderRight: '12px solid #1e293b' }}
              date={milestone.year.toString()}
              iconStyle={{ background: '#1e293b', color: '#fff' }}
              icon={<div className="flex items-center justify-center h-full ">{milestone.year}</div>}
            >
              <Card className='rounded'>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{milestone.title}</h3>
                  <Image
                    src={`/about/${milestone.image}.jpg`}
                    alt={milestone.title}
                    width={800}
                    height={800}
                    className="w-full h-full object-cover rounded-md"
                  />
                  <p>{milestone.description}</p>
                </CardContent>
              </Card>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </motion.div>
    </section>
  )
}

