// HomePage.js
import React, { useState } from 'react';
import HeroSection from '../Hero Section/HeroSection';
import ProductSection from '../ProductSection/ProductSection';
import Data from '../local data/Data.json';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  //searchQuery لنخزن فيها القيمة التي ادخلها المستخدم ولنبحث عنها 
  //setSearchQuery التابع المسؤول لتخزين القيمة تلك
  const [filteredProducts, setFilteredProducts] = useState([]);

  const bestPriceProductsData = Data.bestPriceProductsData;

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const filtered = bestPriceProductsData.filter(product =>
      product.name.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  return (
    <>
      <HeroSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={handleSearch}
      />
      <ProductSection
        title="Best Prices Today"
        products={filteredProducts.length > 0 ? filteredProducts : bestPriceProductsData}
        // هنا نمرر لكومبونينت الذي يعرض المنتجات فقط التي تم البحث عنها اذا تم البحث عنها
      />
    </>
  );
};

export default HomePage;

