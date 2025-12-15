"use client";
import React, { useState } from 'react';
import HomeScreen from "./components/HomeScreen";
import ArticleDetailScreen from "./components/ArticleDetailScreen";
import CategoryScreen from "./components/CategoryScreen";

export default function Page() {
  const [activeScreen, setActiveScreen] = useState<'home' | 'detail' | 'category'>('home');

  const scrollToTop = () => window.scrollTo(0, 0);

  const handleNavigateToHome = () => {
    setActiveScreen('home');
    scrollToTop();
  };

  const handleNavigateToDetail = () => {
    setActiveScreen('detail');
    scrollToTop();
  };

  const handleNavigateToCategory = () => {
    setActiveScreen('category');
    scrollToTop();
  };

  return (
    <main>
      {activeScreen === 'home' && (
        <HomeScreen 
          onNavigateToDetail={handleNavigateToDetail}
          onNavigateToCategory={handleNavigateToCategory}
        />
      )}
      {activeScreen === 'detail' && (
        <ArticleDetailScreen 
          onNavigateToHome={handleNavigateToHome}
          onNavigateToCategory={handleNavigateToCategory}
        />
      )}
      {activeScreen === 'category' && (
        <CategoryScreen 
          onNavigateToHome={handleNavigateToHome}
          onNavigateToCategory={handleNavigateToCategory}
        />
      )}
    </main>
  );
}
