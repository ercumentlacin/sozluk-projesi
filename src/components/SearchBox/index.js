import React from "react";
import { Input, Space } from "antd";

const SearchBox = () => {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  return (
    <div>
      <Search placeholder="input search text" onSearch={onSearch} enterButton />
    </div>
  );
};

export default SearchBox;
