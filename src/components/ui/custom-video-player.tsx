"use client";

import React, { useRef, useState, useEffect } from "react";
import { Download } from "lucide-react";

export default function CustomVideoPlayer() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        if (videoRef.current) {

            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    setIsPlaying(true);
                }).catch(console.error);
            }
        }
    }, []);


    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const toggleFullscreen = () => {
        if (videoRef.current) {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            } else {
                videoRef.current.parentElement?.requestFullscreen();
            }
        }
    }

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration);
        }
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    };

    const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

    return (
        <div className="group relative flex h-full w-full overflow-hidden outline-none rounded-xl aspect-video">
            <div className="h-full w-full pointer-events-none">
                <video
                    ref={videoRef}
                    src="/guidelines.mp4"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                />
            </div>


            <button
                aria-label="Play video"
                className={`text-white absolute left-1/2 top-1/2 z-[1] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center transition-opacity duration-500 ease-in-out ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}
                onClick={togglePlay}
                type="button"
            >
                {!isPlaying ? (

                    <svg
                        className="h-[54px] w-[54px] transform-none opacity-90 md:h-[80px] md:w-[80px]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 11 16"
                        fill="none"
                    >
                        <path
                            d="M0.302795 4.13636C0.302795 3.50877 0.811563 3 1.43916 3H2.8028C3.43039 3 3.93916 3.50877 3.93916 4.13636V11.8636C3.93916 12.4912 3.43039 13 2.8028 13H1.43916C0.811563 13 0.302795 12.4912 0.302795 11.8636V4.13636Z"
                            fill="currentColor"
                        ></path>
                        <path
                            d="M6.66643 4.13636C6.66643 3.50877 7.1752 3 7.8028 3H9.16643C9.79403 3 10.3028 3.50877 10.3028 4.13636V11.8636C10.3028 12.4912 9.79403 13 9.16643 13H7.8028C7.1752 13 6.66643 12.4912 6.66643 11.8636V4.13636Z"
                            fill="currentColor"
                        ></path>
                    </svg>
                ) : (
                    <div className="hidden"></div>
                )}

            </button>


            <div
                className="p-4 gap-3 text-white absolute bottom-0 left-0 right-0 z-[1] flex flex-col items-center justify-between transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
                style={{
                    background:
                        "linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.494) 8.1%, rgba(0, 0, 0, 0.475) 15.5%, rgba(0, 0, 0, 0.447) 22.5%, rgba(0, 0, 0, 0.41) 29%, rgba(0, 0, 0, 0.373) 35.3%, rgba(0, 0, 0, 0.325) 41.2%, rgba(0, 0, 0, 0.275) 47.1%, rgba(0, 0, 0, 0.224) 52.9%, rgba(0, 0, 0, 0.176) 58.8%, rgba(0, 0, 0, 0.13) 64.7%, rgba(0, 0, 0, 0.086) 71%, rgba(0, 0, 0, 0.05) 77.5%, rgba(0, 0, 0, 0.024) 84.5%, rgba(0, 0, 0, 0.008) 91.9%, rgba(0, 0, 0, 0) 100%)",
                }}
            >

                <div className="flex w-full md:hidden">
                    <div className="bg-white/40 relative h-1 w-full cursor-pointer overflow-hidden rounded-md">
                        <div
                            className="bg-white h-full"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>


                <div className="gap-4 w-full items-center justify-start flex">

                    <div className="flex-initial">
                        <button
                            type="button"
                            className="transition duration-200 flex items-center justify-center rounded-full w-8 h-8 text-white hover:text-white/80"
                            aria-label={isPlaying ? "Pause video" : "Play video"}
                            onClick={togglePlay}
                        >
                            {!isPlaying ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    viewBox="0 0 11 16"
                                    fill="none"
                                >
                                    <path d="M0.302795 4.13636C0.302795 3.50877 0.811563 3 1.43916 3H2.8028C3.43039 3 3.93916 3.50877 3.93916 4.13636V11.8636C3.93916 12.4912 3.43039 13 2.8028 13H1.43916C0.811563 13 0.302795 12.4912 0.302795 11.8636V4.13636Z" fill="#fff"></path>
                                    <path d="M6.66643 4.13636C6.66643 3.50877 7.1752 3 7.8028 3H9.16643C9.79403 3 10.3028 3.50877 10.3028 4.13636V11.8636C10.3028 12.4912 9.79403 13 9.16643 13H7.8028C7.1752 13 6.66643 12.4912 6.66643 11.8636V4.13636Z" fill="#fff"></path>
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                    <rect x="6" y="4" width="4" height="16" />
                                    <rect x="14" y="4" width="4" height="16" />
                                </svg>
                            )}
                        </button>
                    </div>


                    <div className="flex-initial">
                        <p className="text-white tabular-nums text-sm font-medium">
                            {formatTime(currentTime)}
                            <span className="ml-2 text-white/40 before:content-['|'] before:mr-2">
                                {formatTime(duration)}
                            </span>
                        </p>
                    </div>

                    <div className="flex-1 hidden md:block px-4">
                        <div className="bg-white/40 relative h-1 w-full cursor-pointer overflow-hidden rounded-md group/progress">
                            <div
                                className="bg-white h-full relative"
                                style={{ width: `${progress}%` }}
                            >
                            </div>
                        </div>
                    </div>

                    <div className="flex-initial">
                        <button
                            type="button"
                            className="transition duration-200 flex items-center justify-center rounded-full w-8 h-8 text-white hover:text-white/80"
                            aria-label={isMuted ? "Unmute video" : "Mute video"}
                            onClick={toggleMute}
                        >

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                viewBox="0 0 11 16"
                                fill="none"
                            >
                                {!isMuted ? (
                                    <path d="M5.00798 4.17768C4.79583 4.37215 4.7815 4.70178 4.97597 4.91393L7.57832 7.4789C7.86612 7.4789 8.09942 7.2456 8.09942 6.9578V4.30532C8.09942 3.17179 6.75195 2.57904 5.91637 3.34499L5.00798 4.17768Z" fill="#fff" />
                                ) : (
                                    <path d="M1.69365 3.46272C1.49015 3.25921 1.16021 3.25921 0.956704 3.46272C0.753202 3.66622 0.753202 3.99616 0.956704 4.19967L2.3346 5.57756C2.03067 5.9311 1.84628 6.39179 1.84628 6.89516V9.10483C1.84628 10.2214 2.75145 11.1266 3.86804 11.1266C4.11312 11.1266 4.3493 11.2185 4.52996 11.3841L5.91643 12.655C6.75202 13.421 8.09948 12.8282 8.09948 11.6947V11.3424L9.29432 12.5373C9.49782 12.7408 9.82776 12.7408 10.0313 12.5373C10.2348 12.3338 10.2348 12.0038 10.0313 11.8003L1.69365 3.46272Z" fill="#fff" />
                                )}
                                {!isMuted && <path d="M1.69365 3.46272C1.49015 3.25921 1.16021 3.25921 0.956704 3.46272C0.753202 3.66622 0.753202 3.99616 0.956704 4.19967L2.3346 5.57756C2.03067 5.9311 1.84628 6.39179 1.84628 6.89516V9.10483C1.84628 10.2214 2.75145 11.1266 3.86804 11.1266C4.11312 11.1266 4.3493 11.2185 4.52996 11.3841L5.91643 12.655C6.75202 13.421 8.09948 12.8282 8.09948 11.6947V11.3424L9.29432 12.5373C9.49782 12.7408 9.82776 12.7408 10.0313 12.5373C10.2348 12.3338 10.2348 12.0038 10.0313 11.8003L1.69365 3.46272Z" fill="#fff" />}

                            </svg>
                        </button>
                    </div>


                    <div className="flex-initial">
                        <button
                            type="button"
                            className="transition duration-200 flex items-center justify-center rounded-full w-8 h-8 text-white hover:text-white/80"
                            aria-label="Fullscreen"
                            onClick={toggleFullscreen}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 14 15" fill="none">
                                <path d="M7.92318 1.67025C7.92318 1.26779 8.24944 0.941528 8.6519 0.941528H13.0242C13.4267 0.941528 13.7529 1.26779 13.7529 1.67025V6.04256C13.7529 6.44502 13.4267 6.77128 13.0242 6.77128C12.6217 6.77128 12.2955 6.44502 12.2955 6.04256V3.42953L9.53154 6.19348C9.24695 6.47807 8.78556 6.47807 8.50097 6.19348C8.21639 5.9089 8.21639 5.4475 8.50097 5.16292L11.2649 2.39897H8.6519C8.24944 2.39897 7.92318 2.07271 7.92318 1.67025ZM1.36471 8.22872C1.76717 8.22872 2.09342 8.55498 2.09342 8.95744V11.5705L4.85738 8.80652C5.14196 8.52193 5.60336 8.52193 5.88794 8.80652C6.17252 9.0911 6.17252 9.5525 5.88794 9.83708L3.12399 12.601H5.73702C6.13948 12.601 6.46574 12.9273 6.46574 13.3298C6.46574 13.7322 6.13948 14.0585 5.73702 14.0585H1.36471C0.962245 14.0585 0.635986 13.7322 0.635986 13.3298V8.95744C0.635986 8.55498 0.962245 8.22872 1.36471 8.22872Z" fill="#fff"></path>
                            </svg>
                        </button>
                    </div>


                    <div className="relative flex-initial">
                        <button
                            type="button"
                            className="transition duration-200 flex items-center justify-center rounded-full w-8 h-8 text-white hover:text-white/80"
                            aria-label="Video Settings"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 12 16" fill="none">
                                <path d="M0.635925 7.99999C0.635925 7.32498 1.18313 6.77777 1.85815 6.77777C2.53316 6.77777 3.08037 7.32498 3.08037 7.99999C3.08037 8.67501 2.53316 9.22222 1.85815 9.22222C1.18313 9.22222 0.635925 8.67501 0.635925 7.99999ZM4.9137 7.99999C4.9137 7.32498 5.46091 6.77777 6.13593 6.77777C6.81094 6.77777 7.35815 7.32498 7.35815 7.99999C7.35815 8.67501 6.81094 9.22222 6.13593 9.22222C5.46091 9.22222 4.9137 8.67501 4.9137 7.99999ZM9.19148 7.99999C9.19148 7.32498 9.73869 6.77777 10.4137 6.77777C11.0887 6.77777 11.6359 7.32498 11.6359 7.99999C11.6359 8.67501 11.0887 9.22222 10.4137 9.22222C9.73869 9.22222 9.19148 8.67501 9.19148 7.99999Z" fill="#fff"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
