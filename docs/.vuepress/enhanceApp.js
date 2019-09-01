import Vue from 'vue'
import Element from 'element-ui'
import VueParticles from 'vue-particles'
import 'element-ui/lib/theme-chalk/index.css'
// import 'element-ui/lib/style/theme/index.css'
import './public/style/theme/index.css'

export default ({
  Vue,
}) => {
  Vue.use(Element, VueParticles)
}