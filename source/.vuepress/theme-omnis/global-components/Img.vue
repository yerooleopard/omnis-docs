<template>
  <p>
    <img
        :src="$withBase(src)"
        class="medium-zoom-image"
    >
  </p>
</template>

<script>
export default {
    name: "Img",
    props: {
      src: String,
  }
}
</script>

<style lang="scss">
</style> 