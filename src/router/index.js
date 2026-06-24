import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ActivitiesView from '../views/ActivitiesView.vue'
import ActivityOverview from '../views/ActivityOverview.vue'
import ActivityGallery from '../views/ActivityGallery.vue'
import ReplaysView from '../views/ReplaysView.vue'
import JoinView from '../views/JoinView.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    { path: '/', name: 'home', component: HomeView },
    {
      path: '/activities',
      component: ActivitiesView,
      children: [
        { path: '', name: 'activities', component: ActivityOverview },
        { path: 'gallery', name: 'activityGallery', component: ActivityGallery }
      ]
    },
    { path: '/replays', name: 'replays', component: ReplaysView },
    { path: '/join', name: 'join', component: JoinView },
    { path: '*', redirect: '/' }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})
