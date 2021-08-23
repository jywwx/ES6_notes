

///http.proxy=socks5://${hostip}:6153
//https.proxy=socks5://${hostip}:6153
/**
 * ES的背景 与版本 id707569772889uks
 */
//ECMAscript js 的语言标准 ES6 是js 的最新语法标准 目的是为了统一 js 在各大浏览器的统一运行  也就是说ECMAscript 是为了去处理浏览器的兼容
// ES6 是2016 发布 每年发布一个版本
// 特点 现有各个浏览器的各自代码运行之后 才有标准 不像 其他的现有标准 才有平台级的代码 成果
// 最新的版本 是在20年发布的 ES11
//2009 ES5  
// ES6 目标 让js 语言可以编写复杂的 大型应用程序 成为企业级的开发语言
// 常量  作用域 对象代理 异步处理 磊 继承  es6 在es5 的基础上针对这些功能进行了封装  
// 现在浏览器 的es6 的大部分功能现在还不支持 使用babel 针对es6 进行转译 转换成es5 运行
//es 的最近版本  ES5 2009 ES6 2015 es7 2016 es8 2019  
//即将发布的 ES11 2020年  每年发布一个版本
/**
 * ES的背景 与版本
 */



/**
 * ES6 的严格模式
 */
// ES5  的 严格模式  消除语法的不合理 不眼睛之处 减少怪异行为  消除代码的不安全运行  “use insrict”  也会为了新版本的ES做铺垫
// 1.变量必须要生命
// 2.禁止 this 只想window
//  
function student () {
    this.name="jyw";
    this.age ="28"
    this.school ="ucen"
}
s1 = new student()
s2 = student()  // 严格模式会报错   普通调用 没有返回 并且 为 window 意外创建了 三个全局的属性 不可取
// 3.严格模式下 对象的属性不能重名  在普通模式下时 会对象的属性的查找 与 赋值 返回的 都是 最后的哪一个属性 也就是覆盖  严格模式下 不可以
// 4.严格模式 只允许 在全局作用域的 头部 或者 函数作用域的头部 声明函数
// 5.严格模式下 新增了关键字 inplements,interface,let,package,privare,protected,public,static,yield
// 备注 面试的相关问题 至少要答出 4  到5 条
/**
 * ES6 的严格模式
 */





/**
 * ES6 对象
 */
// ES5扩展 针对对象进行了 扩展JSON 对象 与 字符串的相互转换
// Objecr.Create(prototyoe,[description]) 以指定对象 为原型  创建新的对象 第二个参数 是为创建出来的新的对象添加属性  并对此属性
// 进行描述
var a = {
    username:'admin',
    passward:'123456'
}
var b = Object.create(a)
console.logg(a)
console.log(b) // b 的指向原型的指针 _proto_  会指向a  面试问到的问题  创建一个没有原型的对象  Object.create(null)

//创建对象 原型指向 a 并且 在创建的时候  创建新的熟悉过  Object.create(o,{对象 描述 属性的对象//describe})

var c = Object.create(a,{mobile:{value:'19979188888',writable:true,configurable:true,enumerable:true}})
// writable  属性值 是否可修改
// configurable  属性 本身是否可删除
// enumerable  属性是否 可被迭代 是否可枚举
//延伸扩展  Obeject.defineProperty(target,{"属性名":{...属性描述}}) 
//监听对象的属性 Object.defineProperties(taeget,{"属性名",{get:function(){},set:function() {}}})
//名词区分  Object.defineProperty  为对象定义属性 prototype 原型  Object.defineProperties 监听对象的属性 
/**
 * ES6 对象
 */

/**
 * ES6 的变量的声明
 */
// var  全局声明变量 容易污染 作用域
 {var a =1} console.log(a)
 //ES6 的let 变量声明
 //ES6 的const 变量声明
 //ES6 let,const的暂时性死区  在let,const 声明之前是不能使用 变量的   如果是var 声明 是可以使用变量的 变量提升 值为undefined
