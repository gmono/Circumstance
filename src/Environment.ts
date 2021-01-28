import { DefaultHandlers, Handlers, runner, ScopedFunction } from "./index";
import { IEnvironment } from "./IEnvironment";

/**
 * Runner是一个
 * 注意 多重继承 代理实现
 * 手动实现的动态继承。。
 */

export abstract class Environment extends DefaultHandlers implements IEnvironment {
    //这个不可为null 且可以被动态设置
    constructor(private agent: Handlers) {
        super()
        //代理模式
        this.AgentHandler = agent;
    }
    //设置AgentHandler
    set AgentHandler(v: Handlers) {
        //继承内容
        for (let k in v) {
            this[k] = v[k];
        }
    }
    get AgentHandler() {
        return this.agent;
    }
    //嵌入运行函数
    public run<T extends any[]>(func:ScopedFunction,...args){
        runner(this as Handlers).run(func,...args);
    }

}
