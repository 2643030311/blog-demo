# Vue 复习

## 1.vue 前端js框架
```markdown
	渐进式 Javascript 框架
	Vue 是一个javascript 框架 js 简化页面js操作
	后端人员：后端人员开发页面时通过少量的js 操作（通过少量的Dom 操作）完成相应的功能
	前后端系统分离：核心技术
	系统： 后端代码 web 页面
	系统： 后端系统（rest 接口） springboot --- json --- vue vue component router cli vuex
```
## 2.vue 第一个程序
```markdown
	a.下载vue
	b.页面引入vue.js
	c.案例
```
​		**总结**
```markdown
	（1）vue实例（对象）中el属性： 代表Vue 的作用范围 日后在Vue的作用范围内都可以使用Vue的语法
	（2）vue实例（对象）中data属性：用来给Vue 实例绑定一些相关数据，绑定的数据可以通过{{变量名}}在Vue作用范围内去除
	（3）在使用{{}}进行获取data中数据时,可以在{{}}中书写表达式,运算符,调用相关方法,以及逻辑运算等
	（4）el属性中可以书写任意的CSS选择器[jquery选择器],但是在使用Vue开发是推荐使用 id选择器  注意: el属性值不能指定body或html标签
```
## 3.data数据指令
```markdown
{{属性名}}:  {{msg}} 
	v-text:  1.覆盖标签原始内容  2.避免插值闪烁      以文本形式渲染
	v-html:  1.覆盖标签原始内容  2.将获取内容中含有html进行解析之后再渲染到页面中 

​	共同点: 用来将vue实例中data中定义数据获取并展示到页面中
```
```html
	<span>{{属性名}}</span>
	<span v-text="属性名">
    <span v-html="属性名">
```
## 4.事件绑定 v-on 简化 @
```markdow
	a.事件三要素: 
	1.事件源 发送动作html标签    
	2.事件  发送特定动作(click、dblclick、mouseover 、mouseout、)  
	3.事件处理程序  执行函数  funtion(){}
```
```html
<button v-on:click="clickMe(1,...)" @click="clickMe">点击</button>
```
```javascript
new Vue({
	el:"",
	data:{
		msg:""
	},
	methods:{
		clickMe:function(id){
			this.msg;//获取vue实例中数据
		},
		clickMe(id){ //简化写法

		}
	}
});
```
## 5. v-if 和v-show 展示和隐藏

​	v-if:    通过操作dom树用来控制是否展示隐藏    
​	v-show:  通过css中display属性控制展示和隐藏  频繁控制状态推荐

```html
<span v-if="false" v-show="true">你好</span>
```

## 6.v-bind指令  简化写法  :

​	作用: 用来讲html标签属性交给vue实例进行管理
​	好处: 通过动态动态修改vue实例中data属性,达到修改html标签属性效果

```html
<img v-bind:src="src"  :title="title">
<button @click="changeSrc">点击更换图片</button>
new Vue({
	el...,
	data:{
		src:"1.jpg",
		title:"我是图片"
	},
	methods:{
		changeSrc(){
			this.src = "2.jpg";
		}
	}
})
```

## 7.v-for 循环指令  遍历的指令

```html
<tr v-for="(user,index) in users"  :key="user.id">
	<td>{{index+1}}</td>
	<td>{{user.id}}</td>
	<td>{{user.name}}</td>
	<td>{{user.age}}</td>
</tr>

new Vue({
	el...,
	data:{
		users:[{id:1,name:"小陈",age:23,....},{id:1,name:"小陈",age:23,....}]
	}
});
```

## 8.v-model   中双向绑定机制

作用:   用来讲html标签中value属性绑定给vue实例的  input select  ..  主要用在form标签中

MVVM
Model  <---->  ViewModel(监听) <---->  View

```html
<input type="text" v-model="msg" /> 

new Vue({
	el....,
	data:{
		msg:"百知教育"
	},
});
```

## 9.事件修饰符

​	.stop    用来停止事件冒泡机制

