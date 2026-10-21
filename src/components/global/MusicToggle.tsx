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
        <div className="fixed bottom-20 left-5 z-[910] w-80 rounded-2xl border border-white/10 bg-[#09120F]/95 p-4 text-[#F4EFEA] shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#10B981] text-[#050807] shadow-sm font-bold">
                <Music className="h-4 w-4" />
              </div>
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-white block">
                  Soundtrack Player
                </span>
                <span className="text-[10px] text-emerald-400 font-semibold">
                  Jack Sparrow · Fairytale · Lo-Fi
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsPanelOpen(false)}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer p-1"
              aria-label="Close playlist"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Current track info */}
          <div className="mb-3 rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <div className="flex items-center justify-between">
              <div className="truncate max-w-[190px]">
                <p className="text-xs font-bold text-white truncate">
                  {playlist[currentTrackIndex].title}
                </p>
                <p className="text-[10px] text-slate-400 truncate">
                  {playlist[currentTrackIndex].artist}
                </p>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <span className={`h-2 w-2 rounded-full ${isPlaying ? "bg-emerald-400 animate-pulse" : "bg-slate-500"}`} />
                <span className="font-mono text-[9px] font-bold text-emerald-400">
                  {isPlaying ? "PLAYING" : "PAUSED"}
                </span>
              </div>
            </div>

            {/* Playback Controls */}
            <div className="flex items-center justify-center gap-4 mt-3 pt-2.5 border-t border-white/5">
              <button
                onClick={prevTrack}
                className="text-slate-400 hover:text-white transition-colors cursor-pointer p-1"
                aria-label="Previous track"
              >
                <SkipBack className="h-4 w-4" />
              </button>
              <button
                onClick={togglePlay}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#10B981] text-[#050807] hover:bg-emerald-400 transition-all cursor-pointer shadow-md shadow-emerald-500/20 font-bold"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
              </button>
              <button
                onClick={nextTrack}
                className="text-slate-400 hover:text-white transition-colors cursor-pointer p-1"
                aria-label="Next track"
              >
                <SkipForward className="h-4 w-4" />
              </button>
              <button
                onClick={() => setIsLooping(!isLooping)}
                className={`p-1 transition-colors cursor-pointer ${isLooping ? "text-emerald-400" : "text-slate-600"}`}
                title={isLooping ? "Continuous Loop Enabled" : "Loop Disabled"}
              >
                <Repeat className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Track List */}
          <div className="space-y-1 mb-3 max-h-[170px] overflow-y-auto">
            <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
              Select Playlist Track (Loops Automatically)
            </span>
            {playlist.map((track, idx) => (
              <button
                key={idx}
                onClick={() => playTrack(idx)}
                className={`w-full flex items-center justify-between rounded-xl px-3 py-2 text-left text-xs transition-colors cursor-pointer ${
                  currentTrackIndex === idx
                    ? "bg-[#10B981] text-[#050807] font-bold shadow-sm"
                    : "text-slate-300 hover:bg-white/[0.05]"
                }`}
              >
                <div className="truncate max-w-[190px]">
                  <span className="truncate block">{track.title}</span>
                  <span className={`text-[10px] block ${currentTrackIndex === idx ? "text-emerald-950 font-medium" : "text-slate-500"}`}>
                    {track.genre}
                  </span>
                </div>
                <span className={`font-mono text-[10px] ${currentTrackIndex === idx ? "text-emerald-950 font-bold" : "text-slate-500"}`}>
                  0{idx + 1}
                </span>
              </button>
            ))}
          </div>

          {/* Volume Control */}
          <div className="flex items-center gap-2 pt-2.5 border-t border-white/5 text-slate-400">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="hover:text-white transition-colors cursor-pointer"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted || volume === 0 ? <VolumeX className="h-4 w-4 text-rose-400" /> : <Volume2 className="h-4 w-4" />}
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
              className="h-1.5 flex-1 accent-emerald-400 bg-white/10 rounded-lg cursor-pointer"
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
        className="fixed bottom-5 left-5 z-[900] flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#09120F]/90 text-white shadow-lg shadow-emerald-500/10 backdrop-blur-md transition-all hover:scale-105 hover:border-emerald-500/50 active:scale-95 cursor-pointer"
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
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
          )}
        </span>
      </button>
    </>
  );
}
