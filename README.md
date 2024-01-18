# Vue3 學習

## 無題

```ps
git init
git add README.md
# git add .
git commit -m "first commit"
# git branch -M main
git remote add origin https://github.com/lightblueskyline/LearnVue3.git
git push -u origin master
```

## [快速上手](https://cn.vuejs.org/guide/quick-start.html)

```ps
npm create vue@latest
# 選項 -> NO
# 進入項目文件夾
npm install
npm run dev
npm build
```

## [模板語法](https://cn.vuejs.org/guide/essentials/template-syntax.html)

```js
/**
文本插值
<span>Message: {{ msg }}</span>

Attribute 绑定
響應式的綁定一個 attribute 應該使用 v-bind 指令
<div v-bind:id="dynamicId"></div>
簡寫
<div :id="dynamicId"></div>

布尔型 Attribute (依据 true / false 值来决定 attribute 是否应该存在于该元素上)
<button :disabled="isButtonDisabled">Button</button>

动态绑定多个值
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper'
}
通过不带参数的 v-bind，你可以将它们绑定到单个元素上
<div v-bind="objectOfAttrs"></div>

使用 JavaScript 表达式 (在文本插值中 (双大括号) / 在任何 Vue 指令 (以 v- 开头的特殊 attribute) attribute 的值中)
{{ number + 1 }}
{{ ok ? 'YES' : 'NO' }}
{{ message.split('').reverse().join('') }}
<div :id="`list-${id}`"></div>

调用函数
<time :title="toTitleDate(date)" :datetime="date">
  {{ formatDate(date) }}
</time>

指令 Directives (一个指令的任务是在其表达式的值变化时响应式地更新 DOM)
<p v-if="seen">Now you see me</p>

参数 Arguments
[用 v-bind 指令来响应式地更新一个 HTML attribute]
<a v-bind:href="url"> ... </a>
<!-- 简写 -->
<a :href="url"> ... </a>
v-on 指令，監聽 DOM 事件
<a v-on:click="doSomething"> ... </a>
<!-- 简写 -->
<a @click="doSomething"> ... </a>

动态参数 (需要包含在一对方括号内)
<a v-bind:[attributeName]="url"> ... </a>
<!-- 简写 -->
<a :[attributeName]="url"> ... </a>
将一个函数绑定到动态的事件名称上
<a v-on:[eventName]="doSomething"> ... </a>
<!-- 简写 -->
<a @[eventName]="doSomething">

修饰符 Modifiers (修饰符是以点开头的特殊后缀，表明指令需要以一些特殊的方式被绑定)
例如 .prevent 修饰符会告知 v-on 指令对触发的事件调用 event.preventDefault()
<form @submit.prevent="onSubmit">...</form>
 */
```

## [响应式基础](https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html)

```js
/**
声明响应式状态 ref()
import { ref } from 'vue'
const count = ref(0)
ref() 接收参数，并将其包裹在一个带有 .value 属性的 ref 对象中返回
const count = ref(0)
console.log(count) // { value: 0 }
console.log(count.value) // 0
count.value++
console.log(count.value) // 1
[注意，在模板中使用 ref 时，我们不需要附加 .value]
<script setup>
import { ref } from 'vue'
const count = ref(0)
function increment() {
  count.value++
}
</script>
<template>
  <button @click="increment">
    {{ count }}
  </button>
</template>

深层响应性
import { ref } from 'vue'
const obj = ref({
  nested: { count: 0 },
  arr: ['foo', 'bar']
})
function mutateDeeply() {
  // 以下都会按照期望工作
  obj.value.nested.count++
  obj.value.arr.push('baz')
}
 */
```

## [计算属性](https://cn.vuejs.org/guide/essentials/computed.html)

```js
/**
 * [推荐使用计算属性来描述依赖响应式状态的复杂逻辑]
 * <script setup>
 * import { reactive, computed } from 'vue'
 * const author = reactive({
 *   name: 'John Doe',
 *   books: [
 *     'Vue 2 - Advanced Guide',
 *     'Vue 3 - Basic Guide',
 *     'Vue 4 - The Mystery'
 *   ]
 * })
 * // 一个计算属性 ref
 * const publishedBooksMessage = computed(() => {
 *   return author.books.length > 0 ? 'Yes' : 'No'
 * })
 * </script>
 * <template>
 *   <p>Has published books:</p>
 *   <span>{{ publishedBooksMessage }}</span>
 * </template>
 * Vue 的计算属性会自动追踪响应式依赖。publishedBooksMessage 依赖于 author.books，所以当 author.books 改变时，publishedBooksMessage 会同时更新。
 * 
 * 可写计算属性 (计算属性默认是只读的)
 * <script setup>
 * import { ref, computed } from 'vue'
 * const firstName = ref('John')
 * const lastName = ref('Doe')
 * const fullName = computed({
 *   // getter
 *   get() {
 *     return firstName.value + ' ' + lastName.value
 *   },
 *   // setter
 *   set(newValue) {
 *     // 注意：我们这里使用的是解构赋值语法
 *     [firstName.value, lastName.value] = newValue.split(' ')
 *   }
 * })
 * </script>
 */
```

## [Class 与 Style 绑定](https://cn.vuejs.org/guide/essentials/class-and-style.html)

```js
/**
 * 绑定 HTML class
 * :class (v-bind:class 的缩写)
 * <div :class="{ active: isActive }"></div>
 * active 是否存在取决于数据属性 isActive 的真假值。
 * const isActive = ref(true)
 * const hasError = ref(false)
 * <div
 *   class="static"
 *   :class="{ active: isActive, 'text-danger': hasError }"
 * ></div>
 * 渲染结果 -> <div class="static active"></div>
 * 绑定数组
 * const activeClass = ref('active')
 * const errorClass = ref('text-danger')
 * <div :class="[activeClass, errorClass]"></div>
 * 渲染结果 -> <div class="active text-danger"></div>
 * 
 * 绑定内联样式
 * 绑定对象
 * const activeColor = ref('red')
 * const fontSize = ref(30)
 * <div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
 * <div :style="{ 'font-size': fontSize + 'px' }"></div>
 * const styleObject = reactive({
 *   color: 'red',
 *   fontSize: '13px'
 * })
 * <div :style="styleObject"></div>
 * 绑定数组
 * <div :style="[baseStyles, overridingStyles]"></div>
 * 样式多值 (可以对一个样式属性提供多个 (不同前缀的) 值)
 * <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
 */
```

## [条件渲染](https://cn.vuejs.org/guide/essentials/conditional.html)

```js
/**
 * v-if (表达式返回真值时才被渲染)
 * <h1 v-if="awesome">Vue is awesome!</h1>
 * 
 * v-else
 * <button @click="awesome = !awesome">Toggle</button>
 * <h1 v-if="awesome">Vue is awesome!</h1>
 * <h1 v-else>Oh no 😢</h1>
 * 
 * v-else-if
 * <div v-if="type === 'A'">
 *   A
 * </div>
 * <div v-else-if="type === 'B'">
 *   B
 * </div>
 * <div v-else-if="type === 'C'">
 *   C
 * </div>
 * <div v-else>
 *   Not A/B/C
 * </div>
 * 
 * v-show (按条件显示一个元素)
 * (不同之处在于 v-show 会在 DOM 渲染中保留该元素；v-show 仅切换了该元素上名为 display 的 CSS 属性。)
 * <h1 v-show="ok">Hello!</h1>
 */
```
