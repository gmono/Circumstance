import { DefaultHandlers, Handlers } from "./index";



export interface ITask{
    start(...args):any;
}
export interface IScopedTask extends ITask,Handlers{

}
/**
 * ScopedTask是这样一个对象：
 * 本身是一个handler 可提供环境
 * 内部有虚函数run,可以被继承重写
 * 提供start函数用于启动任务，调用run
 * 要提供功能请重写其中的handler函数
 * ScopedTask本身是一个封闭区域 通过继承重写使用 如果要用一个环境运行多个func
 * 请使用IRunner接口系列
 */
export abstract class ScopedTask extends DefaultHandlers implements IScopedTask {
    public start(...args: any[]) {
        this.run(...args)
    }
    //需要重写的函数
    protected abstract run<T extends any[]>(...args: T);
    
}
