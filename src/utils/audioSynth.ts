// Audio Engine supporting custom MP3 tracks playlist & controls

export interface AudioTrack {
  id: string;
  name: string;
  url: string;
}

export const PLAYLIST_TRACKS: AudioTrack[] = [
  {
    id: "track-1",
    name: "Vois Sur Ton Chemin (Remix)",
    url: "/audio/track1.mp3",
  },
  {
    id: "track-2",
    name: "Cinematic Theme 2",
    url: "/audio/track2.mp3",
  },
  {
    id: "track-3",
    name: "Cinematic Backsound 3",
    url: "/audio/track3.mp3",
  },
];

class MultiAudioEngine {
  private audioHtmlElement: HTMLAudioElement | null = null;
  private currentTrackIndex: number = 0;
  private isPlaying: boolean = false;
  private isMuted: boolean = false;
  private volume: number = 0.7;

  constructor() {
    if (typeof window !== "undefined") {
      this.initAudioElement(0);
    }
  }

  private initAudioElement(index: number) {
    if (typeof window === "undefined") return;

    if (this.audioHtmlElement) {
      this.audioHtmlElement.pause();
      this.audioHtmlElement.src = "";
    }

    this.currentTrackIndex = index;
    const track = PLAYLIST_TRACKS[index] || PLAYLIST_TRACKS[0];

    this.audioHtmlElement = new Audio(track.url);
    this.audioHtmlElement.loop = false; // Auto advance to next track when ended
    this.audioHtmlElement.volume = this.isMuted ? 0 : this.volume;

    // Handle track end -> play next track automatically
    this.audioHtmlElement.onended = () => {
      this.nextTrack();
    };
  }

  public play() {
    if (!this.audioHtmlElement) {
      this.initAudioElement(this.currentTrackIndex);
    }

    if (this.audioHtmlElement) {
      this.audioHtmlElement.volume = this.isMuted ? 0 : this.volume;
      this.audioHtmlElement
        .play()
        .then(() => {
          this.isPlaying = true;
        })
        .catch((err) => {
          console.warn("Audio autoplay prevented or failed:", err);
          this.isPlaying = false;
        });
    }
  }

  public pause() {
    if (this.audioHtmlElement) {
      this.audioHtmlElement.pause();
    }
    this.isPlaying = false;
  }

  public togglePlay(): boolean {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
    return this.isPlaying;
  }

  public setMute(mute: boolean): boolean {
    this.isMuted = mute;
    if (this.audioHtmlElement) {
      this.audioHtmlElement.muted = mute;
    }
    return this.isMuted;
  }

  public setVolume(val: number): number {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.audioHtmlElement) {
      this.audioHtmlElement.volume = this.isMuted ? 0 : this.volume;
    }
    return this.volume;
  }

  public nextTrack() {
    const nextIdx = (this.currentTrackIndex + 1) % PLAYLIST_TRACKS.length;
    this.switchTrack(nextIdx);
  }

  public prevTrack() {
    const prevIdx = (this.currentTrackIndex - 1 + PLAYLIST_TRACKS.length) % PLAYLIST_TRACKS.length;
    this.switchTrack(prevIdx);
  }

  public switchTrack(index: number) {
    const wasPlaying = this.isPlaying;
    this.initAudioElement(index);
    if (wasPlaying) {
      this.play();
    }
  }

  public getCurrentTrack(): AudioTrack {
    return PLAYLIST_TRACKS[this.currentTrackIndex] || PLAYLIST_TRACKS[0];
  }

  public getCurrentTrackIndex(): number {
    return this.currentTrackIndex;
  }

  public resetAudio() {
    if (this.audioHtmlElement) {
      this.audioHtmlElement.pause();
      this.audioHtmlElement.currentTime = 0;
    }
    this.currentTrackIndex = 0;
    this.isPlaying = false;
  }

  public getStatus() {
    return {
      isPlaying: this.isPlaying,
      isMuted: this.isMuted,
      volume: this.volume,
      currentTrack: this.getCurrentTrack(),
      currentTrackIndex: this.currentTrackIndex,
    };
  }
}

let audioEngineInstance: MultiAudioEngine | null = null;

export function getAudioEngine(): MultiAudioEngine {
  if (typeof window === "undefined") {
    return new MultiAudioEngine();
  }
  if (!audioEngineInstance) {
    audioEngineInstance = new MultiAudioEngine();
  }
  return audioEngineInstance;
}
