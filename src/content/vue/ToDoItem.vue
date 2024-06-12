
<template>
  <div id="todo-item">
    <input type="checkbox" id="todo-item" checked="false" />
    <label for="todo-item">{{ label }}</label>
  </div>
</template>


<script>

export default {
  data() {
    return {
      label: '我是vue组件,todo-item',
    }
  },
}
</script>