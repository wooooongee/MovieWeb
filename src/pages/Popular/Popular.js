import React from "react";
import Category from "../../components/Category/Category";
const Popular = () => {
  const options = [
    { id: "day", name: "오늘" },
    { id: "week", name: "이번 주" },
  ];

  const fetchUrl = (timeWindow, apiKey) =>
    `https://api.themoviedb.org/3/trending/movie/${
      timeWindow || "day"
    }?api_key=${apiKey}&language=ko-KR`;

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
