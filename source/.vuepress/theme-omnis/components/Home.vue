<template>
  <main
    class="home"
    aria-labelledby="main-title"
  > 
    <div class="hero-container" :style="data.bgImage ? { backgroundImage: 'url(' + $withBase(data.bgImage) + ')' } : ''" >
      <header class="hero">

        <h1
          v-if="data.heroText !== null"
          id="main-title"
        >
          {{ data.heroText || $title || 'Hello' }}
        </h1>

        <img
          v-if="data.heroImage"
          :src="$withBase(data.heroImage)"
          :alt="data.heroAlt || 'hero'"
        >

        <p
          v-if="data.tagline !== null"
          class="description"
        >
          {{ data.tagline || $description || 'Welcome to your VuePress site' }}
        </p>

        <p
          v-if="data.actionText && data.actionLink"
          class="action"
        >
          <NavLink
            class="action-button"
            :item="actionLink"
          />
        </p>
      </header>
    </div>

    <Content class="theme-default-content" />

    <div
      v-if="data.footer"
      class="footer"
    >
      {{ data.footer }}
    </div>
  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'

export default {
  name: 'Home',

  components: { NavLink },

  computed: {
    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style lang="stylus">

.home
  padding $navbarHeight 0
  padding-bottom 0
  margin 0px auto
  display block

  .hero-container
    background-color #1a1a1a
    padding 5rem 2rem
    position relative
    > * 
      z-index 2
      position relative
    &:before 
      content ""
      position absolute
      width 100%
      height 100%
      background rgba(0,0,0,0.8)
      left 0
      top 0
  .hero
    max-width $contentWidth
    margin 0 auto
    img
      max-width 250px
      max-height 400px
      display block
      margin-top 1rem
    h1
      color #fff
      text-transform: uppercase;
      font-size: 0.9rem;
      font-weight: 500;
    .description
      font-size 1.6rem
      line-height 1.3
      color rgba(#fff, .8)
      margin 3rem 0 0
    .action 
      margin 5rem auto 0
    .action-button
      display inline-block
      color $accentColor
      background-color #fff
      padding 1rem 3rem
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      border-radius 5px
      box-shadow $boxShadow
      &:hover
        background-color darken(#fff, 20%)
  .features
    border-top 1px solid $borderColor
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
  .theme-default-content 
    margin 0 auto
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>
