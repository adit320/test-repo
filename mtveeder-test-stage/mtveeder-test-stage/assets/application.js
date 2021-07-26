// Put your application javascript here
async function addAndOpenCart(id, quantity, properties) {
    await bloom.shoppingCart().add([{id: id, quantity: quantity, properties: properties || {}}]);
    await bloom.reloadCart();
    bloom.showCart();
}
