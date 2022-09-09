import { describe, expect, it } from "vitest";
import { getProduct, getProductsByCategory } from "./products.service";
import type { Product } from "@chia/shared/types/product";

describe("getProduct", () => {
  it("should return a product", async () => {
    const product = await getProduct("3GL1iqz471kto6zWQspD");
    expect(product).toEqual({
      ...product,
      name: "Product 1",
      price: 360,
    } as Product);
  });
});

describe("getProductsByCategory", () => {
  it("should return products", async () => {
    const products = await getProductsByCategory(["男裝", "女裝"]);
    expect(products).toEqual([]);
  });
});
