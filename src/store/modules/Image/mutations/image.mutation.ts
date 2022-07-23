import type { ImageState } from "@chia/store/modules/Image/states";

export const beginGetBanner = (state: ImageState) => {
  state.banner.isLoading = true;
  state.banner.isError = false;
  state.banner.isSuccess = false;
  state.banner.error = "";
};

export const successGetBanner = (state: ImageState, payload: string[]) => {
  state.banner.isLoading = false;
  state.banner.isSuccess = true;
  state.banner.isError = false;
  state.banner.error = "";
  state.banner.listUrl = payload;
};

export const failGetBanner = (state: ImageState, payload: string) => {
  state.banner.isLoading = false;
  state.banner.isSuccess = false;
  state.banner.isError = true;
  state.banner.error = payload;
};
