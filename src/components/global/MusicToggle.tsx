"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Music,
  X,
  Repeat,
} from "lucide-react";

interface Track {
  title: string;
  artist: string;
  genre: string;
  url: string;
  pageRecommendation?: string;
}

const playlist: Track[] = [
  {
    title: "He's a Pirate (Jack Sparrow Theme)",
    artist: "Pirates of the Caribbean · Piano & Epic",
    genre: "Epic / Piano",
    url: "/music/hes-a-pirate.mp3",
    pageRecommendation: "/",
  },
  {
    title: "Fairytale",
    artist: "Alexander Rybak · Acoustic & Melody",
    genre: "Folk / Violin",
    url: "/music/fairytale.mp3",
    pageRecommendation: "/friend",
  },
  {
    title: "Professional Deep Work",
    artist: "Technical Focus & Ambient",
    genre: "Focus Ambient",
    url: "/music/professional-focus.mp3",
    pageRecommendation: "/recruiter",
  },
  {
    title: "Chill Lo-Fi Coding & Study",
    artist: "Late Night B.Tech Beats",
    genre: "Lo-Fi Beats",
    url: "/music/lofi-study.mp3",
    pageRecommendation: "/",
  },
  {
    title: "Peaceful Piano Reverie",
    artist: "Classical Solo Piano",
    genre: "Classical Piano",
    url: "/music/piano-sample.mp3",
  },
];

