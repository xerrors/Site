import Vue from 'vue'
import Element from 'element-ui'
import VueParticles from 'vue-particles'
import 'element-ui/lib/theme-chalk/index.css'
import './public/style/theme/index.css'
import './public/style-dark/theme/index.css'
import animated from 'animate.css'

export default ({
  Vue,
}) => {
  Vue.use(Element, VueParticles, animated)
}