<template>
  <div
    v-if="prev || next"
    class="page-nav"
  >
    <div class="inner">
      <div
        v-if="prev"
        class="prev"
      >
        <a
          v-if="prev.type === 'external'"
          class="page-nav__button prev"
          :href="prev.path"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ prev.title || prev.path }}

          <OutboundLink />
        </a>

        <RouterLink
          v-else
          class="page-nav__button prev"
          :to="prev.path"
        >
          <span>Prev</span>
          « {{ prev.title || prev.path }}
        </RouterLink>
      </div>
      <div
        v-else
        class="prev"
      ></div>

      <div
        v-if="next"
        class="next"
      >
        <a
          v-if="next.type === 'external'"
          class="page-nav__button next"
          :href="next.path"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ next.title || next.path }}

          <OutboundLink />
        </a>

        <RouterLink
          v-else
          class="page-nav__button next"
          :to="next.path"
        >
          <span>Next</span>
          {{ next.title || next.path }} »
        </RouterLink>
      </div>
      <div
        v-else
        class="next"
      ></div>
    </div>
  </div>
</template>

<script>
import { resolvePage } from '../util'
import isString from 'lodash/isString'
import isNil from 'lodash/isNil'

export default {
  name: 'PageNav',

  props: ['sidebarItems'],

  computed: {
    prev () {
      return resolvePageLink(LINK_TYPES.PREV, this)
    },

    next () {
      return resolvePageLink(LINK_TYPES.NEXT, this)
    }
  }
}

function resolvePrev (page, items) {
  return find(page, items, -1)
}

function resolveNext (page, items) {
  return find(page, items, 1)
}

const LINK_TYPES = {
  NEXT: {
    resolveLink: resolveNext,
    getThemeLinkConfig: ({ nextLinks }) => nextLinks,
    getPageLinkConfig: ({ frontmatter }) => frontmatter.next
  },
  PREV: {
    resolveLink: resolvePrev,
    getThemeLinkConfig: ({ prevLinks }) => prevLinks,
    getPageLinkConfig: ({ frontmatter }) => frontmatter.prev
  }
}

function resolvePageLink (
  linkType,
  { $themeConfig, $page, $route, $site, sidebarItems }
) {
  const { resolveLink, getThemeLinkConfig, getPageLinkConfig } = linkType

  // Get link config from theme
  const themeLinkConfig = getThemeLinkConfig($themeConfig)

  // Get link config from current page
  const pageLinkConfig = getPageLinkConfig($page)

  // Page link config will overwrite global theme link config if defined
  const link = isNil(pageLinkConfig) ? themeLinkConfig : pageLinkConfig

  if (link === false) {
    return
  } else if (isString(link)) {
    return resolvePage($site.pages, link, $route.path)
  } else {
    return resolveLink($page, sidebarItems)
  }
}

function find (page, items, offset) {
  const res = []
  flatten(items, res)
  for (let i = 0; i < res.length; i++) {
    const cur = res[i]
    if (cur.type === 'page' && cur.path === decodeURIComponent(page.path)) {
      return res[i + offset]
    }
  }
}

function flatten (items, res) {
  for (let i = 0, l = items.length; i < l; i++) {
    if (items[i].type === 'group') {
      flatten(items[i].children || [], res)
    } else {
      res.push(items[i])
    }
  }
}
</script>

<style lang="stylus">
.page-nav
  padding: 2rem 10vw
  @media (max-width: $MQNarrow)
    padding 2rem
  @media (max-width: $MQMobileNarrow)
    padding 1.5rem
  .inner 
    display flex
    justify-content space-between
  &__button
    border: 1px solid $borderColor
    border-radius 5px
    box-shadow $boxShadow
    display block
    &.prev
      padding 1rem 7rem 1rem 2rem
      text-align left
      a:before
        content: "«"
    &.next
      padding 1rem 2rem 1rem 7rem
      text-align right
      a:after
        content: "»"
    span
      display block
      font-size 0.8rem
      margin-bottom 0.1rem
      opacity .8
    &:hover
      box-shadow none
      opacity .8
</style>