// 要习惯使let 声明变量 房子var 声明带来的 污染全局空间
 //经典案例  创建闭包 每次循环时 保存i 的值  在函数返回之后 让i 缓存  不被垃圾处理机制 回收变量 

 // const 声明常量 声明之后 不变  是声明的变量的 指向内存的 指针不可改变  但是 如果声明的是一个对象 
 // 不可改变的是指向对象存储地址的指针不可改变  但是可以改变对象的属性值  如果是其他 字符串 就是完全不可以改变了
 // 常量 使用大写字母命名  驼峰法命名 来定义变量

 //let 和 const 的作用 重要作用
 //1.禁止重复声明变量
 //2.块级作用域
 //3.控制变量的修改
 // 扩展 暂时性死区
 var allBtn = document.querySelectorAll("button");
 for(var i =0;i<=10;i++) {
    allBtn[i-1].onclick= (function (index){
        return function () {
            console.log(index)
        }
    })(i)
 }

 /**
 * ES6 的变量的声明
 */


 /**
  * ES6 结构赋值
  */
 // ES6 新增语法糖  有效减少代码量级
 // 数组的结构赋值
 let [a,b,c="1"] = ["1",2,3]
 let [a,b,c="1"] = ["1",2,undefined]
 let [a,b,c="1"] = ["1",2,null]
// c?
// 对象的解构赋值
const  {a,b:{c},d} = {a:1,b:{c:3},d:4}
//数组解构是按照顺序进行赋值
//对象是按照 属性名称进行的解构赋值
//字符串解构 解构方式 类似数组 
// for of  与for in for 的区别  for for in 获取的是索引值并根据索引获取value值  for of 是直接获取value

 /**
  * ES6 结构赋值
  */
 let a = new Map()
 a.set("username","admin")
 a.set("password","123456")

 for (let [key,value] of a) {
    console.log(key) //?
    console.log(value) //?
 }
 // 模板字符串
 `${a}美元`
 /**
  * ES6 结构赋值
  */



 /**
  * ES6 的函数扩展
  */


/**
* ES6 的函数扩展
*/
// 箭头函数
// 函数参数 设置参数默认值
// 参数解构赋值
// 扩展运算符
// rest参数
// this绑定
// 尾调用
const param = {
    a:1,
    b:2
} 

fun = ({a,b}) => {

}
func = (a=0,b=1) => {

}
fund = (a,...rest) => { // ...是个数组

}


function abc() {
  setTimeout(function() {console.log(this)},1000)
  setTimeout(function() {console.log(this)}.bind(this),1000)
  setTimeout(()=> {console.log(this)})
}
//*************未掌握的知识点  call bind 的区别
// 箭头函数 语法简洁 this 指向是静态的 不会动态改变this 的指向 箭头函数的指向永远是指向函数定义的时候的最外层

// 参数默认值 案例分析
function add (a=0,b=0) {
    return a*b
}
function adds(x=4,y=x) {
  console.log(x)
  console.log(y)
}
adds() // 4,4

adds(3) // 3,3
var x =3
function tt(x=4,y=a) {
    
}
tt() // 3 ,undefined

//扩展运算符号
var arr = [1,2,3]
var arr2 = [...arr]
arr === arr2 // false 存储地址不一样
//扩展运算符 传参数

function getStars(a,b,c) {
    console.log(a)
    console.log(b)
    console.log(c)
}
getStars(arr[0],arr[1],arr[2])
getStars(...arr)


function fn(a,b,...args) {  // rest剩余参数 与 扩展运算符号 传参 的区别   剩余参数是在 函数调用时使用 扩展运算符传参 是在参数声明时调用
console.log(a)
console.log(b)
console.log(args)
}
fn(1,2,123,34,56,78)
/**
* ES6 的函数扩展
*/


/**
 * Promise
 */
