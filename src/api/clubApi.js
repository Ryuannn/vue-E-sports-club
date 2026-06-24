import axios from 'axios'

const http = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 5000
})

export function getClubData() {
  return http.get('api/club.json').then(res => res.data)
}

export function submitJoinForm(form) {
  const records = JSON.parse(localStorage.getItem('joinForms') || '[]')
  const record = Object.assign({ id: Date.now(), createdAt: new Date().toLocaleString() }, form)
  records.unshift(record)
  localStorage.setItem('joinForms', JSON.stringify(records))
  return Promise.resolve({ code: 200, message: '报名信息已提交到模拟后端', data: record })
}
