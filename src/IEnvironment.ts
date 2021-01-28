import { Handlers, ScopedFunction } from "./index";

/**
 * env是一个这样的对象：
 * 本身是一个Handler
 * 本身有run函数可以执行外部函数
 * 实现IEnv语义
 */
export interface IEnvironment extends Handlers {
    //公共函数用于启动一个函数
    run<T extends any[]>(func: ScopedFunction,...args: T);
}
