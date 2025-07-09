import BasketService from "../src/services/basket.service";

describe("BasketService", () => {
  const basketService = new BasketService();

  it("1. Simple basket", () => {
    expect(basketService.calculateTotal(["Apple", "Banana"])).toBe("Rs. 0.55");
  });

  it("2. Basket with Melons (Buy One Get One)", () => {
    expect(basketService.calculateTotal(["Melon", "Melon"])).toBe("Rs. 0.50");
  });

  it("3. Basket with Limes (Buy Three For Price of Two)", () => {
    expect(basketService.calculateTotal(["Lime", "Lime", "Lime"])).toBe("Rs. 0.30");
  });

  it("4. Complex basket with mutiple items", () => {
    expect(basketService.calculateTotal(["Apple", "Melon", "Melon", "Lime", "Lime", "Lime", "Banana"])).toBe("Rs. 1.35");
  });
});
