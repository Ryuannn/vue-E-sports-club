<template>
  <div id="app">
    <AppHeader :nav-items="navItems" :current-route="currentNav" @navigate="goTo" />

    <transition name="page-fade" mode="out-in">
      <router-view @navigate="goTo" />
    </transition>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

export default {
  name: 'App',
  components: { AppHeader },
  data() {
    return {
      navItems: [
        { key: 'home', label: '社团首页' },
        { key: 'activities', label: '社团活动' },
        { key: 'replays', label: '赛事回放' },
        { key: 'join', label: '加入我们' }
      ]
    }
  },
  computed: {
    currentNav() {
      if (this.$route.path.indexOf('/activities') === 0) return 'activities'
      return this.$route.name
    }
  },
  methods: {
    goTo(routeName) {
      if (this.$route.name !== routeName) this.$router.push({ name: routeName })
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>

<style>
:root {
  --scarlet: #A61C28;
  --night: #0A0A0E;
  --metal: #666677;
  --gold: #C8A460;
  --paper: #f7f5f0;
  --display-font: "Arial Black", "Impact", "Microsoft YaHei", "PingFang SC", sans-serif;
  --body-font: "Microsoft YaHei", "PingFang SC", Arial, sans-serif;
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; background: var(--night); color: #fff; }
button, input, select, textarea { font: inherit; }
button { cursor: pointer; }
a { color: inherit; }

#app {
  min-height: 100vh;
  font-family: var(--body-font);
  background:
    linear-gradient(118deg, rgba(166, 28, 40, 0.62) 0 13%, transparent 13% 100%),
    linear-gradient(298deg, transparent 0 58%, rgba(166, 28, 40, 0.32) 58% 69%, transparent 69%),
    linear-gradient(250deg, rgba(200, 164, 96, 0.2), transparent 26%),
    repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.045) 0 1px, transparent 1px 16px),
    #0a0a0e;
}

.page {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
  padding: 44px 0 72px;
}
.section { margin-top: 64px; }

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 48px;
  padding: 0 22px;
  border: 1px solid rgba(200, 164, 96, 0.44);
  border-radius: 0;
  background: linear-gradient(135deg, var(--scarlet) 0 62%, #0a0a0e 62% 100%);
  color: #fff;
  font-family: var(--display-font);
  font-weight: 900;
  text-decoration: none;
  clip-path: polygon(13px 0, 100% 0, calc(100% - 13px) 100%, 0 100%);
  box-shadow: 7px 7px 0 rgba(200, 164, 96, 0.22);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.btn:hover { transform: translate(-2px, -2px); box-shadow: 11px 11px 0 rgba(166, 28, 40, 0.42); }
.btn.secondary { background: linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0 62%, rgba(166, 28, 40, 0.28) 62% 100%); color: #fff; border-color: rgba(200, 164, 96, 0.52); }
.btn.secondary:hover { background: rgba(200, 164, 96, 0.12); }
.grid { display: grid; gap: 18px; }
.card {
  position: relative;
  border: 1px solid rgba(200, 164, 96, 0.26);
  border-radius: 0;
  background:
    linear-gradient(135deg, rgba(166, 28, 40, 0.2) 0 18%, transparent 18%),
    linear-gradient(145deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.035));
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.3), inset 0 -4px 0 rgba(166, 28, 40, 0.58);
  backdrop-filter: blur(8px);
  clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px));
}
.page-fade-enter-active, .page-fade-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.page-fade-enter, .page-fade-leave-to { opacity: 0; transform: translateY(8px); }

@media (max-width: 720px) {
  .page { width: min(100% - 24px, 1180px); padding-top: 28px; }
  .section { margin-top: 44px; }
}
</style>
