import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { u as useHead } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:path';
import 'pinia';
import 'vue-router';
import 'tailwindcss/colors';
import '@iconify/vue';
import 'reka-ui';
import '@vueuse/core';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      bodyAttrs: {
        class: "product-details-page"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "auth-wrapper-main" }, _attrs))}><h1 class="auth-heading-primary">Hi, kindly sign in.</h1><div class="container"><div class="row"><div class="col-lg-6 offset-lg-3"><div class="auth-card-container"><div class="auth-section-title">Your Account</div><button class="auth-social-button"><img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" class="auth-social-icon"> Continue with Google </button><button class="auth-social-button"><img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" class="auth-social-icon"> Continue with Facebook </button><div class="auth-separator-line">or</div><form><div class="auth-field-group"><label class="auth-field-label">Email</label><input type="email" class="auth-input-field" required></div><div class="auth-field-group"><label class="auth-field-label">Password</label><input type="password" class="auth-input-field" required></div><button type="submit" class="auth-submit-button"> Sign In </button><div class="auth-help-links"><a href="#" class="auth-link-item">Forgot password?</a><a href="#" class="auth-link-item">Don&#39;t have a password?</a><a href="#" class="auth-link-item">Want to create a new account?</a></div></form></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-63Wj05X0.mjs.map
