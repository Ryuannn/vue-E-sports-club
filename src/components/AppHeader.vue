<template>
  <header class="app-header">
    <div class="header-inner">
      <button class="brand" @click="$emit('navigate', 'home')">
        <span class="brand-mark">
          <img src="/images/e.jpg" alt="第五人格电竞社团标识">
        </span>
        <span>
          <strong>江西财经职业学院</strong>
          <small>第五人格电竞社团</small>
        </span>
      </button>

      <nav class="nav">
        <button v-for="item in navItems" :key="item.key" :class="{ active: currentRoute === item.key }" @click="$emit('navigate', item.key)">
          {{ item.label }}
        </button>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    navItems: { type: Array, required: true },
    currentRoute: { type: String, required: true }
  }
}
</script>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid rgba(200, 164, 96, 0.26);
  background: rgba(10, 10, 14, 0.94);
  backdrop-filter: blur(14px);
}
.header-inner {
  width: min(1180px, calc(100% - 32px));
  min-height: 78px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.brand {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  border: 0;
  background: transparent;
  color: #fff;
  text-align: left;
}
.brand-mark {
  display: inline-block;
  width: 54px;
  height: 54px;
  border: 1px solid rgba(200, 164, 96, 0.48);
  border-radius: 6px;
  overflow: hidden;
  background: var(--night);
  box-shadow: 0 0 0 3px rgba(166, 28, 40, 0.22);
  transform: skewX(-8deg);
}
.brand-mark img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: skewX(8deg) scale(1.12);
}
.brand strong,
.brand small { display: block; }
.brand strong {
  font-family: var(--display-font);
  font-size: 19px;
  line-height: 1.05;
  letter-spacing: 0;
}
.brand small {
  margin-top: 6px;
  color: rgba(255, 255, 255, 0.68);
  font-weight: 700;
}
.nav { display: flex; align-items: center; gap: 8px; }
.nav button {
  min-height: 38px;
  padding: 0 14px;
  border: 1px solid transparent;
  border-radius: 2px;
  background: transparent;
  color: rgba(255, 255, 255, 0.74);
  font-family: var(--display-font);
  font-weight: 900;
  transform: skewX(-10deg);
}
.nav button.active,
.nav button:hover {
  border-color: rgba(200, 164, 96, 0.48);
  background: linear-gradient(135deg, rgba(166, 28, 40, 0.88), rgba(166, 28, 40, 0.32));
  color: #fff;
}
.nav button::first-letter { transform: skewX(10deg); }
@media (max-width: 760px) {
  .header-inner { min-height: auto; padding: 12px 0; align-items: flex-start; flex-direction: column; }
  .nav { width: 100%; overflow-x: auto; padding-bottom: 2px; }
  .nav button { flex: 0 0 auto; }
}
</style>
