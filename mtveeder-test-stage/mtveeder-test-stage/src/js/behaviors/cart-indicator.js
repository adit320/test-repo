import {ready} from '../utilities';

function setCount(count) {
  const cartElement = document.getElementById('cart-counter');
  cartElement.classList.remove('hidden', 'flex');
  cartElement.innerHTML = count;
  if (count == 0) {
    cartElement.classList.add('hidden');
  } else {
    cartElement.classList.add('flex');
  }
}

async function onCartChange() {
  const cart = await bloom.shoppingCart().get();
  setCount(cart.item_count)
}

async function initialize() {
  await bloom.shoppingCart().onChange(onCartChange)
}

ready(initialize);