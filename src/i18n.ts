// src/i18n.ts
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import zhTW from './locales/zh-TW.json'

const i18n = createI18n({
  legacy: false, 
  locale: 'zh-TW', // 預設語言 (你想先顯示英文就寫 en，中文就寫 zh-TW)
  fallbackLocale: 'en', // 如果某個字沒翻譯到，預設退回的語言
  messages: {
    'en': en,
    'zh-TW': zhTW
  }
})

export default i18n