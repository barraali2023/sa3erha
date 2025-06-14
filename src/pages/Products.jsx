import React, { useState, useEffect } from 'react';
import ProductSection from '../components/ProductSection/ProductSection';
import data from '../components/local data/Data.json';

const Products = () => {
  const allProducts = data.bestPriceProductsData;

  // ✅ حالات البحث والفلترة
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortByPrice, setSortByPrice] = useState('');
  const [categories, setCategories] = useState([]);

  // ✅ استخرج التصنيفات من البيانات
  useEffect(() => {
    const uniqueCategories = [...new Set(allProducts.map(item => item.category))];
    setCategories(uniqueCategories);
  }, [allProducts]);

  // ✅ دالة لإيجاد أقل سعر من المتاجر
  const getMinStorePrice = (stores) =>
    Math.min(...stores.map((s) => parseFloat(s.price.replace(/[^\d.]/g, ''))));

  // ✅ تصفية المنتجات حسب البحث والفلترة
  const filteredProducts = allProducts
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((product) =>
      selectedCategory ? product.category === selectedCategory : true
    )
    .sort((a, b) => {
      const priceA = getMinStorePrice(a.stores);
      const priceB = getMinStorePrice(b.stores);
      if (sortByPrice === 'high') return priceB - priceA;
      if (sortByPrice === 'low') return priceA - priceB;
      return 0;
    });

  return (
    <div style={{ backgroundColor: 'var(--main-bg)', minHeight: '100vh', padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', color: 'var(--text-primary)', marginBottom: '2rem' }}>
        ALL Products
      </h2>

      {/* ✅ واجهة البحث والفلترة */}
      <div style={{
        backgroundColor: 'var(--card-bg)',
        padding: '2rem',
        borderRadius: '16px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
        maxWidth: '800px',
        margin: '0 auto 3rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        {/* حقل البحث */}
        <input
          type="text"
          placeholder="🔍 ابحث عن منتج..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            padding: '12px',
            borderRadius: '10px',
            border: '1px solid #334155',
            backgroundColor: '#0f172a',
            color: 'white',
            fontSize: '1rem'
          }}
        />

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {/* التصنيف */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '10px',
              border: '1px solid #334155',
              backgroundColor: '#0f172a',
              color: 'white'
            }}
          >
            <option value="">         Categories               </option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          {/* السعر */}
          <select
            value={sortByPrice}
            onChange={(e) => setSortByPrice(e.target.value)}
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '10px',
              border: '1px solid #334155',
              backgroundColor: '#0f172a',
              color: 'white'
            }}
          >
            <option value="">price sort</option>
            <option value="low"> low to higth</option>
            <option value="high">      high to low   </option>
          </select>
        </div>
      </div>

      {/* ✅ عرض المنتجات */}
      <ProductSection
        title="النتائج"
        products={filteredProducts}
         showBestPriceBanner={false}
      />
    </div>
  );
};

export default Products;
