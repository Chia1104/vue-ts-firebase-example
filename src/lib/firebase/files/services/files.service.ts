import { storage } from "../../config";
import { ref, getDownloadURL, list } from "firebase/storage";

export const getImage = async (imageUrl: string): Promise<string> => {
  try {
    return await getDownloadURL(
      ref(storage, `gs://vue-auth-example-b8ad7.appspot.com/${imageUrl}`)
    );
  } catch (e) {
    console.debug("Firebase file service getImage", e);
    return "";
  }
};

export const getListImageUrl = async (category: string) => {
  try {
    const listRef = ref(
      storage,
      `gs://vue-auth-example-b8ad7.appspot.com/${category}`
    );
    const l = await list(listRef, { maxResults: 10 });
    const urlPromises = l.items.map((item) =>
      getDownloadURL(
        ref(
          storage,
          `gs://vue-auth-example-b8ad7.appspot.com/${category}/${item.name}`
        )
      )
    );
    return Promise.all(urlPromises);
  } catch (e) {
    console.debug("Firebase file service getListImageUrl", e);
    return [];
  }
};
