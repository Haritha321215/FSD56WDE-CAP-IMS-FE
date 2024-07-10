import { protectedInstance } from "./instance";

const reportsServices = {
  getCurrentStock: async () => {
    try {
      return protectedInstance.get("/reports/currentStock");
    } catch (error) {
      throw new Error("Error fetching categories");
    }
  },
  getCurrentStockValue: async () => {
    try {
      return protectedInstance.get("/reports/currentStockValue");
    } catch (error) {
      throw new Error("Error fetching categories");
    }
  },
 
};

export default reportsServices;
