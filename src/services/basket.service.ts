import { ItemCatalog, ItemName } from "../constants/itemDetails.constant";
import { formatToRupees } from "../utils/formatRupee.util";

class BasketService {

  /**
   * Returns total price of the basket 
   * @param items Items present in the basket
   * @returns String value of the total price of the basket in Rupees
   */
  public calculateTotal(items: ItemName[]): string {
    const counts: Record<ItemName, number> = {
      Apple: 0,
      Banana: 0,
      Melon: 0,
      Lime: 0,
    };

    for (const item of items) {
      counts[item]++;
    }

    let total = 0;

    total += counts.Apple * ItemCatalog.Apple;
    total += counts.Banana * ItemCatalog.Banana;
    total += Math.ceil(counts.Melon / 2) * ItemCatalog.Melon;
    total += (counts.Lime - Math.floor(counts.Lime / 3)) * ItemCatalog.Lime;

    return formatToRupees(total);
  }
  
}

export default BasketService;