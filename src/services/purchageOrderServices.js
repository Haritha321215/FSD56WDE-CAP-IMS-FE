import { protectedInstance } from "./instance";

const purchageOrderServices = {
  getPurchageOrders: async () => {
    try {
      return protectedInstance.get("/purchageorders");
    } catch (error) {
      throw new Error("Error fetching purchageorders");
    }
  },
  addPurchageOrder: async (vendorName, productName, quantity, unitPrice) => {
    try {
      return protectedInstance.post("/purchageorders/addpurchageOrder", {
        vendorName: vendorName,
        productName: productName,
        quantity: quantity,
        unitPrice: unitPrice,
      });
    } catch (error) {
      throw new Error("Error in adding purchageOrder");
    }
    // make a POST request to the register endpoint
  },
  updatePurchageOrder: async (
    vendor,
    product,
    quantity,
    unitPrice,
    totalPrice,
    purchageOrderId
  ) => {
    try {
      return protectedInstance.put(`/purchageorders/${purchageOrderId}`, {
        vendor: vendor,
        product: product,
        quantity: quantity,
        unitPrice: unitPrice,
        totalPrice: totalPrice,
      });
    } catch (error) {
      throw new Error("Error in adding addpurchageOrder");
    }
  },
  deletePurchageOrder: async (purchageOrderId) => {
    try {
      return protectedInstance.delete(`/purchageorders/${purchageOrderId}`);
    } catch (error) {
      throw new Error("Error in deleting purchageOrder");
    }
  },
};

export default purchageOrderServices;
