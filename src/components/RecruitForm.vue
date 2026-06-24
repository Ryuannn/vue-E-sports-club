<template>
  <form class="recruit-form card" @submit.prevent="submitForm">
    <label>
      姓名
      <input v-model.trim="form.name" type="text" placeholder="例如：张同学">
    </label>

    <label>
      专业班级
      <input v-model.trim="form.className" type="text" placeholder="例如：会计 2401">
    </label>

    <label>
      想加入的方向
      <select v-model="form.role">
        <option value="求生组">求生组</option>
        <option value="监管组">监管组</option>
        <option value="运营组">运营组</option>
        <option value="解说组">解说组</option>
      </select>
    </label>

    <label>
      常用角色或想说的话
      <textarea v-model.trim="form.message" rows="4" placeholder="写下你的本命角色、段位、想参加的活动"></textarea>
    </label>

    <button class="btn" type="submit" :disabled="loading">{{ loading ? '提交中...' : '提交报名意向' }}</button>
  </form>
</template>

<script>
export default {
  name: 'RecruitForm',
  props: { loading: Boolean },
  data() { return { form: { name: '', className: '', role: '求生组', message: '' } } },
  methods: {
    submitForm() {
      if (!this.form.name || !this.form.className) {
        this.$emit('invalid', '请先填写姓名和专业班级')
        return
      }
      this.$emit('submit-form', Object.assign({}, this.form))
      this.form = { name: '', className: '', role: '求生组', message: '' }
    }
  }
}
</script>

<style scoped>
.recruit-form {
  padding: 28px;
  display: grid;
  gap: 18px;
  border-left: 4px solid var(--gold);
}
label {
  display: grid;
  gap: 8px;
  color: rgba(255, 255, 255, 0.82);
  font-family: var(--display-font);
  font-size: 14px;
  font-weight: 900;
}
input,
select,
textarea {
  width: 100%;
  border: 1px solid rgba(200, 164, 96, 0.24);
  border-radius: 2px;
  background: rgba(10, 10, 14, 0.72);
  color: #fff;
  outline: none;
}
input,
select { height: 44px; padding: 0 12px; }
textarea { resize: vertical; padding: 12px; }
input::placeholder,
textarea::placeholder { color: rgba(255, 255, 255, 0.32); }
input:focus,
select:focus,
textarea:focus {
  border-color: var(--scarlet);
  box-shadow: 0 0 0 3px rgba(166, 28, 40, 0.22);
}
button:disabled { opacity: 0.68; cursor: wait; }
</style>
