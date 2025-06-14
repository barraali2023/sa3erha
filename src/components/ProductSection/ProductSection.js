//  إذا في نتائج بحث: يعرضها\إذا ما في: يعرض كل المنتجات\يستقبل products ويحولها إلى بطاقات


 import React from 'react';
import styles from './ProductSection.module.css'; // Import CSS Module
import ProductCard from '../ProductCard/ProductCard'; 
import { FaArrowRight } from 'react-icons/fa'; // Icon for the "View All" link

const ProductSection = ({ title, products }) => {
  // If products array is empty or not provided, you might want to render nothing or a message
  if (!products || products.length === 0) {
    return  <p>No products to display in this section.</p>;
  }

  return (
    <section className={styles.productSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <a href="#view-all" className={styles.viewAllLink}> {/* Placeholder link */}
          View All <FaArrowRight />
        </a>
      </div>
      <div className={styles.productsGrid}>
        {/* Map over the products array and render a ProductCard for each product */}
        {products.map((product) => (
          <ProductCard product={product} showBestPriceBanner={false} />

        ))}
      </div>
    </section>
  );
};

export default ProductSection;