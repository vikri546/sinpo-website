"use client";
import React, { useState } from 'react';
import HomeScreen from "./components/HomeScreen";
import ArticleDetailScreen from "./components/ArticleDetailScreen";

export default function Page() {
  const [activeScreen, setActiveScreen] = useState<'home' | 'detail'>('home');

  return (
    <main>
      {activeScreen === 'home' ? (
        <HomeScreen 
          onNavigateToDetail={() => {
            setActiveScreen('detail');
            window.scrollTo(0, 0);
          }} 
        />
      ) : (
        <ArticleDetailScreen 
          onNavigateToHome={() => {
            setActiveScreen('home');
            window.scrollTo(0, 0);
          }} 
        />
      )}
    </main>
  );
}
