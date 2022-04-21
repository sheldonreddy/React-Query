import React, { useState } from "react";
import { useQuery } from "react-query";

import Character from "./Character";

// Characters Main Function
export default function Characters() {
  const [page, setPage] = useState(40);

  // API Get
  const fetchCharacters = async ({ queryKey }) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
    return response.json();
  };

  // RQ UseQuery: Contains all info from the query
  const { data, status, isPreviousData } = useQuery(
    ["characters", page],
    fetchCharacters,
    {
      keepPreviousData: true
    }
  );

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  // Process Data from UseQuery
  return (
    <div className="characters">
      {data.results.map((character) => (
        <Character character={character} />
      ))}
      <div>
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setPage((old) => old + 1)}
          disabled={!data.info.next}
        >
          Next
        </button>
      </div>
    </div>
  );
}
