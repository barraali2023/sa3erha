// HeroSection.js
import React from 'react';
import styles from './HeroSection.module.css';
import { FaSearch } from 'react-icons/fa';

const HeroSection = ({ searchQuery, setSearchQuery, onSearch }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>S3RHA</h1>
        <p className={styles.tagline}>
          S3RHA is a price comparison service that helps you find
          the best deals across different stores.
        </p>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search for products..."
            className={styles.searchInput}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}

            onKeyDown={(e) => {
              if (e.key === 'Enter') onSearch();
            }}
            //onKeyDown تابع
            // عند الضغط انتر يفعل التابع onSearch

          />
          <button className={styles.searchButton} onClick={onSearch}>
            <FaSearch /> Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
