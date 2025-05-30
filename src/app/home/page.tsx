'use client'

import {useEffect, useRef, useState} from 'react';
import Link from 'next/link'
import ColorSurvey from '@/components/ColorSurvey';
import axios from '@/lib/axios';
import {Item} from "@/lib/types";
import styles from './Home.module.css';

function Home() {
  const [items, setItems] = useState<Item[]>([]);
  const [filter, setFilter] = useState<string|null>(null);
  const nextPageRef = useRef(null);
  const isLoadingRef = useRef(false);

  async function handleLoad(mbti: string | null) {
    const res = await axios.get('/color-surveys/', {
      params: { mbti, limit: 20 },
    });
    const nextItems = res.data.results;
    nextPageRef.current = res.data.next;
    setItems(nextItems);
  }

  async function handleLoadNext() {
    if (nextPageRef.current) {
      const res = await axios.get(nextPageRef.current);
      const data = res.data;
      setItems((prevItems) => [...prevItems, ...data.results]);
      nextPageRef.current = data.next;
    }
  }

  useEffect(() => {
    handleLoad(filter);
  }, [filter]);

  useEffect(() => {
    async function handleScroll() {
      if (!nextPageRef.current || isLoadingRef.current) return;
      isLoadingRef.current = true;
      const maxScrollTop =
        document.documentElement.offsetHeight - window.innerHeight - 100;
      const currentScrollTop = document.documentElement.scrollTop;
      if (currentScrollTop >= maxScrollTop) {
        await handleLoadNext();
      }
      isLoadingRef.current = false;
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <header className={styles.header}>
          <h1 className={styles.heading}>
            MBTI별<br />
            <span className={styles.accent}>좋아하는 컬러</span>
          </h1>
          <div>
            {filter && (
              <div className={styles.filter} onClick={() => setFilter(null)}>
                {filter}
                <img
                  className={styles.removeIcon}
                  src="/images/x.svg"
                  alt="필터 삭제"
                />
              </div>
            )}
          </div>
        </header>
      </div>
      <main className={styles.content}>
        <Link className={styles.addItem} href="/new">
          + 새 컬러 등록하기
        </Link>
        <ul className={styles.items}>
          {items.map((item) => (
            <li key={item.id}>
              <ColorSurvey value={item} onClick={async () => setFilter(item.mbti)} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default Home;
