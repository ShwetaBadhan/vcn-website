import { COMMON_DATA } from "./common/common"
import { HOME_PAGE_DATA } from "./pages/home"
import { ABOUT_PAGE_DATA } from "./pages/about"
import { CONSULTATION_PAGE_DATA } from "./pages/book-consultancy"
import { ACCESSIBILITY_PAGE_DATA } from "./pages/accessibility"
import { DISEASE_BUNDLES_PAGE_DATA } from "./pages/all-disease-bundles"
import { PRODUCTS_PAGE_DATA } from "./pages/all-products"
import { BLOGS_PAGE_DATA } from "./pages/blog"
import { BLOG_DETAIL_DATA } from "./pages/blog-details"
import { BUNDLE_DETAILS_PAGE_DATA } from "./pages/bundle-details"
import { CANCELLATION_REFUND_PAGE_DATA } from "./pages/cancellation-and-refund"
import { CART_PAGE_DATA } from "./pages/cart"
import { CHECKOUT_PAGE_DATA } from "./pages/checkout"

export const PAGE_DATA = {
  home: {
    ...HOME_PAGE_DATA
  },
  about: ABOUT_PAGE_DATA,
  consultation: CONSULTATION_PAGE_DATA,
  accessibility: ACCESSIBILITY_PAGE_DATA,
  bundles: DISEASE_BUNDLES_PAGE_DATA,
  products: PRODUCTS_PAGE_DATA,
  blogs: BLOGS_PAGE_DATA,
  blogDetails: BLOG_DETAIL_DATA,
  bundleDetails: BUNDLE_DETAILS_PAGE_DATA,
  cancellationRefund: CANCELLATION_REFUND_PAGE_DATA,
  cart:CART_PAGE_DATA,
  checkout : CHECKOUT_PAGE_DATA,
  common: {
    sidebar: COMMON_DATA.sidebar,
    navbar: COMMON_DATA.navbar,
    topFooter: COMMON_DATA.topFooter,
    bottomFooter: COMMON_DATA.bottomFooter
  }
}