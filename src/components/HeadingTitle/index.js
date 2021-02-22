import React, { useState } from "react";
import { StyledHeadingTitle } from "./style";
import { StarTwoTone } from '@ant-design/icons';


const HeadingTitle = ({ title }) => {
  const [words, setWords] = useState([]);
  const addWord = () => {
    setWords([{title}])
  }
  console.log(words);
  return( 
    <StyledHeadingTitle value={{words, addWord}}>
      <h1>{title ? title : null}</h1>
      {title ? <StarTwoTone onClick={addWord} twoToneColor="#446866" /> : null}
    </StyledHeadingTitle>
  )
};

export default HeadingTitle;