// 同步异步  事件循环 保证js最高的执行效率
// Promise对象：代表未来某个将要发生的事件 通常是一个异步操作
// promise 可以将异步操作以同步的流程表达出来  解决回调地狱
// ES 使用多层嵌套 导致难以维护
// promise 的三个状态 pendind fullfilled rejected  并且状态不可逆
// 链式执行
new Promise((resolve,reject=> {})).then((res,reject) => {})

// Promise 封装http请求 简略
function getAJX(mehtods,url) {
    return new Promise((resolve,reject)=> {
        var xhr = new XMLHttpRequest()
        XMLHttpRequest.open(mehtods,url)
        xhr.onreadystatechange=function () {
            if (xhr.status ===200 && xhr.readyState ===4) {
                resolve(xhr)
            } else {
                reject(xhr)
            }
        }
        xhr.send()
    })
}

let promises =[promise1,promise2,promise3]
let pAll = Promise.all(promises)
pAll.then(res=> {

})
// Promise.all 所有都执行完了 才执行then
Promise.race()
//Promise.race() 多个执行 最先回调的 先执行回调
// Promise().resolve('').then(res=>{}) 创建一个成功的promise对象
// p1 = Promise().resolve('这是一个成功的promise对象')
// p1.then(res => {
//     console.log(res)
// })
// 同理 
// p2 =Promise().reject('这是一个错误拒绝的promise对象')
// p2.then(reject=> {

// })
// 异步操作 转同步表达
/**
 * Promise
 */


/**
 * ES7 async await  promise 的衍生
 * 写法更加简洁 逻辑更清晰
 */
function getPromise() {
    return new Promise((resolve,reject) => {
        setTimeout(function() {
            console.log("等待了2秒")
            resolve('执行了2秒等待')
        },2000)
    })
} 
function getPromisePro () {
    return new Promise((resolve,reject) =>{
        setTimeout(function() {
            console.log("执行了3秒的等待")
            resolve('')
        },3000)
    })
}
function Promise4 () {
   return new Promise((resolve,reject) => {
       reject('报错了')
   })
}
const P1 = getPromise()
P1.then(res=> {
 console.log(res, "sadas")
})
const P2 = getPromisePro()
P2.then(res=> {
 console.log(res,"32323")
})
 async function testAsync () {
    // 同步执行
    // 回调函数 有回调地狱
    // promise 通过then解决了回调地狱 但是还是有then 的链式回调
    // async await 就是同步式执行
    try {
        const result1 = await getPromise()
        const result2 = await getPromisePro()
        const result3 = await Promise4()
        console.log(result1)
        console.log(result2)
    } catch(error) {
        console.log(error,"////")
    }
      // async 不用写then 的链式 回调  代码为同步执行 代码看起来更加简洁清晰
      // 是promise 的一个衍生 
      //prmose 错误捕获只能通过 reject 层层 在链式回调中传递
      // async await  可以用try catch 进行错误的捕获
      // gennerator 通过yield 可以控制异步流程
      // async await 是promise的衍生 换句话说 await 处理的是一个promise 对象 错误捕获  可以在最外层 try catch 解决了 promise 的层层回调传递
      // promise 将异步的操作 用同步的流程表达出来
      //promise.all 等所有的完成之后执行回调
      // promise.reace 竞争
      // promise 派生 也就是继承

      class LcPrmose extends Promise {
          success(resolve,reject) {
            this.then(resolve,reject)
          }
          fail(reject) {
              this.catch(reject)
          }
      }

 }
 function getAJXy(mehtods,url) {
    return new Promise((resolve,reject)=> {
        var xhr = new XMLHttpRequest()
        XMLHttpRequest.open(mehtods,url)
        xhr.onreadystatechange=function () {
            if (xhr.status ===200 && xhr.readyState ===4) {
                resolve(xhr)
            } else {
                reject(xhr)
            }
        }
        xhr.send()
    })
}
async function test () {
    const response = await getAJXy('GET',{data:'//'})
    console.log(response,"async await 本质上是等待一个promise 的执行")
}

 async function httpPromise (methods,params) {
     const https = new XMLHttpRequest()
 }


 const musicList = getAJXy('Get',"getList")

 musicList.forEach(item =>{
   fn(item.id)
    const fn = async (id) => {
        await getAJXy('get',id)
    }
    //会优先完成循环
 })
 
 /**
 * ES7 async await  promise 的衍生
 */



 /**
  * 迭代器与生成器
  */
  const arr = [0,1,2,3,4,5,6,7,8,9,10,11]

  function createIterator () {
      var num = 0

      return {
          pre1:num,
          pre2:num,
          next:function() {
              if (num = 0) {
                 this.pre1 = 1;
                 return {
                     done:false,
                     value:num
                 }
              } else {
                  temp = this.pre1
                  result = this.pre2 = this.pre1
                  this.pre1 = result
                  return 
              }
          }
      }
  }



  // 可迭代对象  生成器 generator是用来创建 迭代对象的 
