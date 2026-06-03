import { COMMON_DATA } from "./common/common"
import { HOME_PAGE_DATA } from "./pages/home"
import { ABOUT_PAGE_DATA } from "./pages/about"
import { CONSULTATION_PAGE_DATA } from "./pages/book-consultancy"



export const PAGE_DATA = {
  home: {
    ...HOME_PAGE_DATA
  },
  about: ABOUT_PAGE_DATA,
  consultation: CONSULTATION_PAGE_DATA,
  common: {
    sidebar: COMMON_DATA.sidebar,
    navbar: COMMON_DATA.navbar,
    topFooter: COMMON_DATA.topFooter,
    bottomFooter: COMMON_DATA.bottomFooter
  }
}