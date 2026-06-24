<template>
  <main class="page replays-page">
    <section class="replay-hero">
      <div>
        <SectionTitle eyebrow="Match Replays" title="往期赛事回放入口" />
      </div>
      <ImagePlaceholder :src="images.gameShot" alt="第五人格游戏截图" label="图片待替换" title="放一张职业比赛截图或观赛夜照片" hint="建议找清晰的游戏对局画面，避免带明显水印的图片。" />
    </section>

    <p v-if="loading" class="loading">正在通过 axios 加载赛事回放...</p>

    <section class="section replay-grid">
      <ReplayCard v-for="replay in replayLinks" :key="replay.title" :replay="replay" />
    </section>

    <section class="section review card">
      <h3>社团复盘会怎么用这些回放？</h3>
      <p>先看 BP 和出生点，再标记第一波追击、救援、开门战三个节点。每位同学可以从自己常玩的位置出发，说出一个能学到的操作或沟通细节。</p>
    </section>
  </main>
</template>

<script>
import ImagePlaceholder from '../components/ImagePlaceholder.vue'
import ReplayCard from '../components/ReplayCard.vue'
import SectionTitle from '../components/SectionTitle.vue'
import { getClubData } from '../api/clubApi'

export default {
  name: 'ReplaysView',
  components: { ImagePlaceholder, ReplayCard, SectionTitle },
  data() { return { loading: true, replayLinks: [], images: {} } },
  created() {
    getClubData().then(data => {
      this.replayLinks = data.replayLinks
      this.images = data.images
    }).finally(() => { this.loading = false })
  }
}
</script>

<style scoped>
.replays-page { position: relative; }
.replays-page::before {
  content: "REPLAY";
  position: absolute;
  right: 0;
  top: 32px;
  color: rgba(166, 28, 40, 0.12);
  font-family: var(--display-font);
  font-size: clamp(82px, 15vw, 180px);
  line-height: 0.8;
  pointer-events: none;
}
.replay-hero { position: relative; display: grid; grid-template-columns: 0.95fr 1.05fr; gap: 30px; align-items: center; }
.loading { margin: 20px 0 0; color: var(--gold); font-weight: 800; }
.replay-grid { display: grid; grid-template-columns: 1fr 0.95fr 1.05fr; gap: 18px; }
.review { padding: 30px; border-left: 6px solid var(--scarlet); border-bottom: 4px solid var(--gold); }
.review h3 { margin: 0 0 10px; color: #fff; font-family: var(--display-font); font-size: 30px; text-shadow: 3px 3px 0 rgba(166, 28, 40, 0.65); }
.review p { margin: 0; color: rgba(255, 255, 255, 0.68); line-height: 1.85; }
@media (max-width: 860px) { .replay-hero, .replay-grid { grid-template-columns: 1fr; } }
</style>
