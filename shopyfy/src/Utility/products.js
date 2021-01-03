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

// _____________________________________________________________________________________________________________

// Algo for cart adding action when two or more are same
export var productAdditionInCart = (cartExistingProducts, newProduct) => {
  var isExists = cartExistingProducts.some(
    (cartExistingProduct) => cartExistingProduct.id === newProduct.id
  );
  if (!isExists) {
    return [...cartExistingProducts, { ...newProduct, quantity: 1 }];
  } else {
    return cartExistingProducts.map((cartExistingProduct) => {
      if (cartExistingProduct.id === newProduct.id) {
        return {
          ...cartExistingProduct,
          quantity: cartExistingProduct.quantity + 1,
        };
      } else {
        return cartExistingProduct;
      }
    });
  }
};

//  _____________________________________________________________________________________________________________
export var productRemovalFromCart = (cartExistingProducts, newProductId) => {
  // step1(find product from cart)
  var product = cartExistingProducts.find(
    (cartExistingProduct) => cartExistingProduct.id === newProductId
  );
  // step2 (check weather a product have quantity 0 or not)
  // If > 0 then simply decrement quantity for that product
  if (product) {
    if (product.quantity > 0) {
      return cartExistingProducts.map((cartExistingProduct) => {
        if (cartExistingProduct.id === newProductId) {
          return {
            ...cartExistingProduct,
            quantity: cartExistingProduct.quantity - 1,
          };
        } else {
          return cartExistingProduct;
        }
      });
    } else {
      return cartExistingProducts.filter(
        (cartExistingProduct) => cartExistingProduct.id !== newProductId
      );
    }
  } else {
    return cartExistingProducts;
  }
};

// _____________________________________________________________________________________________________________

// Delete product from cart
export var deleteProductFromCart = (cartExistingProducts, newProductId) => {
  // step1(find product from cart)
  var product = cartExistingProducts.find(
    (cartExistingProduct) => cartExistingProduct.id === newProductId
  );
  // Now we have to delete this product!
  if (product) {
    return cartExistingProducts.filter(
      (cartExistingProduct) => cartExistingProduct.id !== newProductId
    );
  } else {
    return cartExistingProducts;
  }
};
