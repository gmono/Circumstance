export interface Handlers{
    emit(sign:string,data:any):any;
    declare(name:string,data:any):any;
    switch(state:any):any;
    get(key:any):any;
    output(data:any):any;
    log(data:any):any;
}
//接收handlers的函数
export type ScopedFunction=(handler:Handlers)=>(...args)=>any;
//别名 handlers语义上可以作为Env使用 及作为一个“虚拟机的环境” 此时需要有一个自定义的类来实现它
export type IEnv=Handlers;


//允许对象patch操作
function defaultValue<Interface,T extends Interface=Interface>(obj:Partial<Interface>,defaultV:T):Interface{
    //如果obj中有的就覆盖默认值
    return Object.assign(defaultV,obj);
}
//函数式路线
//自动填充以default实现
export function runner(handler:Partial<Handlers>){
    let a=defaultValue(handler,new DefaultHandlers());
    let ret=(func:ScopedFunction,...args)=>{
        return func(a)(...args)
    };
    let rett=ret as (typeof ret&{
        run:typeof ret;
    });
    rett.run=ret;
    return rett;
}
/**
 * 其中 如果handler作为一个可以修改的变量存在时，且在外部动态给定钩子函数时 在函数式层面上 是handlers语义
 * 如果直接给定一个内部有scope的，自定义的封闭的类，则在面向对象层面上，属于IEnv语义
 * runner(new DefaultHandlers()).run(xxxx)
 * runner(new xxxx())(xxxx)
 */

//handlers接口的默认实现，其实就是没有实现
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


interface AgentMinix<T>{
    //get set属性
    Agent:T;
}
type AgentSetted<T,A>=T&AgentMinix<A>;
function useAgent<T>()


