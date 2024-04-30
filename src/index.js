import { createItem } from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];
const wishList = [];

// Criar dois itens que seram usados para adicionar ao carrinho
const item1 = await createItem("ferrari mini", 20.99, 3);
const item2 = await createItem("lamborguini mini", 39.99, 4);

// Adiciona esses dois itens ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
console.log(await cartService.removeItem(myCart, item2));
console.log(await cartService.removeItem(myCart, item1));
await cartService.displayCart(myCart);
await cartService.calculateTotal(myCart);

// await cartService.deleteItem(myCart, item2.name);

// await cartService.removeItem(myCart, 0);
