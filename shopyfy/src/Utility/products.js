export var arrangeProducts = (productsArr) => {
  // initiallize categry array
  var categories = [];
  var categoryName;
  var isCategoryExist;
  var newCategory;
  // loop over products
  for (var product of productsArr) {
    categoryName = product.category;
    // loop over categories and check if lie or not
    isCategoryExist = categories.some(
      (categoryObj) => categoryObj.category === categoryName
    );
    if (isCategoryExist) {
      // Just push the product to the existing product fields in categories array
      categories = categories.map((categoryObj) => {
        if (categoryObj.category === categoryName) {
          categoryObj.products.push(product);
          console.log("Already Exist!!");
          return categoryObj;
        } else {
          return categoryObj;
        }
      });
    } else {
      // Make new category and added products
      newCategory = {
        category: product.category,
        products: [product],
      };
      categories.push(newCategory);
    }
  }
  return categories;
};
