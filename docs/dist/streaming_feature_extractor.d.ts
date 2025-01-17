import { EventEmitter } from 'eventemitter3';
import { CircularAudioBuffer } from './utils/circular_audio_buffer';
import { Params } from './utils/types';
import { FeatureExtractor } from './utils/types';
export declare const audioCtx: any;
export declare abstract class StreamingFeatureExtractor extends EventEmitter implements FeatureExtractor {
    inputBufferLength: number;
    targetSr: number;
    bufferLength: number;
    bufferCount: number;
    melCount: number;
    hopLength: number;
    duration: number;
    isMfccEnabled: boolean;
    images: Float32Array[];
    spectrogram: Float32Array[];
    isStreaming: boolean;
    stream: MediaStream;
    circularBuffer: CircularAudioBuffer;
    constructor();
    protected abstract extraConfig(): void;
    config(params: Params): void;
    getFeatures(): Float32Array[];
    getImages(): Float32Array[];
    protected abstract setup(): void;
    protected abstract tearDown(): void;
    start(): void;
    stop(): void;
    protected getFullBuffers(): Float32Array[];
}