```html
	<div @click="test1">
		<div @click.stop="test2">

		</div>

	</div>
.prevent 阻止标签默认行为
	<a href="www.baizhi.com" @click.prevent="test3">点我快乐</a>
	<a href="javascript:;" @click.prevent="test3">点我快乐</a>

.self    独自 只触发自身的事件
	<div @click.self="test1">

		<div @click="test2">

		</div>

		<div @click="test3">

		</div>

		<div @click="test4">

		</div>

	</div>

.once    一次
	<div @click.once.self.stop="test1"></div>

注意:事件修饰符可以连用
```

## 10.按键修饰符

​	.enter
​	.tab
​	.delete (捕获“删除”和“退格”键)
​	.esc
​	.space
​	.up
​	.down
​	.left
​	.right

```html
<input @keyup.delete.up.down="test2">
```

## 11.axios 

​	作用: 用来在vue中发送异步请求到后端系统,并将请求响应的json格式数据返回给vue
​	使用: 下载axiosjs并在页面中进行引入

具体语法  rest  get  post  put  delete  patch ....

```js
	axios.get("url?key=value&key1=value1").then(function(res){
		res.data;//返回json格式数据
	}).catch(function(err){
		err//出现错误执行函数
	});
	axios.get("url?key=value&key1=value1").then(res=>{
		res.data //返回json格式数据
	}).catch(err=>{
		err;//错误信息
	});
		axios.post("url",{id:1,"name":"小陈"...}).then(res=>{  //后端系统接口接收参数时必须使用@RequestBody进行接收
		res.data;
	});
```



## 12.vue生命周期

(1）初始化阶段
 ```
	beforeCreate(){}  //执行这个函数vue仅仅完成自身生命周期函数以及事件初始化
	created(){}       //执行这个函数vue实例已经完成data methods computed compoent......
	beforeMount(){}	  //执行这个函数将el执行作用范围编译为vue模板 此时页面中还是vue模板    {{msg}}
	mounted(){}       //执行这个函数时vue会创建虚拟dom替换el编译模板此时页面中已经渲染好的数据  
```

（2）运行阶段
```
	beforeUpdate(){}//当vue实例中data属性发生变化,会触发这个函数执行,这个函数执行时data中数据变化,页面中数据还是原始数据
	updated(){}     //执行这个函数时候vue实例中data数据和页面中数据保持一致
```

（3）销毁阶段
```
	beforeDestroy(){} //当vue实例销毁之后触发这个函数
	destroyed(){}     //执行这个函数vue实例彻底销毁 监听机制  事件监听...
```

## 13.vue中组件componet 

vue推荐开发方式: 一个系统一张页面只有一个Vue根实例   

单页面应用: SPA  Singleton Page Web Application    index.html  Vue  用户管理 学生管理 教师管理

组件作用: 用来减少Vue实例对象中代码量,日后在使用Vue开发过程中,可以根据 不同业务功能将页面中划分不同的多个组件,然后由多个组件去完成整个页面的布局,便于日后使用Vue进行开发时页面管理,方便开发人员维护。

```js
const login = {
			template:"<div><h1>用户管理</h1></div>",
			data(){
				return {}
			},
			methods:{

			},
			.....
		};

const student = {....};

new Vue({
	el...
	data:{},
	methods:{},
	computed:{},
	component:{
		login,//注册组件
		student,//注册组件

	}
});
```


```html
使用组件:  <login></login> <student></student> ....
```

14.vue中router 概念
	作用: 用来根据不同请求路径进行不同组件展示

```js
#/login      <login></login>
#/student    <student></student> ....
```

使用: 引入vue router js文件

```js
//声明组件模板
const login = {
  template:'<h1>登录</h1>'
};

const student = {
  template:'<h1>学生管理</h1>'
};

//创建路由对象
const router = new VueRouter({
	routes:[
		{path:'/login',component:login},
		{path:'/student',component:studnet},
	]
});

//注册路由到Vue
new Vue({
	el....
	router,//注册路由
});
```


```html
//显示路由组件
<div id="app">
	<a href="#/login">登录</a>
	<a href="#/student">学生管理</a>
	<router-link to="/login">登录</router-link>
	<!--显示路由组件-->
	<router-view></router-view>
</div>
```
