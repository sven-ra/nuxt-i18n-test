import Vue from 'vue'
import fetchApi from '~/utils/fetchApi'

export const state = () => ({
  siteData: null,
})

export const mutations = {
  SetSiteData(state, value) {
    Vue.set(state, 'siteData', value)
  },
}

export const actions = {
  async nuxtServerInit({ commit }, { app }) {
    const lang = app.i18n.locale === 'evk' ? 'et' : app.i18n.locale

    const siteData = await fetchApi({
      path: 'site-data',
      params: {
        lang,
      },
    })

    commit('SetSiteData', siteData)
  },
}
