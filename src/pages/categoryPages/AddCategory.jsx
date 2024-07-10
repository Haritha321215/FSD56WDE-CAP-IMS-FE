// import React from "react";
import { useState } from "react";
function AddCategory({ onAddCategory, selected }) {
  const [newCat, setNewCat] = useState({ selected });
  console.log(selected);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCat({ ...newCat, [name]: value });
  };

  const handleSubmit = (e) => {
    // prevent the default form submission
    e.preventDefault();

    console.log(newCat);
    onAddCategory(newCat);
    setNewCat({ name: "", description: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="col-sm-12 col-md-12 col-lg-md d-flex flex-row align-items-center justify-content-between m-1">
          <div className="mr-1">
            <input
              type="text"
              name="name"
              placeholder="Category Name"
              value={newCat.name}
              onChange={handleChange}
            />
          </div>
          <div className="mr-1">
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={newCat.description}
              onChange={handleChange}
            />
          </div>
          {selected ? (
            <button
              className="mr-1 btn btn-outline-primary btn-sm"
              type="submit"
            >
              update Category
            </button>
          ) : (
            <button
              className="mr-1 btn btn-outline-primary btn-sm"
              type="submit"
            >
              Add Category
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default AddCategory;
