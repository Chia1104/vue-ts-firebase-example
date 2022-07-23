export const categorySelectedAction = (context: any, isSelected: boolean) => {
  context.commit("categorySelected", isSelected);
};

export const productCategoryAction = (context: any, category: string) => {
  context.commit("productCategory", category);
};
