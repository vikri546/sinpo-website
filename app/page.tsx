"use client";
import React, { useState } from 'react';
import HomeScreen from "./components/HomeScreen";
import ArticleDetailScreen from "./components/ArticleDetailScreen";
import CategoryScreen from "./components/CategoryScreen";
import GalleryScreen from "./components/GalleryScreen";
import AuthorScreen from "./components/AuthorScreen";
import StaticPageScreen from "./components/StaticPageScreen";


export default function Page() {
  const [activeScreen, setActiveScreen] = useState<'home' | 'detail' | 'category' | 'gallery' | 'author' | 'static'>('home');
  const [selectedArticleId, setSelectedArticleId] = useState<string | number | null>(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | number | undefined>(undefined);
  const [selectedAuthorId, setSelectedAuthorId] = useState<string | number | null>(null);
  const [selectedStaticId, setSelectedStaticId] = useState<string | number | null>(null);

  const scrollToTop = () => window.scrollTo(0, 0);

  const handleNavigateToHome = () => {
    setActiveScreen('home');
    setSelectedArticleId(null);
    scrollToTop();
  };

  const handleNavigateToDetail = (id?: string | number) => {
    if (id !== undefined) setSelectedArticleId(id);
    setActiveScreen('detail');
    scrollToTop();
  };

  const handleNavigateToCategory = (id?: string | number) => {
    setSelectedCategoryId(id);
    setActiveScreen('category');
    scrollToTop();
  };

  const handleNavigateToGallery = () => {
    setActiveScreen('gallery');
    scrollToTop();
  };

  const handleNavigateToAuthor = (id: string | number) => {
    setSelectedAuthorId(id);
    setActiveScreen('author');
    scrollToTop();
  };

  const handleNavigateToStatic = (id: string | number) => {
    setSelectedStaticId(id);
    setActiveScreen('static');
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
          articleId={selectedArticleId || ""}
          onNavigateToHome={handleNavigateToHome}
          onNavigateToCategory={handleNavigateToCategory}
          onNavigateToDetail={handleNavigateToDetail}
          onNavigateToAuthor={handleNavigateToAuthor}
        />
      )}
      {activeScreen === 'category' && (
        <CategoryScreen 
          categoryId={selectedCategoryId}
          onNavigateToHome={handleNavigateToHome}
          onNavigateToCategory={handleNavigateToCategory}
          onNavigateToDetail={handleNavigateToDetail}
        />
      )}
      {activeScreen === 'gallery' && (
        <GalleryScreen 
          onNavigateToHome={handleNavigateToHome}
          onNavigateToCategory={handleNavigateToCategory}
          onNavigateToDetail={handleNavigateToDetail}
        />
      )}
      {activeScreen === 'author' && (
        <AuthorScreen 
          authorId={selectedAuthorId || ""}
          onNavigateToHome={handleNavigateToHome}
          onNavigateToCategory={handleNavigateToCategory}
          onNavigateToDetail={handleNavigateToDetail}
        />
      )}
      {activeScreen === 'static' && (
        <StaticPageScreen 
          staticId={selectedStaticId || ""}
          onNavigateToHome={handleNavigateToHome}
          onNavigateToCategory={handleNavigateToCategory}
        />
      )}

    </main>
  );
}

