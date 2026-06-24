<template>
  <div class="gallery-grid">
    <ImagePlaceholder :src="images.clubPhoto" fit="contain" alt="社团成员线下合照" label="图片待替换" title="社团合照" hint="社团成员线下合照。" />
    <ImagePlaceholder :src="images.gameShot" alt="第五人格游戏截图" label="图片待替换" title="游戏截图" hint="第五人格游戏截图。" />
    <ImagePlaceholder :src="images.poster" fit="contain" alt="社团活动海报" label="图片待替换" title="活动海报" hint="活动宣传海报。" />
    <ImagePlaceholder :src="images.qrCode" alt="招新二维码" label="图片待替换" title="招新二维码" hint="招新二维码。" />
  </div>
</template>

<script>
import ImagePlaceholder from '../components/ImagePlaceholder.vue'
import { getClubData } from '../api/clubApi'

export default {
  name: 'ActivityGallery',
  components: { ImagePlaceholder },
  data() { return { images: {} } },
  created() {
    getClubData().then(data => { this.images = data.images })
  }
}
</script>

<style scoped>
.gallery-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; }
@media (max-width: 720px) { .gallery-grid { grid-template-columns: 1fr; } }
</style>
