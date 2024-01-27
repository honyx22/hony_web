<template>
    <div>
        <p class="main">Who are we?</p>
        <p class="submain">We are we</p>

        <div id="app">
          <button @click="count++">
            Count is: {{ count }}
          </button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'WhoView',
  props: {
    msg: String
  },

  data() {
    return {
      count: 0
    }
  },
}
</script>

<style scoped>
.main {
    font-size: 30px;
}
.submain {
    font-size: 20px;
}
</style>