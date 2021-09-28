import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { Dia } from '@fortawesome/free-regular-svg-icons'
import {
  faQuestionCircle as faQuestionCircleSolid,
  faProjectDiagram,
  faShareAlt,
  faTimes,
  faFlag,
  faCheck,
  faTools
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faQuestionCircleSolid,
  faProjectDiagram,
  faShareAlt,
  faTimes,
  faFlag,
  faCheck,
  faTools
)

function MyApp({ Component, pageProps }) {
  return (
  <div>
    <Component {...pageProps} />
  </div>
  )
}

export default MyApp
