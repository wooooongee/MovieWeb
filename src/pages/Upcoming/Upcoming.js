import React, { useMemo } from "react";
import Category from "../../components/Category/Category";
const BASE_URL = "https://api.themoviedb.org/3";

const Upcoming = () => {
  const options = useMemo(
    () => [
      { id: "KR", name: "한국" },
      { id: "US", name: "미국" },
      { id: "JP", name: "일본" },
    ],
    []
  );

  const fetchUrl = useMemo(
    () => (region, apiKey) =>
      `${BASE_URL}/movie/upcoming?api_key=${apiKey}&language=ko-KR&region=${region}`,
    []
  );

  return (
    <Category
      title="개봉 예정 영화"
      fetchUrl={fetchUrl}
      options={options}
      optionAll={false}
    />
  );
};

export default Upcoming;
