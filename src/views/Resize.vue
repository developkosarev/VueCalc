<template>
  <div ref="Resize" class="container">
    <h1>Resize</h1>
  </div>
</template>

<script>
export default {
  name: "Resize",
  data() {
    return {
      ro: null
    };
  },
  mounted() {
    const bodyElem = document.querySelector("html");

    this.ro = new ResizeObserver(this.onResize);
    this.ro.observe(bodyElem);

    //this.ro.observe(this.$refs.Resize);
  },
  beforeDestroy() {
    const bodyElem = document.querySelector("html");
    this.ro.unobserve(bodyElem);

    //this.ro.unobserve(this.$refs.Resize);
  },
  methods: {
    onResize(entries) {
      for (const entry of entries) {
        if (entry.contentBoxSize) {
          const contentBoxSize = entry.contentBoxSize[0];
          //h1Elem.style.fontSize = `${Math.max(1.5, contentBoxSize.inlineSize / 200)}rem`;
          //pElem.style.fontSize = `${Math.max(1, contentBoxSize.inlineSize / 600)}rem`;
          console.log(contentBoxSize.inlineSize);
        } else {
          //h1Elem.style.fontSize = `${Math.max(1.5, entry.contentRect.width / 200)}rem`;
          //pElem.style.fontSize = `${Math.max(1, entry.contentRect.width / 600)}rem`;
          console.log(entry.contentRect.width);
        }
      }

      const bodyElem = document.querySelector("html");
      console.log(bodyElem.offsetWidth);
      console.log(bodyElem.offsetHeight);

      console.log(entries);
      //console.log(this.$refs.Resize.offsetHeight);
      //this.$emit("resize", this.$refs.Resize.offsetHeight);
    }
  }
};
</script>
