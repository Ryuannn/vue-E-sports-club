<template>
  <article class="stat-card">
    <strong>{{ value }}</strong>
    <span>{{ label }}</span>
  </article>
</template>

<script>
export default {
  name: 'StatCard',
  props: { value: String, label: String }
}
</script>

<style scoped>
.stat-card {
  min-height: 78px;
  padding: 16px 18px;
  display: flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg, rgba(166, 28, 40, 0.32) 0 28%, rgba(10, 10, 14, 0.82) 28% 100%);
  border-bottom: 4px solid var(--scarlet);
}
strong {
  flex: 0 0 auto;
  color: var(--gold);
  font-family: var(--display-font);
  font-size: clamp(25px, 3.2vw, 36px);
  line-height: 1;
  text-shadow: 3px 3px 0 rgba(0, 0, 0, 0.48);
}
span { color: rgba(255, 255, 255, 0.78); font-weight: 900; line-height: 1.35; }
</style>
