import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import BaseEvent from '../event';
import type { AnimationClip, Group } from 'three';
interface Vec {
    x: number;
    y: number;
    z: number;
}
export interface GltfOptions {
    url: string;
    position: number[];
    height: number;
    rotation: Vec;
    scale: number | Vec;
    angle: number;
    configLoader: (loader: GLTFLoader) => void;
    onLoaded: (gltf: Group, animations: AnimationClip[]) => void;
}
declare class ThreeGltf extends BaseEvent {
    object: any;
    animations: any;
    layer: any;
    linerAnimationFrame: number;
    constructor(layer: any, options: GltfOptions);
    init(options: GltfOptions): void;
    setScale(scale: number | Vec): void;
    setPosition(position: any): void;
    setRotation(rotation: Vec): void;
    setAngle(angle: number): void;
    setHeight(height: any): void;
    getAnimations(): any;
    getObject(): any;
    refresh(): void;
    show(): void;
    hide(): void;
    animate(callback: any): void;
    startAnimations(): void;
    stopAnimations(): void;
    remove(): void;
    destroy(): void;
}
export { ThreeGltf };
