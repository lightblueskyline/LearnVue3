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

## [响应式基础](https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html)

```csharp
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

```csharp
/**
[推荐使用计算属性来描述依赖响应式状态的复杂逻辑]
<script setup>
import { reactive, computed } from 'vue'
const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})
// 一个计算属性 ref
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})
</script>
<template>
  <p>Has published books:</p>
  <span>{{ publishedBooksMessage }}</span>
</template>
更新。

可写计算属性 (计算属性默认是只读的)
<script setup>
import { ref, computed } from 'vue'
const firstName = ref('John')
const lastName = ref('Doe')
const fullName = computed({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value
  },
  // setter
  set(newValue) {
    // 注意：我们这里使用的是解构赋值语法
    [firstName.value, lastName.value] = newValue.split(' ')
  }
})
</script>
 */
```

## [Class 与 Style 绑定](https://cn.vuejs.org/guide/essentials/class-and-style.html)

```csharp
/**
绑定 HTML class
:class (v-bind:class 的缩写)
<div :class="{ active: isActive }"></div>
active 是否存在取决于数据属性 isActive 的真假值。
const isActive = ref(true)
const hasError = ref(false)
<div
  class="static"
  :class="{ active: isActive, 'text-danger': hasError }"
></div>
渲染结果 -> <div class="static active"></div>
绑定数组
const activeClass = ref('active')
const errorClass = ref('text-danger')
<div :class="[activeClass, errorClass]"></div>
渲染结果 -> <div class="active text-danger"></div>

绑定内联样式
绑定对象
const activeColor = ref('red')
const fontSize = ref(30)
<div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
<div :style="{ 'font-size': fontSize + 'px' }"></div>
const styleObject = reactive({
  color: 'red',
  fontSize: '13px'
})
<div :style="styleObject"></div>
绑定数组
<div :style="[baseStyles, overridingStyles]"></div>
样式多值 (可以对一个样式属性提供多个 (不同前缀的) 值)
<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
 */
```

## [条件渲染](https://cn.vuejs.org/guide/essentials/conditional.html)

```csharp
/**
v-if (表达式返回真值时才被渲染)
<h1 v-if="awesome">Vue is awesome!</h1>

v-else
<button @click="awesome = !awesome">Toggle</button>
<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>

v-else-if
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>

v-show (按条件显示一个元素)
(不同之处在于 v-show 会在 DOM 渲染中保留该元素；v-show 仅切换了该元素上名为 display 的 CSS 属性。)
<h1 v-show="ok">Hello!</h1>
 */
```

## [列表渲染](https://cn.vuejs.org/guide/essentials/list.html)

```csharp
/**
v-for (使用 item in items 形式的特殊语法)
const items = ref([{ message: 'Foo' }, { message: 'Bar' }])
<li v-for="item in items">
  {{ item.message }}
</li>
---
const parentMessage = ref('Parent')
const items = ref([{ message: 'Foo' }, { message: 'Bar' }])
<li v-for="(item, index) in items">
  {{ parentMessage }} - {{ index }} - {{ item.message }}
</li>
---
<li v-for="item in items">
  <span v-for="childItem in item.children">
    {{ item.message }} {{ childItem }}
  </span>
</li>
--- 也可以使用 of 作为分隔符来替代 in
<div v-for="item of items"></div>

v-for 与对象 (遍历的顺序会基于对该对象调用 Object.keys() 的返回值来决定。)
const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})
<ul>
  <li v-for="value in myObject">
    {{ value }}
  </li>
</ul>
<li v-for="(value, key) in myObject">
  {{ key }}: {{ value }}
</li>
<li v-for="(value, key, index) in myObject">
  {{ index }}. {{ key }}: {{ value }}
</li>

在 v-for 里使用范围值 (注意此处 n 的初值是从 1 开始而非 0。)
<span v-for="n in 10">{{ n }}</span>

<template> 上的 v-for
<ul>
  <template v-for="item in items">
    <li>{{ item.msg }}</li>
    <li class="divider" role="presentation"></li>
  </template>
</ul>

v-for 与 v-if (v-if 比 v-for 的优先级更高)
不可處於同級，應當如此書寫
<template v-for="todo in todos">
  <li v-if="!todo.isComplete">
    {{ todo.name }}
  </li>
</template>

通过 key 管理状态 (为了给 Vue 一个提示，以便它可以跟踪每个节点的标识，从而重用和重新排序现有的元素，你需要为每个元素对应的块提供一个唯一的 key attribute)
<div v-for="item in items" :key="item.id">
  <!-- 内容 -->
</div>
<template v-for="todo in todos" :key="todo.name">
  <li>{{ todo.name }}</li>
</template>

组件上使用 v-for
<MyComponent v-for="item in items" :key="item.id" />

数组变化侦测 -> 变更方法 (push(), pop(), shift(), unshift(), splice(), sort(), reverse())
filter(), concat(), slice() 會返回新數組
items.value = items.value.filter((item) => item.message.match(/Foo/))

展示过滤或排序后的结果
const numbers = ref([1, 2, 3, 4, 5])
const evenNumbers = computed(() => {
  return numbers.value.filter((n) => n % 2 === 0)
})
<li v-for="n in evenNumbers">{{ n }}</li>
---
const sets = ref([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10]
])
function even(numbers) {
  return numbers.filter((number) => number % 2 === 0)
}
<ul v-for="numbers in sets">
  <li v-for="n in even(numbers)">{{ n }}</li>
</ul>
[在计算属性中使用 reverse() 和 sort() 的时候务必小心！这两个方法将变更原始数组，计算函数中不应该这么做。请在调用这些方法之前创建一个原数组的副本]
- return numbers.reverse()
+ return [...numbers].reverse()
 */
