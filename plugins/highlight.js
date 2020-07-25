import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark-reasonable.css'
import Vue from 'vue'

Vue.directive('highlight', (el) => {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})
