"use client";

import { useState, useRef, useEffect, useCallback } from "react";
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
}

const playlist: Track[] = [
  {
    title: "He's a Pirate (Jack Sparrow Theme)",
    artist: "Pirates of the Caribbean · Piano & Epic",
    genre: "Epic / Theme",
    url: "/music/hes-a-pirate.mp3",
  },
  {
    title: "Fairytale",
    artist: "Alexander Rybak · Folk & Melody",
    genre: "Folk / Melody",
    url: "/music/fairytale.mp3",
  },
  {
    title: "Professional Deep Work",
    artist: "Technical Focus & Ambient Flow",
    genre: "Deep Work Focus",
    url: "/music/professional-focus.mp3",
  },
  {
    title: "Chill Lo-Fi Coding & Study",
    artist: "Late Night B.Tech Focus Beats",
    genre: "Lo-Fi Beats",
    url: "/music/lofi-study.mp3",
  },
  {
    title: "Peaceful Piano Reverie",
    artist: "Classical Solo Piano",
    genre: "Classical Piano",
    url: "/music/piano-sample.mp3",
  },
];

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [volume, setVolume] = useState(0.6);
  const [isMuted, setIsMuted] = useState(false);
  const [isLooping, setIsLooping] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Sync volume with audio element
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const playAudio = useCallback((index: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    const track = playlist[index];
    if (!track) return;

    if (audio.getAttribute("src") !== track.url) {
      audio.src = track.url;
    }
    const promise = audio.play();
    if (promise !== undefined) {
      promise.catch((err) => {
        console.warn("Audio playback interrupted:", err);
      });
    }
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      playAudio(currentTrackIndex);
    }
  };

  const playTrack = (index: number) => {
    setCurrentTrackIndex(index);
    playAudio(index);
  };

  const nextTrack = () => {
    const nextIdx = (currentTrackIndex + 1) % playlist.length;
    setCurrentTrackIndex(nextIdx);
    playAudio(nextIdx);
  };

  const prevTrack = () => {
    const prevIdx = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    setCurrentTrackIndex(prevIdx);
    playAudio(prevIdx);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return "0:00";
    const mins = Math.floor(secs / 60);
    const remainingSecs = Math.floor(secs % 60);
    return `${mins}:${remainingSecs < 10 ? "0" : ""}${remainingSecs}`;
  };

  const currentTrack = playlist[currentTrackIndex] || playlist[0];

  return (
    <>
      {/* Hidden Native Audio Element */}
      <audio
        ref={audioRef}
        src={playlist[0].url}
        preload="metadata"
        playsInline
        onPlay={() => {
          setIsPlaying(true);
          setIsLoading(false);
        }}
        onPause={() => setIsPlaying(false)}
        onWaiting={() => setIsLoading(true)}
        onPlaying={() => setIsLoading(false)}
        onTimeUpdate={() => {
          if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
          }
        }}
        onLoadedMetadata={() => {
          if (audioRef.current && !isNaN(audioRef.current.duration)) {
            setDuration(audioRef.current.duration);
          }
        }}
        onEnded={() => {
          if (isLooping) {
            const nextIdx = (currentTrackIndex + 1) % playlist.length;
            setCurrentTrackIndex(nextIdx);
            playAudio(nextIdx);
          } else {
            setIsPlaying(false);
          }
        }}
      />

      {/* Floating Playlist Drawer Popup */}
      {isPanelOpen && (
        <div className="fixed bottom-20 left-5 z-[910] w-84 rounded-2xl border border-[#E6ECF8] bg-white p-4 text-[#141C3A] shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-3 duration-200">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#E6ECF8] pb-3 mb-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#6E07F3] text-white shadow-sm font-bold">
                <Music className="h-4 w-4" />
              </div>
              <div>
                <span className="font-display text-xs font-bold uppercase tracking-wider text-[#141C3A] block">
                  Soundtrack Player
                </span>
                <span className="text-[10px] text-[#6E07F3] font-semibold block">
                  Jack Sparrow · Fairytale · Lo-Fi
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsPanelOpen(false)}
              className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors cursor-pointer"
              aria-label="Close soundtrack player"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Current track info & waveform */}
          <div className="mb-3 rounded-xl border border-[#E6ECF8] bg-[#F7F9FC] p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="truncate max-w-[190px]">
                <p className="text-xs font-bold text-[#141C3A] truncate">
                  {currentTrack.title}
                </p>
                <p className="text-[11px] text-[#5A6275] truncate">
                  {currentTrack.artist}
                </p>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    isPlaying ? "bg-[#6E07F3] animate-pulse" : "bg-slate-300"
                  }`}
                />
                <span className="font-mono text-[9px] font-bold text-[#6E07F3]">
                  {isLoading ? "LOADING..." : isPlaying ? "PLAYING" : "PAUSED"}
                </span>
              </div>
            </div>

            {/* Time progress bar */}
            <div className="space-y-1 mt-2">
              <input
                type="range"
                min="0"
                max={duration || 100}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1.5 accent-[#6E07F3] bg-slate-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#5A6275]">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Playback Controls */}
            <div className="flex items-center justify-center gap-4 mt-3 pt-2.5 border-t border-slate-200/60">
              <button
                onClick={prevTrack}
                className="text-slate-500 hover:text-[#6E07F3] transition-colors cursor-pointer p-1"
                aria-label="Previous track"
                title="Previous track"
              >
                <SkipBack className="h-4 w-4" />
              </button>
              <button
                onClick={togglePlay}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6E07F3] text-white hover:bg-[#5600c7] hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-md shadow-purple-500/20 font-bold"
                aria-label={isPlaying ? "Pause" : "Play"}
                title={isPlaying ? "Pause music" : "Play music"}
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
              </button>
              <button
                onClick={nextTrack}
                className="text-slate-500 hover:text-[#6E07F3] transition-colors cursor-pointer p-1"
                aria-label="Next track"
                title="Next track"
              >
                <SkipForward className="h-4 w-4" />
              </button>
              <button
                onClick={() => setIsLooping(!isLooping)}
                className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                  isLooping ? "text-[#6E07F3] bg-purple-50" : "text-slate-400 hover:text-slate-600"
                }`}
                title={isLooping ? "Continuous Loop Active" : "Loop Inactive"}
              >
                <Repeat className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Track List */}
          <div className="space-y-1 mb-3 max-h-[165px] overflow-y-auto pr-0.5">
            <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
              Select Soundtrack Track (Continuous Loop)
            </span>
            {playlist.map((track, idx) => (
              <button
                key={idx}
                onClick={() => playTrack(idx)}
                className={`w-full flex items-center justify-between rounded-xl px-3 py-2 text-left text-xs transition-colors cursor-pointer ${
                  currentTrackIndex === idx
                    ? "bg-[#6E07F3]/10 text-[#6E07F3] font-bold border border-[#6E07F3]/25"
                    : "text-slate-700 hover:bg-slate-50 border border-transparent"
                }`}
              >
                <div className="truncate max-w-[190px]">
                  <span className="truncate block font-semibold">{track.title}</span>
                  <span
                    className={`text-[10px] block ${
                      currentTrackIndex === idx ? "text-[#6E07F3]" : "text-slate-400"
                    }`}
                  >
                    {track.genre}
                  </span>
                </div>
                <span
                  className={`font-mono text-[10px] ${
                    currentTrackIndex === idx ? "text-[#6E07F3] font-bold" : "text-slate-400"
                  }`}
                >
                  0{idx + 1}
                </span>
              </button>
            ))}
          </div>

          {/* Volume Control */}
          <div className="flex items-center gap-2 pt-2.5 border-t border-[#E6ECF8] text-slate-500">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="hover:text-[#6E07F3] transition-colors cursor-pointer"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="h-4 w-4 text-rose-500" />
              ) : (
                <Volume2 className="h-4 w-4" />
              )}
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
            <span className="font-mono text-[10px] text-slate-400 w-8 text-right">
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
            playAudio(currentTrackIndex);
            setIsPanelOpen(true);
          } else {
            setIsPanelOpen(!isPanelOpen);
          }
        }}
        className="fixed bottom-5 left-5 z-[900] flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#E6ECF8] bg-white text-[#141C3A] shadow-lg transition-all hover:scale-105 hover:border-[#6E07F3] active:scale-95 cursor-pointer group"
        aria-label="Soundtrack Music Player"
        title={isPlaying ? "Playing: " + currentTrack.title + " (Click to toggle)" : "Click to play soundtrack"}
      >
        <span className="relative flex items-center justify-center">
          {isPlaying ? (
            <span className="flex items-end gap-0.5 h-4 w-4 justify-center pb-0.5">
              <span className="w-1 bg-[#6E07F3] rounded-full animate-bounce [animation-delay:0ms] h-3" />
              <span className="w-1 bg-[#6E07F3] rounded-full animate-bounce [animation-delay:150ms] h-4" />
              <span className="w-1 bg-[#6E07F3] rounded-full animate-bounce [animation-delay:300ms] h-2.5" />
            </span>
          ) : (
            <span className="text-lg opacity-80 group-hover:opacity-100 transition-opacity">🎧</span>
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
