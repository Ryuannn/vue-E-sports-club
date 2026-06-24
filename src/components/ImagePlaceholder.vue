<template>
  <figure class="image-frame" :class="fitClass">
    <img v-if="src" :src="src" :alt="alt || title" @error="failed = true" v-show="!failed">
    <div v-if="!src || failed" class="image-placeholder">
      <span>{{ label }}</span>
      <strong>{{ title }}</strong>
      <p>{{ hint }}</p>
    </div>
  </figure>
</template>

<script>
export default {
  name: 'ImagePlaceholder',
  props: {
    src: String,
    alt: String,
    label: String,
    title: String,
    hint: String,
    fit: { type: String, default: 'cover' }
  },
  data() { return { failed: false } },
  computed: {
    fitClass() {
      if (this.fit === 'contain') return 'contain'
      if (this.fit === 'qr') return 'qr'
      return 'cover'
    }
  },
  watch: { src() { this.failed = false } }
}
</script>

<style scoped>
.image-frame {
  min-height: 280px;
  margin: 0;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid rgba(200, 164, 96, 0.28);
  background:
    linear-gradient(135deg, rgba(166, 28, 40, 0.24), transparent 34%),
    #0a0a0e;
  box-shadow: 0 24px 60px rgba(10, 10, 14, 0.22);
  clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px));
}
.image-frame.cover { aspect-ratio: 4 / 3; }
.image-frame.contain,
.image-frame.qr {
  aspect-ratio: 4 / 3;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.image-frame.qr {
  aspect-ratio: 1 / 1;
  min-height: 0;
  max-width: 360px;
  width: 100%;
  justify-self: center;
  padding: 22px;
}
img {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 280px;
  object-fit: cover;
}
.contain img,
.qr img {
  width: 100%;
  height: 100%;
  min-height: 0;
  object-fit: contain;
}
.qr img {
  background: #fff;
  border-radius: 4px;
}
.image-placeholder {
  min-height: 280px;
  width: 100%;
  padding: 28px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border: 1px dashed rgba(200, 164, 96, 0.38);
  background: linear-gradient(135deg, #0a0a0e, rgba(166, 28, 40, 0.82));
  color: #fff;
}
span {
  width: max-content;
  max-width: 100%;
  padding: 6px 10px;
  border-radius: 2px;
  background: rgba(200, 164, 96, 0.18);
  color: var(--gold);
  font-weight: 800;
}
strong { margin-top: 18px; font-family: var(--display-font); font-size: clamp(24px, 4vw, 44px); line-height: 1.12; }
p { max-width: 500px; margin: 12px 0 0; color: rgba(255, 255, 255, 0.78); line-height: 1.7; }
</style>
