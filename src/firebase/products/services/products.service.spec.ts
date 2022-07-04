import { describe, expect, it } from 'vitest'
import { getProduct } from './products.service'
import type { Product } from "@chia/utils/types/product";

describe('getProduct', () => {
    it('should return a product', async () => {
        const product = await getProduct('3GL1iqz471kto6zWQspD')
        expect(product).toEqual({
            ...product,
            name: 'Product 1',
            price: 100,
        } as Product)
    })
})
