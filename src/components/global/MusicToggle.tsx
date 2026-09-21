"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Music, ListMusic, X } from "lucide-react";

interface Track {
  title: string;
  artist: string;
  url: string;
}

const playlist: Track[] = [
  {
    title: "Chill Lo-Fi Study",
    artist: "Lofi Focus Beats",
    url: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3",
  },
  {
    title: "Midnight Coding",
    artist: "Late Night Beats",
    url: "https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=lofi-chill-medium-version-159456.mp3",
  },
  {
    title: "Coffee & Algorithms",
    artist: "Ambient Flow",
    url: "https://cdn.pixabay.com/download/audio/2022/11/06/audio_c9320e8b2b.mp3?filename=ambient-piano-amp-strings-10711.mp3",
  },
];

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const [isMuted, setIsMuted] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const synthAudioCtxRef = useRef<AudioContext | null>(null);
  const synthIntervalRef = useRef<number | null>(null);

  // Fallback procedural soft ambient synthesizer using Web Audio API
  // Ensures sound ALWAYS works even if external CDN is blocked by network or CORS
  const startSynthAmbient = () => {
    try {
      if (!synthAudioCtxRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        synthAudioCtxRef.current = new AudioCtx();
      }
      const ctx = synthAudioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      // Play soothing pentatonic chords periodically
      const chords = [
        [261.63, 329.63, 392.0, 493.88], // Cmaj7
        [220.0, 261.63, 329.63, 392.0],  // Am7
        [174.61, 220.0, 261.63, 329.63], // Fmaj7
        [196.0, 246.94, 293.66, 349.23], // G7
      ];
      let chordIndex = 0;

      const playChord = () => {
        if (!ctx || ctx.state === "closed") return;
        const currentChord = chords[chordIndex % chords.length];
        chordIndex++;

        currentChord.forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = i % 2 === 0 ? "sine" : "triangle";
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          gain.gain.setValueAtTime(0.001, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.02 * volume, ctx.currentTime + 1.2);
          gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 4.5);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(ctx.currentTime + i * 0.08);
          osc.stop(ctx.currentTime + 4.6);
        });
      };

      playChord();
      if (synthIntervalRef.current) clearInterval(synthIntervalRef.current);
      synthIntervalRef.current = window.setInterval(playChord, 4500);
    } catch {
      // AudioContext not supported or blocked
    }
  };

  const stopSynthAmbient = () => {
    if (synthIntervalRef.current) {
      clearInterval(synthIntervalRef.current);
      synthIntervalRef.current = null;
    }
    if (synthAudioCtxRef.current && synthAudioCtxRef.current.state !== "closed") {
      synthAudioCtxRef.current.suspend();
    }
  };

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
      audioRef.current
        .play()
        .then(() => {
          stopSynthAmbient();
        })
        .catch(() => {
          // If external audio source fails, fall back to procedural ambient synthesizer
          startSynthAmbient();
        });
    } else {
      startSynthAmbient();
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      if (audioRef.current) audioRef.current.pause();
      stopSynthAmbient();
    } else {
      setIsPlaying(true);
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            stopSynthAmbient();
          })
          .catch(() => {
            startSynthAmbient();
          });
      } else {
        startSynthAmbient();
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
        onError={() => {
          // Automatic seamless fallback to procedural synth on network drop
          if (isPlaying) startSynthAmbient();
        }}
      />

      {/* Floating Playlist Drawer Popup */}
      {isPanelOpen && (
        <div className="fixed bottom-20 left-5 z-[910] w-72 rounded-2xl border border-white/[0.12] bg-[#121215]/95 p-4 text-[#ededef] shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-3">
            <div className="flex items-center gap-2">
              <Music className="h-4 w-4 text-emerald-400" />
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-white">
                Lo-Fi Playlist
              </span>
            </div>
            <button
              onClick={() => setIsPanelOpen(false)}
              className="text-[#71717a] hover:text-white transition-colors cursor-pointer"
              aria-label="Close playlist"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Current track info */}
          <div className="mb-4 rounded-xl border border-white/[0.06] bg-white/[0.03] p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-white truncate max-w-[170px]">
                  {playlist[currentTrackIndex].title}
                </p>
                <p className="text-[10px] font-mono text-[#71717a]">
                  {playlist[currentTrackIndex].artist}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <span className={`h-2 w-2 rounded-full ${isPlaying ? "bg-emerald-400 animate-pulse" : "bg-[#52525b]"}`} />
                <span className="font-mono text-[9px] text-[#a1a1aa]">
                  {isPlaying ? "PLAYING" : "PAUSED"}
                </span>
              </div>
            </div>

            {/* Playback Controls */}
            <div className="flex items-center justify-center gap-4 mt-3 pt-2 border-t border-white/[0.05]">
              <button
                onClick={prevTrack}
                className="text-[#a1a1aa] hover:text-white transition-colors cursor-pointer p-1"
                aria-label="Previous track"
              >
                <SkipBack className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={togglePlay}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0c0c0e] hover:bg-[#e4e4e7] transition-all cursor-pointer shadow-md"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
              </button>
              <button
                onClick={nextTrack}
                className="text-[#a1a1aa] hover:text-white transition-colors cursor-pointer p-1"
                aria-label="Next track"
              >
                <SkipForward className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Track List */}
          <div className="space-y-1 mb-3">
            <span className="font-mono text-[10px] text-[#71717a] uppercase tracking-wider block mb-1">
              Select Track
            </span>
            {playlist.map((track, idx) => (
              <button
                key={idx}
                onClick={() => playTrack(idx)}
                className={`w-full flex items-center justify-between rounded-lg px-2.5 py-1.5 text-left text-xs transition-colors cursor-pointer ${
                  currentTrackIndex === idx
                    ? "bg-emerald-500/15 text-emerald-300 font-medium border border-emerald-500/30"
                    : "text-[#a1a1aa] hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                <span className="truncate max-w-[180px]">{track.title}</span>
                <span className="font-mono text-[10px] text-[#71717a]">
                  0{idx + 1}
                </span>
              </button>
            ))}
          </div>

          {/* Volume Control */}
          <div className="flex items-center gap-2 pt-2 border-t border-white/[0.06] text-[#71717a]">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="hover:text-white transition-colors cursor-pointer"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted || volume === 0 ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
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
              className="h-1 flex-1 accent-emerald-400 bg-white/10 rounded-lg cursor-pointer"
            />
          </div>
        </div>
      )}

      {/* Floating Trigger Button (Preserves exact .music-btn style & placement) */}
      <button
        id="music-toggle"
        onClick={() => {
          if (!isPlaying) {
            togglePlay();
          }
          setIsPanelOpen(!isPanelOpen);
        }}
        className="music-btn group"
        aria-label="Music toggle"
        title={isPlaying ? "Click to open playlist (Playing)" : "Click to play lo-fi music"}
      >
        <span className="relative flex items-center justify-center">
          {isPlaying ? (
            <span className="text-sm">🎵</span>
          ) : (
            <span className="text-sm opacity-70 group-hover:opacity-100">🔇</span>
          )}
          {isPlaying && (
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
          )}
        </span>
      </button>
    </>
  );
}
