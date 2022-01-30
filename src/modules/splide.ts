import VueSplide from '@splidejs/vue-splide'
import type { UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
// do something
  app.use(VueSplide)
}
