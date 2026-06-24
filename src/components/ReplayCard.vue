<template>
  <article class="replay-card card">
    <p>{{ replay.match }}</p>
    <h3>{{ replay.title }}</h3>
    <span>{{ replay.desc }}</span>
    <a :href="replay.url" target="_blank" rel="noopener">打开回放入口</a>
  </article>
</template>

<script>
export default {
  name: 'ReplayCard',
  props: { replay: { type: Object, required: true } }
}
</script>

<style scoped>
.replay-card { min-height: 238px; padding: 26px; display: flex; flex-direction: column; border-top: 7px solid var(--scarlet); }
.replay-card:nth-child(2) { transform: translateY(18px); }
p { margin: 0; color: var(--gold); font-family: var(--display-font); font-weight: 900; }
h3 { margin: 12px 0 8px; color: #fff; font-family: var(--display-font); font-size: 25px; line-height: 1.16; text-shadow: 3px 3px 0 rgba(166, 28, 40, 0.62); }
span { color: rgba(255, 255, 255, 0.68); line-height: 1.7; }
a { margin-top: auto; align-self: flex-start; color: var(--gold); font-weight: 900; text-decoration: none; }
a::after { content: " /"; color: var(--scarlet); }
a:hover { color: #fff; }
@media (max-width: 860px) { .replay-card:nth-child(2) { transform: none; } }
</style>
