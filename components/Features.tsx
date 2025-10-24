'use client'

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import man from '@/public/images/features/man.jpg'
import edit from '@/public/images/features/edit.jpg'
import Button from './ui/Button';

const Features = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fadeIn, setFadeIn] = useState(true);

    const features = [
        {
            id: 1,
            title: 'Speech to Text',
            description: 'CapCut online free video editor uses AI to auto-generate subtitles with near-perfect accuracy. This makes your video editor online workflow faster, more accessible, and SEO-friendly for global reach.',
            image: man,
        },
        {
            id: 2,
            title: 'Text to Speech',
            description: "Convert text files into natural voiceovers to make your video content more informative and captivating with CapCut's video editor online. Plus, the built-in AI design agent powered by Seedream 4.0 lets you generate eye-catching visuals from text prompts, which can be used in backgrounds, overlays, or as creative assets to enrich your video content.",
            image: edit,
        },
        {
            id: 3,
            title: 'Remove Background',
            description: "Remove video background in 1 click and change its color and backdrop, making it more authentic using CapCut's best video editor online. For still images, the integrated Seedream 4.0 image generator delivers precise background removal and replacement, giving you polished visuals to insert into your videos.",
            image: man,
        },
        {
            id: 4,
            title: 'Cloud Storage',
            description: 'Store and access your projects from anywhere with secure cloud storage integration.',
            image: edit,
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeIn(false);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
                setFadeIn(true);
            }, 300);
        }, 5000);

        return () => clearInterval(interval);
    }, [features.length]);

    const currentFeature = features[currentIndex];

    return (
        <main className="w-full min-h-screen py-44 px-8 md:px-24 flex items-center justify-center">
            <div className="w-full h-full flex flex-col md:flex-row items-center justify-between gap-32">
                
                <div className="w-full md:w-1/2 space-y-4">
                    <h2>
                        Make a video with smart features
                    </h2>
                    
                    <div className="space-y-6">
                        {features.map((feature, index) => (
                            <div key={feature.id}>
                                <h4 
                                    className={`font-medium transition-all duration-300 ${
                                        index === currentIndex 
                                            ? 'text-gray-900 opacity-100 ml-6' 
                                            : 'text-gray-400 opacity-50'
                                    }`}
                                >
                                    {feature.title}
                                </h4>
                                {index === currentIndex && (
                                    <p className={`text-lg text-gray-600 leading-relaxed mt-6 transition-opacity duration-300 bg-gray-100 p-8 rounded-xl ${
                                        fadeIn ? 'opacity-100' : 'opacity-0'
                                    }`}>
                                        {feature.description}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="text-sm text-gray-400 mt-16">
                        Feature {currentIndex + 1} of {features.length}
                    </div>
                    <div className="flex gap-2 mb-6">
                        {features.map((_, index) => (
                            <div
                                key={index}
                                className={`h-1 rounded-full transition-all duration-300 ${
                                index === currentIndex ? 'w-12 bg-gray-600' : 'w-8 bg-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                    <Button variant='primary' className='mt-8 mb-4 py-4 px-8 text-xl '>
                        Sign up for free
                    </Button>
                </div>

                <div className="gradient-bg *:w-full md:w-1/2 md:h-[60vh] flex items-center justify-center rounded-xl shadow-lg ">
                    <div className={`relative md:w-4/5 md:h-4/5 transition-opacity duration-300 ${
                        fadeIn ? 'opacity-100' : 'opacity-0'
                    }`}>
                        <Image
                            src={currentFeature.image}
                            alt={currentFeature.title}
                            fill
                            className='object-cover rounded-xl '
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Features;