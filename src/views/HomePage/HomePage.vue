<template>
  <div class="hello" >
     jsBridge
     <ul style="fontSize:30px;">
       <li @click="onClickapSetTitle">apSetTitle</li>
       <li @click="onClicksetPhysical">setPhysical</li>
     </ul>
  </div>
</template>

<script>
import { apSetTitle } from '@/module/appbridge'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    onClickapSetTitle() {
      apSetTitle('烟祭')
    },
    onClicksetPhysical() {
      setPhysical(1)
    }
  }
}
</script>

