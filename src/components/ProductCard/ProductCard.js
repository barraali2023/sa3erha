import React from 'react';
import styles from './ProductCard.module.css';
import { FaCheckCircle } from 'react-icons/fa'; // For the green checkmark
import api from '../api/api'
//     نجعل ProductCard يقبل prop اسمها مثلاً showBestPriceBanner
//  إذا true ➜ يظهر الشريط  ==>secsion
//  إذا false ➜ لا يظهره   ==>products
const ProductCard = ({ product, showBestPriceBanner = false }) => {
  const getMinPrice = (stores) =>
    Math.min(...stores.map((s) => parseFloat(s.price.replace(/[^\d.]/g, ''))));



  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
  <img src={product.image} alt={product.name} className={styles.productImage} />

  {showBestPriceBanner && (
    <div className={styles.bestPriceBanner}>
        bestPrice: {getMinPrice(product.stores)}
    </div>
  )}
</div>

      <div className={styles.cardContent}>
        <h3 className={styles.productName}>{product.name}</h3>
        <p className={styles.productDescription}>{product.description}</p>
        <div className={styles.storesList}>
          {product.stores.slice(0, 3).map((store, index) => ( // Show max 3 stores initially
            <div key={index} className={`${styles.storeEntry} ${store.isBest ? styles.bestOffer : ''}`}>
              <span className={styles.storeLogo}>{store.logo}</span>
              <span className={styles.storeName}>{store.name}</span>
              {store.isBest && <FaCheckCircle className={styles.checkIcon} />}
              <span className={styles.storePrice}>{store.price}</span>
            </div>
          ))}
          {product.moreStores > 0 && (
            <div className={styles.moreStores}>
              +{product.moreStores} more Store{product.moreStores > 1 ? 's' : ''}
            </div>
          )}
           {product.stores.length > 3 && (
            <div className={styles.moreStores}>
              +{product.stores.length - 3} more Store{product.stores.length - 3 > 1 ? 's' : ''}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;