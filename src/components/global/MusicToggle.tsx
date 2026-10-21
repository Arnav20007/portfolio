"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Music, X } from "lucide-react";

interface Track {
  title: string;
  artist: string;
  genre: string;
  url: string;
}

const playlist: Track[] = [
  {
    title: "He's a Pirate (Jack Sparrow Theme)",
    artist: "Pirates of the Caribbean · Piano & Epic",
    genre: "Piano / Theme",
    url: "/music/hes-a-pirate.mp3",
  },
  {
    title: "Chill Lo-Fi Coding & Study",
    artist: "Late Night Beats · B.Tech Focus",
    genre: "Lo-Fi",
    url: "/music/lofi-study.mp3",
  },
  {
    title: "Peaceful Piano Reverie",
    artist: "Classical Solo Piano · Ambient",
    genre: "Piano",
    url: "/music/piano-sample.mp3",
  },
];

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [volume, setVolume] = useState(0.45);
  const [isMuted, setIsMuted] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

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
      audioRef.current.play().catch(() => {
        // Autoplay may be restricted until user gesture
      });
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
        onEnded={nextTrack}
        preload="metadata"
      />

      {/* Floating Playlist Drawer Popup */}
      {isPanelOpen && (
        <div className="fixed bottom-20 left-5 z-[910] w-80 rounded-2xl border border-emerald-200/80 bg-white/95 p-4 text-slate-900 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-600 text-white shadow-sm">
                <Music className="h-4 w-4" />
              </div>
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 block">
                  Soundtrack Player
                </span>
                <span className="text-[10px] text-emerald-600 font-semibold">
                  Jack Sparrow · Lo-Fi · Piano
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
          <div className="mb-3 rounded-xl border border-emerald-100 bg-emerald-50/60 p-3">
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
                <span className={`h-2 w-2 rounded-full ${isPlaying ? "bg-emerald-500 animate-pulse" : "bg-slate-300"}`} />
                <span className="font-mono text-[9px] font-bold text-emerald-700">
                  {isPlaying ? "PLAYING" : "PAUSED"}
                </span>
              </div>
            </div>

            {/* Playback Controls */}
            <div className="flex items-center justify-center gap-4 mt-3 pt-2.5 border-t border-emerald-200/50">
              <button
                onClick={prevTrack}
                className="text-slate-500 hover:text-slate-900 transition-colors cursor-pointer p-1"
                aria-label="Previous track"
              >
                <SkipBack className="h-4 w-4" />
              </button>
              <button
                onClick={togglePlay}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-all cursor-pointer shadow-md shadow-emerald-600/30"
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
            </div>
          </div>

          {/* Track List */}
          <div className="space-y-1 mb-3">
            <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
              Select Playlist Track
            </span>
            {playlist.map((track, idx) => (
              <button
                key={idx}
                onClick={() => playTrack(idx)}
                className={`w-full flex items-center justify-between rounded-xl px-3 py-2 text-left text-xs transition-colors cursor-pointer ${
                  currentTrackIndex === idx
                    ? "bg-emerald-600 text-white font-bold shadow-sm"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <div className="truncate max-w-[190px]">
                  <span className="truncate block">{track.title}</span>
                  <span className={`text-[10px] block ${currentTrackIndex === idx ? "text-emerald-100" : "text-slate-400"}`}>
                    {track.genre}
                  </span>
                </div>
                <span className={`font-mono text-[10px] ${currentTrackIndex === idx ? "text-emerald-100" : "text-slate-400"}`}>
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
              className="h-1.5 flex-1 accent-emerald-600 bg-slate-200 rounded-lg cursor-pointer"
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
        className="fixed bottom-5 left-5 z-[900] flex h-11 w-11 items-center justify-center rounded-full border border-emerald-300 bg-white shadow-lg shadow-emerald-500/15 transition-all hover:scale-105 hover:border-emerald-500 active:scale-95 cursor-pointer"
        aria-label="Music player"
        title={isPlaying ? "Playing: " + playlist[currentTrackIndex].title : "Click to play Jack Sparrow theme / Lo-Fi music"}
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
