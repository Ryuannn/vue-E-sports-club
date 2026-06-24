<template>
  <div>
    <p v-if="loading" class="loading">正在通过 axios 加载活动数据...</p>
    <div class="activity-grid">
      <article v-for="activity in activityCards" :key="activity.title" class="activity-card card">
        <span>{{ activity.tag }}</span>
        <h3>{{ activity.title }}</h3>
        <p>{{ activity.text }}</p>
        <ul>
          <li v-for="item in activity.items" :key="item">{{ item }}</li>
        </ul>
      </article>
    </div>

    <section class="section split">
      <ImagePlaceholder :src="images.poster" fit="contain" alt="社团活动海报" label="图片待替换" title="放校内赛现场、计分板或活动海报" hint="建议找竖版或横版活动照片各一张，后续可以改成轮播图。" />
      <div class="schedule card">
        <h3>一周节奏示例</h3>
        <p><strong>周三晚：</strong>自由匹配、角色熟练度练习。</p>
        <p><strong>周五晚：</strong>校内训练赛，赛后复盘关键局。</p>
        <p><strong>周末：</strong>职业比赛观赛或高光剪辑交流。</p>
      </div>
    </section>
  </div>
</template>

<script>
import ImagePlaceholder from '../components/ImagePlaceholder.vue'
import { getClubData } from '../api/clubApi'

export default {
  name: 'ActivityOverview',
  components: { ImagePlaceholder },
  data() { return { loading: true, activityCards: [], images: {} } },
  created() {
    getClubData().then(data => {
      this.activityCards = data.activityCards
      this.images = data.images
    }).finally(() => { this.loading = false })
  }
}
</script>

<style scoped>
.loading { color: var(--gold); font-weight: 800; }
.activity-grid { display: grid; grid-template-columns: 1.05fr 0.92fr 1fr; gap: 18px; }
.activity-card { padding: 26px; border-top: 7px solid var(--scarlet); }
.activity-card:nth-child(2) { transform: translateY(22px); }
.activity-card span { color: var(--gold); font-family: var(--display-font); font-weight: 900; }
.activity-card h3 { margin: 12px 0 10px; color: #fff; font-family: var(--display-font); font-size: 28px; text-shadow: 3px 3px 0 rgba(166, 28, 40, 0.62); }
.activity-card p,
.activity-card li { color: rgba(255, 255, 255, 0.7); line-height: 1.7; }
.activity-card ul { margin: 16px 0 0; padding-left: 20px; }
.split { display: grid; grid-template-columns: 0.78fr 1fr; gap: 24px; align-items: stretch; }
.schedule { padding: 32px; border-left: 7px solid var(--scarlet); border-bottom: 4px solid var(--gold); }
.schedule h3 { margin: 0 0 18px; color: #fff; font-family: var(--display-font); font-size: 34px; text-shadow: 3px 3px 0 rgba(166, 28, 40, 0.62); }
.schedule p { margin: 0 0 14px; color: rgba(255, 255, 255, 0.7); line-height: 1.8; }
.schedule strong { color: var(--gold); }
@media (max-width: 820px) {
  .activity-grid, .split { grid-template-columns: 1fr; }
  .activity-card:nth-child(2) { transform: none; }
}
</style>
