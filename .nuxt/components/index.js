export const BarChartHorizontal = () => import('../..\\components\\BarChartHorizontal.vue' /* webpackChunkName: "components/bar-chart-horizontal" */).then(c => wrapFunctional(c.default || c))
export const Logo = () => import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const Model = () => import('../..\\components\\Model.vue' /* webpackChunkName: "components/model" */).then(c => wrapFunctional(c.default || c))
export const SingleLineChart = () => import('../..\\components\\SingleLineChart.vue' /* webpackChunkName: "components/single-line-chart" */).then(c => wrapFunctional(c.default || c))
export const VuetifyLogo = () => import('../..\\components\\VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
