export { default as Story } from './story'
export { default as Stories } from './stories'

export { default as S0 } from './0'
export { default as S1 } from './1'
export { default as S2 } from './2'
export { default as S3 } from './3'
export { default as S4 } from './4'
export { default as S5 } from './5'
export { default as S6 } from './6'
export { default as S7 } from './7'
export { default as S8 } from './8'
export { default as S9 } from './9'

if (module.hot) {
  module.hot.accept((err) => {
    if (err) {
      console.error('HMR', err)
    }
  })
}
