const cart = [];

// ✔ adicionar item ao carrinho
async function addItem(userCart, item) {
  userCart.push(item);
}

// deleter item do carrinho
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => {
    return item.name === name;
  });

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

// remover um item
async function removeItem(userCart, item) {
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  // caso não encontre o item
  if (indexFound === -1) {
    console.log("Item não encontrado");
  }

  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity--;
    return;
  } else {
    userCart.splice(indexFound, 1);
    return;
  }
}

// calcular o total
async function calculateTotal(userCart) {
  const totalValue = userCart.reduce((acc, cur) => {
    return acc + cur.subtotal;
  }, 0);
  console.log(`Valor total: ${totalValue}`);
}

async function displayCart(userCart) {
  console.log("\n=== CARRINHO DE COMPRAS ===");
  userCart.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal: ${item.subtotal} `);
  });
  console.log("\n");
}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart };
