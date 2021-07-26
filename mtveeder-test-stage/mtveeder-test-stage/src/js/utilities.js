export function ready(fn) {
  document.addEventListener('shopify:section:load', fn)
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}