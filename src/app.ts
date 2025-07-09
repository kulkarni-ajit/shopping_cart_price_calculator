import { ItemName } from "./constants/itemDetails.constant";
import BasketService from "./services/basket.service";

const basketItems: ItemName[] = ["Apple", "Apple", "Banana", "Melon", "Melon", "Lime", "Lime", "Lime"];

const basketService = new BasketService();

const total = basketService.calculateTotal(basketItems);

console.log(`Total: ${total}`);