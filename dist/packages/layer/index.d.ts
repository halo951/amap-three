import { PerspectiveCamera, OrthographicCamera, WebGLRenderer, Scene } from 'three';
import Event from '../event';
import type { Camera } from 'three';
export interface ThreeLayerOptions {
    zIndex?: number;
    visible?: boolean;
    zooms?: number[];
    opacity?: number;
    alpha?: boolean;
    antialias?: boolean;
    customCoordsCenter?: number[];
    onInit?: (render: WebGLRenderer, scene: Scene, camera: Camera) => void;
    onRender?: (render: WebGLRenderer, scene: Scene, camera: Camera) => void;
}
declare class ThreeLayer extends Event {
    customCoords: any;
    center: number[];
    layer: any;
    renderer?: WebGLRenderer;
    camera?: PerspectiveCamera | OrthographicCamera;
    scene?: Scene;
    options: ThreeLayerOptions;
    map: any;
    frameTimer: number;
    needsUpdate: boolean;
    constructor(map: any, options?: ThreeLayerOptions);
    init(): void;
    update(): void;
    animate(): void;
    refreshMap(): void;
    convertLngLat(lnglat: any): any;
    add(object: any): void;
    remove(object: any): void;
    getScene(): Scene | undefined;
    getCamera(): PerspectiveCamera | OrthographicCamera | undefined;
    getRender(): WebGLRenderer | undefined;
    destroy(): void;
    getMap(): any;
    getOpacity(): number;
    setOpacity(opacity: number): void;
    getZooms(): number[];
    setZooms(zooms: number[]): void;
    getzIndex(): number;
    setzIndex(zIndex: number): void;
    show(): void;
    hide(): void;
}
export { ThreeLayer };
