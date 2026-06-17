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
import { CONTACT_PAGE_DATA } from "./pages/contact"
import { DISCLAIMER_PAGE_DATA } from "./pages/disclaimer"
import { GRIEVANCE_REDRESSAL_PAGE_DATA } from "./pages/grievance"
import { HOW_VCN_WORKS } from "./pages/how-vcn-works"
import { PRIVACY_POLICY_PAGE_DATA } from "./pages/privacy"
import { REFER_EARN_PAGE_DATA } from "./pages/refer-earn"
import { SHIPPING_DELIVERY_PAGE_DATA } from "./pages/shipping-policy"
import { TERMS_CONDITIONS_PAGE_DATA } from "./pages/terms-condition"



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
  contact : CONTACT_PAGE_DATA,
  disclaimer : DISCLAIMER_PAGE_DATA,
  grievanceRedressal : GRIEVANCE_REDRESSAL_PAGE_DATA,
  howVcnWorks : HOW_VCN_WORKS,
  privacy: PRIVACY_POLICY_PAGE_DATA,
  referEarn: REFER_EARN_PAGE_DATA,
  shippingDelivery: SHIPPING_DELIVERY_PAGE_DATA,
  termsConditions: TERMS_CONDITIONS_PAGE_DATA,
  common: {
    sidebar: COMMON_DATA.sidebar,
    navbar: COMMON_DATA.navbar,
    topFooter: COMMON_DATA.topFooter,
    bottomFooter: COMMON_DATA.bottomFooter
  }
}