export default function MusicToggle() {
  const pathname = usePathname();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [isLooping, setIsLooping] = useState(true);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Auto-suggest / switch song based on current page
  useEffect(() => {
    if (!pathname) return;
    const matchedIndex = playlist.findIndex((t) => t.pageRecommendation === pathname);
    if (matchedIndex !== -1 && matchedIndex !== currentTrackIndex && !isPlaying) {
      setCurrentTrackIndex(matchedIndex);
    }
  }, [pathname]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const playTrack = (index: number) => {
    setCurrentTrackIndex(index);
    setIsPlaying(true);

    if (audioRef.current) {
      audioRef.current.src = playlist[index].url;
      audioRef.current.load();
      audioRef.current.play().catch(() => {});
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      if (audioRef.current) audioRef.current.pause();
    } else {
      setIsPlaying(true);
      if (audioRef.current) {
        audioRef.current.play().catch(() => {});
      }
    }
  };

  // Continuous auto-next and loop logic
  const handleTrackEnded = () => {
    if (isLooping) {
      const nextIdx = (currentTrackIndex + 1) % playlist.length;
      playTrack(nextIdx);
    }
  };

  const nextTrack = () => {
    const nextIdx = (currentTrackIndex + 1) % playlist.length;
    playTrack(nextIdx);
  };

  const prevTrack = () => {
    const prevIdx = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    playTrack(prevIdx);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={playlist[currentTrackIndex].url}
        onEnded={handleTrackEnded}
        preload="metadata"
      />

      {/* Floating Playlist Drawer Popup */}
      {isPanelOpen && (
        <div className="fixed bottom-20 left-5 z-[910] w-80 rounded-2xl border border-slate-200 bg-white p-4 text-slate-900 shadow-xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#6E07F3] text-white shadow-xs font-bold">
                <Music className="h-4 w-4" />
              </div>
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 block">
                  Soundtrack Player
                </span>
                <span className="text-[10px] text-[#6E07F3] font-semibold">
                  Jack Sparrow · Fairytale · Lo-Fi
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsPanelOpen(false)}
              className="text-slate-400 hover:text-slate-700 transition-colors cursor-pointer p-1"
              aria-label="Close playlist"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Current track info */}
          <div className="mb-3 rounded-xl border border-slate-100 bg-slate-50 p-3">
            <div className="flex items-center justify-between">
              <div className="truncate max-w-[190px]">
                <p className="text-xs font-bold text-slate-900 truncate">
                  {playlist[currentTrackIndex].title}
                </p>
                <p className="text-[10px] text-slate-500 truncate">
                  {playlist[currentTrackIndex].artist}
                </p>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <span className={`h-2 w-2 rounded-full ${isPlaying ? "bg-[#6E07F3] animate-pulse" : "bg-slate-300"}`} />
                <span className="font-mono text-[9px] font-bold text-[#6E07F3]">
                  {isPlaying ? "PLAYING" : "PAUSED"}
                </span>
              </div>
            </div>

            {/* Playback Controls */}
            <div className="flex items-center justify-center gap-4 mt-3 pt-2.5 border-t border-slate-200/50">
              <button
                onClick={prevTrack}
                className="text-slate-500 hover:text-slate-900 transition-colors cursor-pointer p-1"
                aria-label="Previous track"
              >
                <SkipBack className="h-4 w-4" />
              </button>
              <button
                onClick={togglePlay}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6E07F3] text-white hover:bg-[#5600c7] transition-all cursor-pointer shadow-xs font-bold"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
              </button>
              <button
                onClick={nextTrack}
                className="text-slate-500 hover:text-slate-900 transition-colors cursor-pointer p-1"
                aria-label="Next track"
              >
                <SkipForward className="h-4 w-4" />
              </button>
              <button
                onClick={() => setIsLooping(!isLooping)}
                className={`p-1 transition-colors cursor-pointer ${isLooping ? "text-[#6E07F3]" : "text-slate-400"}`}
                title={isLooping ? "Continuous Loop Enabled" : "Loop Disabled"}
              >
                <Repeat className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Track List */}
          <div className="space-y-1 mb-3 max-h-[170px] overflow-y-auto">
            <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
              Select Playlist Track (Loops Automatically)
            </span>
            {playlist.map((track, idx) => (
              <button
                key={idx}
                onClick={() => playTrack(idx)}
                className={`w-full flex items-center justify-between rounded-xl px-3 py-2 text-left text-xs transition-colors cursor-pointer ${
                  currentTrackIndex === idx
                    ? "bg-purple-50 text-[#6E07F3] font-bold border border-purple-200"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <div className="truncate max-w-[190px]">
                  <span className="truncate block">{track.title}</span>
                  <span className={`text-[10px] block ${currentTrackIndex === idx ? "text-[#6E07F3] font-medium" : "text-slate-400"}`}>
                    {track.genre}
                  </span>
                </div>
                <span className={`font-mono text-[10px] ${currentTrackIndex === idx ? "text-[#6E07F3] font-bold" : "text-slate-400"}`}>
                  0{idx + 1}
                </span>
              </button>
            ))}
          </div>

          {/* Volume Control */}
          <div className="flex items-center gap-2 pt-2.5 border-t border-slate-100 text-slate-500">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="hover:text-slate-900 transition-colors cursor-pointer"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted || volume === 0 ? <VolumeX className="h-4 w-4 text-rose-500" /> : <Volume2 className="h-4 w-4" />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={(e) => {
                setVolume(parseFloat(e.target.value));
                setIsMuted(false);
              }}
              className="h-1.5 flex-1 accent-[#6E07F3] bg-slate-200 rounded-lg cursor-pointer"
            />
            <span className="font-mono text-[10px] text-slate-400 w-7 text-right">
              {Math.round((isMuted ? 0 : volume) * 100)}%
            </span>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        id="music-toggle"
        onClick={() => {
          if (!isPlaying) {
            togglePlay();
          }
          setIsPanelOpen(!isPanelOpen);
        }}
        className="fixed bottom-5 left-5 z-[900] flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-md transition-all hover:scale-105 hover:border-[#6E07F3] active:scale-95 cursor-pointer"
        aria-label="Music player"
        title={isPlaying ? "Playing: " + playlist[currentTrackIndex].title : "Click to play music"}
      >
        <span className="relative flex items-center justify-center">
          {isPlaying ? (
            <span className="text-base animate-bounce">🎵</span>
          ) : (
            <span className="text-base opacity-75">🎧</span>
          )}
          {isPlaying && (
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#6E07F3]" />
            </span>
          )}
        </span>
      </button>
    </>
  );
}
