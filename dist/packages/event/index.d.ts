declare type Callback = <T>(e: T) => void;
declare abstract class BaseEvent {
    private _listeners;
    /**
     * 绑定事件
     * @param name 事件名称
     * @param cb  事件回调
     * @param isOnce 是否只执行一次
     */
    on(name: string, cb: Callback, isOnce?: boolean): void;
    off(name: string, cb: Callback): void;
    emit(name: string, data?: any): void;
}
export default BaseEvent;
