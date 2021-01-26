<template>
  <section>
    <div>
      <h1 class="title">{{ $store.state.siteData.title }}</h1>
      <h1 class="title" v-if="data">{{ data.title }}</h1>
      <div class="links">
        <div>
          Switch locale:
          <nuxt-link
            class="button--green"
            v-for="(locale, index) in localesExcludingCurrent"
            :key="index"
            :exact="true"
            :to="switchLocalePath(locale.code)"
            >{{ locale.code }}</nuxt-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import fetchApi from '~/utils/fetchApi'

export default {
  computed: {
    localesExcludingCurrent() {
      return this.$i18n.locales.filter(
        (locale) => locale.code !== this.$i18n.locale
      )
    },
  },
  async asyncData({ app }) {
    let frontPagePath = ''

    switch (app.i18n.locale) {
      case 'en':
        frontPagePath = 'front-page'
        break
      case 'ru':
        frontPagePath = 'esileht-rus'
        break

      default:
        frontPagePath = 'esileht'
        break
    }

    const data = await fetchApi({
      path: `pages/${frontPagePath}`,
      params: {
        lang: app.i18n.locale === 'evk' ? 'et' : app.i18n.locale,
        acf: true,
      },
    })

    return {
      data,
    }
  },
}
</script>

<style scoped>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 100px;
  color: #2e495e;
  letter-spacing: 1px;
  font-size: 6em;
}
.green {
  color: #00c48d;
}

.subtitle {
  font-weight: 300;
  font-size: 3em;
  color: #2e495e;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
