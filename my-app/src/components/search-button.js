import React from "react";
import Button from "./button";

const SearchButton = () => <Button handleClick={handleClick}>Search</Button>;

function handleClick() {
  alert("search");
}

export default SearchButton;
