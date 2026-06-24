<template>
  <main class="page home-view">
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Identity V Club</p>
        <h1>
          <span>江西财经职业学院</span>
          <span>第五人格电竞社团</span>
        </h1>
        <p class="hero-desc">在庄园里练配合，在校园里交朋友。这里欢迎认真上分的玩家，也欢迎喜欢剪辑、海报、解说和赛事复盘的同学。</p>
        <div class="hero-actions">
          <button class="btn" @click="$emit('navigate', 'join')">我要加入</button>
          <button class="btn secondary" @click="$emit('navigate', 'replays')">看赛事回放</button>
        </div>
      </div>

      <ImagePlaceholder
        class="hero-image"
        :src="images.clubPhoto"
        fit="contain"
        alt="社团成员线下合照"
        label="图片待替换"
        title="放一张社团合照或第五人格主题海报"
        hint="建议横图：社团活动现场、成员合照、招新摊位。"
      />
    </section>

    <p v-if="loading" class="loading">正在通过 axios 加载社团数据...</p>

    <section class="stats-strip">
      <StatCard v-for="stat in clubStats" :key="stat.label" :value="stat.value" :label="stat.label" />
    </section>

    <section class="section role-section">
      <SectionTitle
        eyebrow="Club Spirit"
        title="不只开黑，也做复盘和内容"
        desc="社团把娱乐、竞技、创作放在一起：有人负责上场，有人负责观察，有人负责记录高光。"
      />

      <div class="role-grid">
        <component
          :is="role.name === '监管组' ? 'a' : 'article'"
          v-for="role in roles"
          :key="role.name"
          class="role-card card"
          :class="{ clickable: role.name === '监管组' }"
          :style="{ borderTopColor: role.accent }"
          :href="role.name === '监管组' ? 'https://id5.163.com/nrzx/role.html' : null"
          :target="role.name === '监管组' ? '_blank' : null"
          :rel="role.name === '监管组' ? 'noopener' : null"
        >
          <h3>{{ role.name }}</h3>
          <p>{{ role.intro }}</p>
          <span v-if="role.name === '监管组'">查看官方角色资料</span>
        </component>
      </div>
    </section>
  </main>
</template>

<script>
import ImagePlaceholder from '../components/ImagePlaceholder.vue'
import SectionTitle from '../components/SectionTitle.vue'
import StatCard from '../components/StatCard.vue'
import { getClubData } from '../api/clubApi'

export default {
  name: 'HomeView',
  components: { ImagePlaceholder, SectionTitle, StatCard },
  data() {
    return {
      loading: true,
      clubStats: [],
      roles: [],
      images: {}
    }
  },
  created() {
    getClubData().then(data => {
      this.clubStats = data.clubStats
      this.roles = data.roles
      this.images = data.images
    }).finally(() => {
      this.loading = false
    })
  }
}
</script>

<style scoped>
.home-view { position: relative; }
.home-view::before {
  content: "IDENTITY V";
  position: absolute;
  top: 36px;
  left: -4px;
  color: rgba(255, 255, 255, 0.03);
  font-family: var(--display-font);
  font-size: clamp(70px, 13vw, 170px);
  line-height: 0.82;
  pointer-events: none;
}
.hero {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.12fr) minmax(320px, 0.88fr);
  align-items: center;
  gap: 42px;
}
.hero-copy {
  position: relative;
  padding: 38px 0;
  z-index: 1;
}
.eyebrow {
  margin: 0 0 12px;
  color: var(--gold);
  font-family: var(--display-font);
  font-weight: 900;
  text-transform: uppercase;
}
h1 {
  margin: 0;
  color: #fff;
  font-family: var(--display-font);
  letter-spacing: 0;
}
h1 span {
  display: block;
  font-size: clamp(36px, 5.4vw, 68px);
  line-height: 1.04;
  text-shadow: 5px 5px 0 rgba(166, 28, 40, 0.72), 0 14px 32px rgba(166, 28, 40, 0.38);
}
h1 span + span {
  margin-top: 8px;
  color: rgba(255, 255, 255, 0.94);
}
.hero-desc {
  display: block;
  max-width: 620px;
  margin: 22px 0 0;
  color: rgba(255, 255, 255, 0.72);
  font-size: 18px;
  line-height: 1.85;
}
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 30px;
}
.hero-image { transform: translateY(18px) rotate(-1deg); }
.loading {
  margin: 20px 0 0;
  color: var(--gold);
  font-weight: 800;
}
.stats-strip {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1px;
  margin-top: 38px;
  border: 1px solid rgba(200, 164, 96, 0.22);
  background: rgba(200, 164, 96, 0.18);
}
.role-section { position: relative; }
.role-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr 1fr 0.9fr;
  gap: 18px;
  align-items: stretch;
}
.role-card {
  display: block;
  padding: 26px;
  border-top: 7px solid;
  border-bottom: 4px solid var(--scarlet);
  text-decoration: none;
}
.role-card:nth-child(even) { transform: translateY(18px); }
.role-card h3 {
  margin: 0 0 12px;
  color: #fff;
  font-family: var(--display-font);
  font-size: 26px;
  text-shadow: 3px 3px 0 rgba(166, 28, 40, 0.62);
}
.role-card p {
  margin: 0;
  color: rgba(255, 255, 255, 0.68);
  line-height: 1.7;
}
.role-card span {
  display: inline-block;
  margin-top: 14px;
  color: var(--gold);
  font-weight: 900;
}
.role-card.clickable {
  cursor: pointer;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}
.role-card.clickable:hover {
  transform: translateY(12px);
  box-shadow: 0 22px 50px rgba(166, 28, 40, 0.28);
  border-color: var(--scarlet);
}
@media (max-width: 900px) {
  .hero,
  .role-grid { grid-template-columns: 1fr 1fr; }
  .stats-strip { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .hero { align-items: stretch; }
  .hero-image,
  .role-card:nth-child(even),
  .role-card.clickable:hover { transform: none; }
}
@media (max-width: 640px) {
  .hero,
  .role-grid,
  .stats-strip { grid-template-columns: 1fr; }
}
</style>
