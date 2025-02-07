import React, { useState, useEffect } from "react";
import "./ProductsAdmin.css";

const ProductsAdmin = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    stock: "",
    description: "",
    image: "",
  });
  const [editProduct, setEditProduct] = useState(null);

  // Load products from localStorage on component mount
  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    console.log("Loaded products from localStorage:", savedProducts); // Debugging log
    setProducts(savedProducts);
  }, []);

  // Save products to localStorage whenever they change
  useEffect(() => {
    if (products.length > 0) {
      console.log("Saving products to localStorage:", products); // Debugging log
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, [products]);

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.stock || !newProduct.description) {
      alert("Please fill in all fields.");
      return;
    }
    const newId = products.length ? products[products.length - 1].id + 1 : 1;
    const newProductData = { id: newId, ...newProduct };
    const updatedProducts = [...products, newProductData];
    setProducts(updatedProducts);  // Updates the state, triggering the `useEffect` to save to `localStorage`
    setNewProduct({ name: "", price: "", stock: "", description: "", image: "" });
  };

  const handleEditProduct = (product) => {
    setEditProduct(product);
  };

  const handleSaveEdit = () => {
    const updatedProducts = products.map((product) =>
      product.id === editProduct.id ? editProduct : product
    );
    setProducts(updatedProducts);  // Updates the state, triggering the `useEffect` to save to `localStorage`
    setEditProduct(null);
  };

  const handleDeleteProduct = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      const updatedProducts = products.filter((product) => product.id !== id);
      setProducts(updatedProducts);  // Updates the state, triggering the `useEffect` to save to `localStorage`
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProduct({ ...newProduct, image: reader.result });
        if (editProduct) {
          setEditProduct({ ...editProduct, image: reader.result });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (editProduct) {
      setEditProduct({ ...editProduct, [name]: value });
    } else {
      setNewProduct({ ...newProduct, [name]: value });
    }
  };

  return (
    <div className="products-admin">
      <h1 className="products-admin-title">Manage Products</h1>

      {/* Add Product Form */}
      <div className="add-product-form">
        <h2>Add New Product</h2>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={newProduct.price}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="stock"
            placeholder="Stock Quantity"
            value={newProduct.stock}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            placeholder="Product Description"
            value={newProduct.description}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input type="file" onChange={handleImageUpload} />
          {newProduct.image && <img src={newProduct.image} alt="product preview" width="100" />}
        </div>
        <button onClick={handleAddProduct} className="add-product-button">
          Add Product
        </button>
      </div>

      {/* Edit Product Form */}
      {editProduct && (
        <div className="edit-product-form">
          <h2>Edit Product</h2>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={editProduct.name}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={editProduct.price}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              name="stock"
              placeholder="Stock Quantity"
              value={editProduct.stock}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <textarea
              name="description"
              placeholder="Product Description"
              value={editProduct.description}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input type="file" onChange={handleImageUpload} />
            {editProduct.image && <img src={editProduct.image} alt="product preview" width="100" />}
          </div>
          <button onClick={handleSaveEdit} className="save-edit-button">
            Save Changes
          </button>
        </div>
      )}

      {/* Products Table */}
      <table className="products-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Description</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>${Number(product.price).toFixed(2)}</td>
              <td>{product.stock}</td>
              <td>{product.description}</td>
              <td><img src={product.image} alt="product" width="50" /></td>
              <td>
                <button
                  onClick={() => handleEditProduct(product)}
                  className="action-button edit-button"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="action-button delete-button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsAdmin;
