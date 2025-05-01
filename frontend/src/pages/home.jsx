import React from "react";
import Header from "../components/header";

const HomePage = () => {
  return (
    <div className="font-sans text-gray-200 bg-gray-900">
      <header className="bg-gray-800 text-white py-10">
        <Header />
        <div className="pt-16">
          <h1 className="text-5xl font-bold text-center">Welcome to Our Online Store</h1>
          <p className="text-center mt-4 text-xl">Your one-stop shop for all your needs!</p>
        </div>
      </header>

      <main className="mt-12 px-6">
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Why Shop With Us?</h2>
          <p className="text-lg text-gray-400 mb-8">
            We provide high-quality products at unbeatable prices, with fast and reliable delivery.
          </p>
          <ul className="text-left max-w-2xl mx-auto space-y-4">
            <li className="flex items-start">
              <span className="text-blue-400 text-2xl mr-4">✔</span>
              <p className="text-lg text-gray-400">Wide selection of products to meet all your needs.</p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 text-2xl mr-4">✔</span>
              <p className="text-lg text-gray-400">Affordable prices with regular discounts and promotions.</p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 text-2xl mr-4">✔</span>
              <p className="text-lg text-gray-400">Fast and reliable shipping to your doorstep.</p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 text-2xl mr-4">✔</span>
              <p className="text-lg text-gray-400">24/7 customer support to assist you anytime.</p>
            </li>
          </ul>
        </section>
      </main>

      <footer className="mt-12 py-6 bg-gray-800 text-center text-sm text-gray-400">
        <p>&copy; 2025 Online Store. All rights reserved.</p>
        <p>Contact us: support@onlinestore.com</p>
      </footer>
    </div>
  );
};

export default HomePage;