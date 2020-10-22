import React from 'react';
import {  useSelector } from "react-redux";
import Li from '../component/Li';

export default function List() {
  const data = useSelector(state => state.data);
  return (
    <ul id="todo-list">
      {data.map((item, index) => {
        return (
          <Li key={index} data={item}></Li>
        )
      })}
    </ul>
  );
}