import purchageOrderServices from "../../services/purchageOrderServices";
import { useLoaderData } from "react-router-dom";
import AddPurchageOrder from "./AddPurchageOrder";
import { useState } from "react";

export const loader = async () => {
  const purchageorders = await purchageOrderServices.getPurchageOrders();

  return { purchageorders };
};
function PurchageOrders() {
  const { purchageorders } = useLoaderData();
  const [pords, setPords] = useState(purchageorders.data.purchageOrders);
  const [selectedPurchageOrder, setSelectedPurchageOrder] = useState(0);

  const handleAddPurchageorders = async (newPords) => {
    purchageOrderServices
      .addPurchageOrder(
        newPords.vendor,
        newPords.product,
        newPords.quantity,
        newPords.unitPrice
      )
      .then((response) => {
        setPords([...pords, response.data.purchageOrders]);
        alert("Added purchage order successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("Failed adding Purchageorders");
      });
  };
  const handleEditPurchageorders = async (updatedPOrd) => {
    purchageOrderServices
      .updatePurchageOrder(
        updatedPOrd.vendor,
        updatedPOrd.product,
        updatedPOrd.quantity,
        updatedPOrd.unitPrice,
        selectedPurchageOrder._id
      )
      .then((response) => {
        const updatedPurchageOrders = pords.map((pord) =>
          pord._id === selectedPurchageOrder._id ? response.data.purchageOrder : pord
        );
        setPords(updatedPurchageOrders);
        console.log(updatedPurchageOrders);
        alert("Edited purchage order successful");
        setSelectedPurchageOrder(null);
      })
      .catch((error) => {
        console.log(error);
        alert("Failed editing purchage order");
      });
  };

  const handleDeletePurchageOrder = async (purchageOrderId) => {
    // console.log(purchageOrderId);
    try {
      await purchageOrderServices.deletePurchageOrder(purchageOrderId);
      alert("Deleted purchageOrder successful");
      setPords(pords.filter((p) => p._id !== purchageOrderId));
    } catch (error) {
      console.error("Error deleting purchageOrder", error);
    }
  };

  return (
    <div>
      <div>
        {selectedPurchageOrder ? (
          <AddPurchageOrder
            onAddPurchageOrder={handleEditPurchageorders}
            selected={selectedPurchageOrder}
          />
        ) : (
          <AddPurchageOrder
            onAddPurchageOrder={handleAddPurchageorders}
            selected={selectedPurchageOrder}
          />
        )}
      </div>
      <div className="table-responsive m-2">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Vendor</th>
              <th scope="col">Product</th>
              <th scope="col">Quantity</th>
              <th scope="col">UnitPrice</th>
              <th scope="col">Total Price</th>
              <th scope="col">Order status</th>
            </tr>
          </thead>
          <tbody>
            {pords.length > 0 ? (
              pords.map((purchageorder, index) => (
                <tr key={purchageorder._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{purchageorder.vendor}</td>
                  <td>{purchageorder.product}</td>
                  <td>{purchageorder.quantity}</td>
                  <td>{purchageorder.unitPrice}</td>
                  <td>{purchageorder.totalPrice}</td>
                  <td>{purchageorder.orderStatus}</td>
                  <td>
                    <div className="d-flex">
                      <button
                        onClick={() => setSelectedPurchageOrder(purchageorder)}
                        className="btn btn-warning btn-sm m-1"
                      >
                        edit
                      </button>
                      <button
                        onClick={() =>
                          handleDeletePurchageOrder(purchageorder._id)
                        }
                        className="btn btn-danger btn-sm m-1"
                      >
                        delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <li>No purchage orders found</li>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PurchageOrders;
