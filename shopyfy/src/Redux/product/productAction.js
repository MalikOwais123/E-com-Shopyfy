import { storage, serverTimestamp, firestore } from "./../../Firebase/Firebase";
import { v4 as uuid } from "uuid";
import { SET_PRODUCTS } from "./productConstant";
import { arrangeProducts } from "../../Utility/products";
export var uploadProduct = (productObj) => async () => {
  try {
    // 1-> send file to storage and get download url
    // we pass file name and it must be unique
    var productImgRef = storage.child(`products/img-${uuid()}`);
    var fileListener = productImgRef.put(productObj.coverImage);
    /*
        fileListener.on(
            "event_type",
            callback-> progress of uploading,
            callback-> error,
            callback-> trriger after successfully uploaded
            )
    */
    fileListener.on(
      "state_changed",
      (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        console.log(error);
      },
      async () => {
        //here we got download url
        var downloadURL = await productImgRef.getDownloadURL();

        // 2-> modify productObj with coverimage url and createdAt
        productObj.coverImage = downloadURL;
        productObj.createdAt = serverTimestamp();
        productObj.cost = parseFloat(productObj.cost);
        productObj.quantity = parseInt(productObj.quantity);
        console.log(productObj);

        // 3-> create doc in firestore

        await firestore.collection("products").add(productObj);
      }
    );
  } catch (error) {
    console.log(error);
  }
};

// Functiond for making products as category wise



// Action for product fetching

export var fetchProducts = () => async (dispatch) => {
  try {
    var query = await firestore.collection("products").get();
    var products = [];
    query.docs.forEach((doc) => {
      products.push(doc.data());
    });
    // var categories = arrangeProducts(products);
    // console.log(categories);
    dispatch({
      type:SET_PRODUCTS,
      payload  :{
        products //array
      }
    })
  } catch (error) {
    console.log(error);
  }
};
