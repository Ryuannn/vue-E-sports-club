<template>
  <main class="page join-page">
    <section class="join-hero">
      <SectionTitle eyebrow="Join Us" title="加入庄园战队" desc="填写报名意向，选择你的社团定位。无论你想上场、复盘、剪辑还是做活动运营，都可以从这里入队。" />
      <div class="join-tag">RECRUIT / 2026</div>
    </section>

    <section class="join-layout">
      <RecruitForm :loading="submitting" @submit-form="handleSubmit" @invalid="showMessage" />
      <div class="qr-panel">
        <ImagePlaceholder :src="images.qrCode" fit="qr" alt="招新二维码" label="图片待替换" title="放招新二维码" hint="把招新群二维码放在这里。" />
        <p>扫码进入招新群，提交表单后可截图给负责人确认。</p>
      </div>
    </section>

    <transition name="page-fade">
      <section v-if="lastSubmit" class="section result card">
        <h3>报名预览</h3>
        <p>{{ lastSubmit.name }}，{{ lastSubmit.className }}，想加入「{{ lastSubmit.role }}」。</p>
        <span v-if="lastSubmit.message">留言：{{ lastSubmit.message }}</span>
      </section>
    </transition>

    <p v-if="message" class="message">{{ message }}</p>
  </main>
</template>

<script>
import ImagePlaceholder from '../components/ImagePlaceholder.vue'
import RecruitForm from '../components/RecruitForm.vue'
import SectionTitle from '../components/SectionTitle.vue'
import { getClubData, submitJoinForm } from '../api/clubApi'

export default {
  name: 'JoinView',
  components: { ImagePlaceholder, RecruitForm, SectionTitle },
  data() { return { lastSubmit: null, message: '', images: {}, submitting: false } },
  created() { getClubData().then(data => { this.images = data.images }) },
  methods: {
    handleSubmit(form) {
      this.submitting = true
      submitJoinForm(form).then(res => {
        this.lastSubmit = res.data
        this.message = res.message
      }).catch(() => {
        this.message = '提交失败，请稍后再试。'
      }).finally(() => { this.submitting = false })
    },
    showMessage(text) { this.message = text }
  }
}
</script>

<style scoped>
.join-page { position: relative; }
.join-page::before {
  content: "JOIN";
  position: absolute;
  right: 0;
  top: 38px;
  color: rgba(255, 255, 255, 0.035);
  font-family: var(--display-font);
  font-size: clamp(86px, 16vw, 190px);
  line-height: 0.8;
  pointer-events: none;
}
.join-hero {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  margin-bottom: 8px;
}
.join-tag {
  flex: 0 0 auto;
  color: var(--gold);
  font-family: var(--display-font);
  font-size: 18px;
  transform: skewX(-10deg);
}
.join-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(280px, 0.74fr);
  gap: 28px;
  align-items: center;
}
.qr-panel {
  justify-self: end;
  width: min(100%, 390px);
  padding: 18px;
  border-left: 4px solid var(--scarlet);
  background: rgba(255, 255, 255, 0.045);
}
.qr-panel p {
  margin: 14px 4px 0;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.7;
}
.result { padding: 24px; }
.result h3 { margin: 0 0 10px; color: #fff; font-family: var(--display-font); }
.result p,
.result span { color: rgba(255, 255, 255, 0.72); line-height: 1.7; }
.message { margin: 16px 0 0; color: var(--gold); font-weight: 800; }
@media (max-width: 820px) {
  .join-hero { display: block; }
  .join-tag { margin-bottom: 18px; }
  .join-layout { grid-template-columns: 1fr; }
  .qr-panel { justify-self: stretch; }
}
</style>