```

## [事件处理](https://cn.vuejs.org/guide/essentials/event-handling.html)

```csharp
/**
使用 v-on 指令 (简写为 @) 来监听 DOM 事件 (v-on:click="handler" 或 @click="handler")
内联事件处理器 (事件被触发时执行的内联 JavaScript 语句 (与 onclick 类似))
const count = ref(0)
<button @click="count++">Add 1</button>
<p>Count is: {{ count }}</p>
方法事件处理器 (一个指向组件上定义的方法的属性名或是路径)
const name = ref('Vue.js')
function greet(event) {
  alert(`Hello ${name.value}!`)
  // `event` 是 DOM 原生事件
  if (event) {
    alert(event.target.tagName)
  }
}
<!-- `greet` 是上面定义过的方法名 -->
<button @click="greet">Greet</button>

在内联处理器中调用方法
function say(message) {
  alert(message)
}
<button @click="say('hello')">Say hello</button>
<button @click="say('bye')">Say bye</button>

在内联事件处理器中访问事件参数
[传入一个特殊的 $event 变量，或者使用内联箭头函数]
<!-- 使用特殊的 $event 变量 -->
<button @click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button>
<!-- 使用内联箭头函数 -->
<button @click="(event) => warn('Form cannot be submitted yet.', event)">
  Submit
</button>
function warn(message, event) {
  // 这里可以访问原生事件
  if (event) {
    event.preventDefault()
  }
  alert(message)
}

事件修饰符 [.stop, .prevent, .self, .capture, .once, .passive]
<!-- 单击事件将停止传递 -->
<a @click.stop="doThis"></a>
<!-- 提交事件将不再重新加载页面 -->
<form @submit.prevent="onSubmit"></form>
<!-- 修饰语可以使用链式书写 -->
<a @click.stop.prevent="doThat"></a>
<!-- 也可以只有修饰符 -->
<form @submit.prevent></form>
<!-- 仅当 event.target 是元素本身时才会触发事件处理器 -->
<!-- 例如：事件处理器不来自子元素 -->
<div @click.self="doThat">...</div>
[.capture、.once 和 .passive 修饰符与原生 addEventListener 事件相对应]
<!-- 添加事件监听器时，使用 `capture` 捕获模式 -->
<!-- 例如：指向内部元素的事件，在被内部元素处理前，先被外部处理 -->
<div @click.capture="doThis">...</div>
<!-- 点击事件最多被触发一次 -->
<a @click.once="doThis"></a>
<!-- 滚动事件的默认行为 (scrolling) 将立即发生而非等待 `onScroll` 完成 -->
<!-- 以防其中包含 `event.preventDefault()` -->
<div @scroll.passive="onScroll">...</div>
[.passive 修饰符一般用于触摸事件的监听器，可以用来改善移动端设备的滚屏性能]

按键修饰符
<!-- 仅在 `key` 为 `Enter` 时调用 `submit` -->
<input @keyup.enter="submit" />
KeyboardEvent.key -> https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values
<!-- 仅会在 $event.key 为 'PageDown' 时调用事件处理 -->
<input @keyup.page-down="onPageDown" />
按键别名 [.enter, .tab, .delete(捕获“Delete”和“Backspace”两个按键), .esc, .space, .up, .down, .left, .reght]
系统按键修饰符 [.ctrl, .alt, .shift, .meta]
<!-- Alt + Enter -->
<input @keyup.alt.enter="clear" />
<!-- Ctrl + 点击 -->
<div @click.ctrl="doSomething">Do something</div>
.exact 修饰符
<!-- 当按下 Ctrl 时，即使同时按下 Alt 或 Shift 也会触发 -->
<button @click.ctrl="onClick">A</button>
<!-- 仅当按下 Ctrl 且未按任何其他键时才会触发 -->
<button @click.ctrl.exact="onCtrlClick">A</button>
<!-- 仅当没有按下任何系统按键时触发 -->
<button @click.exact="onClick">A</button>
鼠标按键修饰符 [.left, .right, .middle]
 */
