"use client";

import React, { useEffect, useState } from "react";
import styles from "./HealthBlog.module.css";
import Link from "next/link";

const articles = [
  {
    heading: "10 Steps to a Healthier Life",
    summary: "Easy ways to enhance your wellness and stay in shape.",
    url: "https://www.healthline.com/nutrition/10-healthy-lifestyle-tips",
  },
  {
    heading: "Why Mental Well-being Matters",
    summary: "Caring for your mind is just as crucial as caring for your body.",
    url: "https://www.verywellmind.com/importance-of-mental-health-5092459",
  },
  {
    heading: "Top Superfoods for Strong Immunity",
    summary: "A list of essential foods that boost immune function.",
    url: "https://www.medicalnewstoday.com/articles/322412",
  },
  {
    heading: "Fitness Plans for Every Age Group",
    summary: "Tailored exercise guides for all fitness levels.",
    url: "https://www.self.com/story/best-workouts-for-every-age",
  },
];

const WellnessArticles = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div className={styles.loadingText}>Loading...</div>;
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Wellness Articles</h1>
      <p className={styles.description}>Explore the latest health insights and well-being tips.</p>
      <div className={styles.articleList}>
        {articles.map((article, index) => (
          <div key={index} className={styles.card}>
            <h2>{article.heading}</h2>
            <p>{article.summary}</p>
            <Link href={article.url} target="_blank" className={styles.readMore}>
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WellnessArticles;
