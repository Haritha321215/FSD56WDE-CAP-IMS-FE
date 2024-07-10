// import React from "react";
import { useState } from "react";
function AddPurchageOrder({ onAddPurchageOrder, selected }) {
  const [newPord, setNewPord] = useState({ selected });
  console.log(selected);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPord({ ...newPord, [name]: value });
  };

  const handleSubmit = (e) => {
    // prevent the default form submission
    e.preventDefault();

    console.log(newPord);
    onAddPurchageOrder(newPord);
    setNewPord({ vendor: "", product: "", quantity:"", unitPrice:"" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="col-sm-12 col-md-12 col-lg-md d-flex flex-row align-items-center justify-content-between m-1">
          <div className="mr-1">
            <input
              type="text"
              name="vendor"
              placeholder="Vendor"
              value={newPord.vendor}
              onChange={handleChange}
            />
          </div>
          <div className="mr-1">
            <input
              type="text"
              name="product"
              placeholder="Product"
              value={newPord.product}
              onChange={handleChange}
            />
          </div>
          <div className="mr-1">
            <input
              type="text"
              name="quantity"
              placeholder="Quantity"
              value={newPord.quantity}
              onChange={handleChange}
            />
          </div>
          <div className="mr-1">
            <input
              type="text"
              name="unitPrice"
              placeholder="Unit Price"
              value={newPord.unitPrice}
              onChange={handleChange}
            />
          </div>
          {selected ? (
            <button
              className="mr-1 btn btn-outline-primary btn-sm"
              type="submit"
            >
              update Purchace Order
            </button>
          ) : (
            <button
              className="mr-1 btn btn-outline-primary btn-sm"
              type="submit"
            >
              Add Purchage Order
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default AddPurchageOrder;
