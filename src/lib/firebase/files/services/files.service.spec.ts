import { describe, expect, it } from 'vitest'
import { getListImageUrl } from "@chia/lib/firebase/files/services/files.service";

describe('getListImageUrl', () => {
    it('testing', async function () {
        const category = 'banner';
        const listUrl = await getListImageUrl(category);
        expect(listUrl).toEqual([]);
    });
})
