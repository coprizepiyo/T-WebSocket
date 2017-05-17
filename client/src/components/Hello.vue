<template>
  <div class="hello">
    <input @keyup.13="sub" type="text" v-model="content">
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      content: ''
    }
  },
  methods: {
    sub: function () {
      this.$socket.emit('message', this.content)
    }
  },
  sockets: {
    connect: function () {
      console.log('socket connected')
    },
    customEmit: function (val) {
      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
