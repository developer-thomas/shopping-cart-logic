// criar item com subtotal de acordo com a quantidade de itens
async function createItem(name, price, quantity) {
  return {
    name,
    price,
    quantity,
    subtotal: price * quantity,
  };
}

export { createItem };
