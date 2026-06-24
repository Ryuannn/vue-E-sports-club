<template>
  <main class="page">
    <SectionTitle eyebrow="Activities" title="社团活动安排" />

    <nav class="sub-nav">
      <router-link :to="{ name: 'activities' }" exact>活动概览</router-link>
      <router-link :to="{ name: 'activityGallery' }">活动相册</router-link>
    </nav>

    <transition name="page-fade" mode="out-in">
      <router-view />
    </transition>
  </main>
</template>

<script>
import SectionTitle from '../components/SectionTitle.vue'

export default {
  name: 'ActivitiesView',
  components: { SectionTitle }
}
</script>

<style scoped>
.sub-nav { display: flex; gap: 10px; margin: 0 0 28px; flex-wrap: wrap; }
.sub-nav a {
  min-height: 42px;
  display: inline-flex;
  align-items: center;
  padding: 0 20px;
  border: 1px solid rgba(200, 164, 96, 0.34);
  border-radius: 2px;
  background: rgba(166, 28, 40, 0.14);
  color: rgba(255, 255, 255, 0.78);
  text-decoration: none;
  font-family: var(--display-font);
  font-weight: 900;
  clip-path: polygon(12px 0, 100% 0, calc(100% - 12px) 100%, 0 100%);
}
.sub-nav a.router-link-exact-active {
  background: linear-gradient(135deg, var(--scarlet), #5d0d14);
  color: #fff;
  border-color: var(--gold);
  box-shadow: 0 12px 30px rgba(166, 28, 40, 0.3);
}
</style>
