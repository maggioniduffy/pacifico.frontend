import React, { useState } from "react";

interface Props {
  search: string;
  setSearch: (s: string) => void;
}

const options = ["ligafemenina", "federal", "formativas"];

const Search = ({ search, setSearch }: Props) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className="bg-realwhite bg-opacity h-full mt-12">
      <form className="h-full shadow-md flex" onSubmit={(e) => handleSubmit(e)}>
        <input
          placeholder="Buscar..."
          value={search}
          type="search"
          className="h-full w-full p-4 bg-transparent"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <div className="w-full h-12 flex mb-2 mt-2">
        {options.map((option) => (
          <button key={option} className="bg-yellow  m-2 rounded shadow p-1">
            {"#"}
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Search;
