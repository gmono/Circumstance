export interface Handlers{
    emit(sign:string,data:any):any;
    declare(name:string,data:any):any;
    switch(state:any):any;
    get(key:any):any;
    output(data:any):any;
    log(data:any):any;
}

//函数式路线
//自动填充以default实现
export function runner<T extends Handlers>(handler:Partial<T>){
    let a=Object.assign(new DefaultHandlers(),handler) as T;
    let ret=(func:(h:T)=>any)=>{
        func(a);
    };
    let rett=ret as (typeof ret&{
        run:typeof ret;
    });
    rett.run=ret;
    return rett;
}

//handlers接口的实现
export class DefaultHandlers implements Handlers{
    emit(sign: string, data: any) {
        
    }
    declare(name: string, data: any) {
        
    }
    switch(state: any) {
        
    }
    get(key: any) {
        
    }
    output(data: any) {
        
    }
    log(data: any) {
        
    }


}

/**
 * 注意 多重继承 代理实现
 */
export abstract class Runner implements Handlers{
    //这个不可为null 且可以被动态设置
    constructor(public AgentHandlers:Handlers){

    }
    //代理实现 作为一个handler包装器
    emit(sign: string, data: any) {
        return this.AgentHandlers.emit(sign,data);
    }
    declare(name: string, data: any) {
         return this.AgentHandlers.declare(name,data)
    }
    switch(state: any) {
         return this.AgentHandlers.switch(state);
    }
    get(key: any) {
         return this.AgentHandlers.get(key);
    }
    output(data: any) {
         return this.AgentHandlers.output(data);
    }
    log(data: any) {
         return this.AgentHandlers.log(data);
    }
    //嵌入运行
    protected abstract run<T extends any[]>(...args:T);

}
//写一个runner 此处为面向对象路线
// class MyRunner extends Runner{
//     protected run<T extends any[]>(...args: T) {
//         this.output("helllfasdf")
//     }
// }