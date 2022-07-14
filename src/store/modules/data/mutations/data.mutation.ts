import { DataState } from "@chia/store/modules/data/state";

export const categorySelected = (state: DataState, payload: boolean) => {
    state.categorySelected = payload;
}
