import React, { useEffect, useState } from "react";
import Header from "../components/header";
import { fetchItems } from "../actions/User.actions";

const BrowsePage = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadItems = async () => {
      const response = await fetchItems(15);
      if (response.success) {
        setItems(response.data);
      } else {
        setError(response.data?.message || "Failed to load items.");
      }
    };

    loadItems();
  }, []);

  return (
    <div className="font-sans text-gray-200 bg-gray-900 min-h-screen">
      <header className="bg-gray-800 text-white py-4">
        <Header />
        <div className="pt-16">
          <h1 className="text-5xl font-bold text-center">Browse Items</h1>
        </div>
      </header>

      <main className="mt-8 px-6">
        {error && <p className="text-red-500 text-center">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="p-4 bg-gray-800 rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={item.image_url}
                alt={item.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="mt-2 text-gray-400">Price: ${item.price}</p>
              <p className="mt-1 text-gray-400">Stock: {item.stock}</p>
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-300"
                onClick={() => alert(`You clicked on ${item.name}`)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </main>

      <footer className="mt-12 py-4 bg-gray-800 text-center text-sm text-gray-400">
        &copy; 2025 Browse Page. All rights reserved.
      </footer>
    </div>
  );
};

export default BrowsePage;