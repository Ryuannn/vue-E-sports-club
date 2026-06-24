<template>
  <div class="section-title">
    <p>{{ eyebrow }}</p>
    <h2>{{ title }}</h2>
    <span v-if="desc">{{ desc }}</span>
  </div>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: { eyebrow: String, title: String, desc: String }
}
</script>

<style scoped>
.section-title {
  position: relative;
  max-width: min(100%, 1080px);
  margin-bottom: 30px;
  padding-left: 18px;
}
.section-title::before {
  content: "";
  position: absolute;
  left: 0;
  top: 4px;
  width: 6px;
  height: calc(100% - 6px);
  background: var(--scarlet);
  box-shadow: 10px 0 0 rgba(200, 164, 96, 0.9);
}
p {
  margin: 0 0 10px;
  color: var(--gold);
  font-family: var(--display-font);
  font-size: 14px;
  font-weight: 900;
  text-transform: uppercase;
}
h2 {
  position: relative;
  width: max-content;
  max-width: 100%;
  white-space: nowrap;
  margin: 0;
  color: #fff;
  font-family: var(--display-font);
  font-size: clamp(34px, 5.5vw, 66px);
  line-height: 1;
  letter-spacing: 0;
  text-shadow: 4px 4px 0 rgba(166, 28, 40, 0.72), 0 12px 34px rgba(166, 28, 40, 0.4);
}
h2::after {
  content: "";
  position: absolute;
  right: -72px;
  bottom: 8px;
  width: 54px;
  height: 9px;
  background: var(--scarlet);
  transform: skewX(-24deg);
}
span { display: block; max-width: 650px; margin-top: 14px; color: rgba(255, 255, 255, 0.7); line-height: 1.8; }
@media (max-width: 900px) {
  h2 { white-space: normal; }
}
@media (max-width: 700px) {
  h2::after { display: none; }
}
</style>

