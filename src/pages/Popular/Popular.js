import React, { useMemo } from 'react';
import Category from '../../components/Category/Category';

const BASE_URL = 'https://api.themoviedb.org/3';

const Popular = () => {
  const options = useMemo(() => [
    { id: 'day', name: '오늘' },
    { id: 'week', name: '이번 주' },
  ], []);

  const fetchUrl = useMemo(() => (timeWindow, apiKey) => 
    `${BASE_URL}/trending/movie/${timeWindow || 'day'}?api_key=${apiKey}&language=ko-KR`,
  []);

  return (
    <Category
      title="인기 영화"
      fetchUrl={fetchUrl}
      options={options}
      optionAll={false}
    />
  );
};

export default Popular;