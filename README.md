# 说明
新范式，用来写DSL嵌入
# 基本环境范式
```ts
function({emit,output,get}){
  //can be provide by using Dialog or Console etc.
  let a=get("com.gmono.testform");
  //do sth...
  output(b)
  emit("newevent",b)
}
```