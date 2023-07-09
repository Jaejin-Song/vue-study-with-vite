import type { InjectionKey } from 'vue'
import type { App, Plugin } from 'vue'

export type Opt = Record<string, any>
export type Ii18n = (key: string) => Opt

export const i18nKey: InjectionKey<Opt> = Symbol('i18n')

const plugin: Plugin = {
  install(app: App, options: Opt) {
    const i18n: Ii18n = (key): Opt => {
      return key.split('.').reduce((o, i) => {
        if (o) return o[i]
      }, options)
    }

    app.config.globalProperties.$translate = i18n
    app.provide(i18nKey, options)
  }
}

export default plugin

// 전역 속성 확장
// vue파일 내에서 플러그인을 사용할때
// 모듈 증강을 하지 않으면 타입을 사용할 수 없음
declare module 'vue' {
  interface ComponentCustomProperties {
    $translate: Ii18n
  }
}
