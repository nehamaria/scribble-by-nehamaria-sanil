export const reorderCategories = (tempPositions, categoryList) => {
  return categoryList.sort((category1, category2) => {
    return (
      tempPositions.indexOf(category1.id) - tempPositions.indexOf(category2.id)
    );
  });
};
