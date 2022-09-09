import { getListImageUrl } from "@chia/helpers/firebase/files/services";

export const getBannerAction = async (
  context: any,
  { category }: { category: string }
) => {
  context.commit("beginGetBanner");
  try {
    const listUrl = await getListImageUrl(category);
    context.commit("successGetBanner", listUrl);
  } catch (e: any) {
    context.commit("failGetBanner", e.message);
  }
};
