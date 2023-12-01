import Vue from 'vue'
import DogressBar from './DogressBar.vue'

new Vue({
  render: (h) => h(DogressBar, { props: { score: 2, maxScore: 5 }})
}).$mount('#app')
