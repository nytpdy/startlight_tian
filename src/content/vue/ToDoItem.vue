
<template>
  <div id ="app">
    <input type="checkbox" id="todo-item" checked="false" />
    <label for="todo-item">{{ label }}</label>
  </div>
</template>


<script>

export default {
  data() {
    return {
      label: 'hello world',
    }
  },
}
</script>