// 为什么 要用yield  因为性能  如果普通循环  一次函数运行之后 返回 下次在想取值又得重新 从头开始循环 迭代器 通过单链表 进行每次循环结果的暂存 能够
// 大幅提高性能 并且更加简洁 yield 是中断了函数的执行
// 节约内存占用空间
 /**
  * 迭代器与生成器
  */


 /**
  * symbol
  */
 //es6 的一种新的原始数据类型symbol  表示独一无二的值 第七种数据类型
 // undefined null bool number string symbol  基本数据类型
 // object array 复杂数据类型
 // symbol 对应的值是唯一的 不能与其他数据类型 进行计算
 // for in  for of 不能遍历symbol 属性
 /**
  * symbol
  */



 /**
  *可迭代对象
  */
// es6 中 数组 set map 字符串 都是可迭代对象
// .entries() 返回 可迭代对象 Object map .entries() 返回可迭代对象
// set 类似于数组 但是值之间 不可重复
// map 存储的是键值对 
// map 也是有entries 方法 返回 可迭代对象
// nodeList dom 节点数组 dom 集合  iterator  也是可迭代的
// 针对于普通的对象 可以通过 调用entrier 方法 返回迭代器  也可以给对象 添加一个 Iterator 方法  对象也可以直接进行遍历
const newMap = new Map()
newMap.set('name','jiangjingyu')
for (let [key,value] of newMap) {
    console.log(key,value)
}

const arrays = ['1',2,3,4,5]
const A = arrays.entries()
const B = arrays.keys()
console.log(A)
for (let value of A) {
  console.log(value)
  // [0,'1']
  // [1,2]
  // [2,3]
  // [3,4]
  // [4,5]
}


function *abc () {
    yield 1;
    yield 2;
    yield 3;
}

const tt = abc()
console.log(tt.next(),"//")

// 生成器嵌套
var aIterator = function *() {
   yield 1;
   yield 2;
   yield 3;
}
var bIterator = function *() {
   yield 4;
   yield 5;
   yield 6;
}
var cIterator = function *() {
  yield *aIterator()
  yield *bIterator()
}

var c = cIterator()

for (let value of c) {
    console.log(value,"ss")
}


/// 一般迭代器要调用next 才能循环完内容 构造一个任务执行器 会自动执行完流程
// 有规律的数组 都可以用 生成器 生成数组  不用占用内存 提高效率  时间换空间  大的数组
function *aIterator () {
    yield 1;
    yield 3;
    yield 5;
    yield 7;
    yield 9;
}
function run(fnIter) {
    let iterator = fnIter()
     while(true) {
        let {done,value} = iterator()
        console.log(value,done)
        if (done) {
           break
        }
     }
}

// 迭代器传参数
//
 /**
  *可迭代对象
  */


  /***
   * ES6 Proxy 代理
   */

  /**
   * 
   */
 