```

## [表单输入绑定](https://cn.vuejs.org/guide/essentials/forms.html)

```csharp
/**
<input
  :value="text"
  @input="event => text = event.target.value">
v-model 指令帮我们简化了这一步骤
<input v-model="text">

基本用法-文本
<p>Message is: {{ message }}</p>
<input v-model="message" placeholder="edit me" />
基本用法-多行文本 [注意在 <textarea> 中是不支持插值表达式的。请使用 v-model 来替代]
<span>Multiline message is:</span>
<p style="white-space: pre-line;">{{ message }}</p>
<textarea v-model="message" placeholder="add multiple lines"></textarea>
基本用法-复选框
<input type="checkbox" id="checkbox" v-model="checked" />
<label for="checkbox">{{ checked }}</label>
也可以将多个复选框绑定到同一个数组或集合的值
const checkedNames = ref([])
<div>Checked names: {{ checkedNames }}</div>
<input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
<label for="jack">Jack</label>
<input type="checkbox" id="john" value="John" v-model="checkedNames">
<label for="john">John</label>
<input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
<label for="mike">Mike</label>
基本用法-单选按钮
<div>Picked: {{ picked }}</div>
<input type="radio" id="one" value="One" v-model="picked" />
<label for="one">One</label>
<input type="radio" id="two" value="Two" v-model="picked" />
<label for="two">Two</label>
基本用法-选择器
<div>Selected: {{ selected }}</div>
<select v-model="selected">
  <option disabled value="">Please select one</option>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>
<div>Selected: {{ selected }}</div>
<select v-model="selected" multiple>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>
const selected = ref('A')
const options = ref([
  { text: 'One', value: 'A' },
  { text: 'Two', value: 'B' },
  { text: 'Three', value: 'C' }
])
<select v-model="selected">
  <option v-for="option in options" :value="option.value">
    {{ option.text }}
  </option>
</select>
<div>Selected: {{ selected }}</div>

值绑定-复选框 (true-value 和 false-value 是 Vue 特有的 attributes，仅支持和 v-model 配套使用)
<input
  type="checkbox"
  v-model="toggle"
  true-value="yes"
  false-value="no" />
<input
  type="checkbox"
  v-model="toggle"
  :true-value="dynamicTrueValue"
  :false-value="dynamicFalseValue" />
值绑定-单选按钮
<input type="radio" v-model="pick" :value="first" />
<input type="radio" v-model="pick" :value="second" />
值绑定-选择器选项
<select v-model="selected">
  <!-- 内联对象字面量 -->
  <option :value="{ number: 123 }">123</option>
</select>

修饰符
.lazy (添加 lazy 修饰符来改为在每次 change 事件后更新数据)
<!-- 在 "change" 事件后同步更新而不是 "input" -->
<input v-model.lazy="msg" />
.number (用户输入自动转换为数字。如果该值无法被 parseFloat() 处理，那么将返回原始值。number 修饰符会在输入框有 type="number" 时自动启用)
<input v-model.number="age" />
.trim (自动去除用户输入内容中两端的空格)
<input v-model.trim="msg" />
 */
```

## [生命周期](https://cn.vuejs.org/guide/essentials/lifecycle.html)

```csharp
/**
(onMounted onUpdated onUnmounted)
<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  console.log(`the component is now mounted.`)
})
</script>
 */
```
