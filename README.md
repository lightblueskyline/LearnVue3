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

## 快速上手

```ps
npm create vue@latest
# 選項 -> NO
# 進入項目文件夾
npm install
npm run dev
npm build
```

## 模板語法

```csharp
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
