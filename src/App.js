
import React, { useState } from 'react';
import './App.css';
import MultiSelect from "./multiselect";

export default function App() {
  const options = [
    {
      name: "Aryan",
      email: "aryan.panwar@gmail.com",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfHS7BhWxa_MSW3xWba2jpAQZSb-SKiL84hw&usqp=CAU",
    },
    {
      name: "Yashasvi",
      email: "yash.bhadoria@gmail.com",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfHS7BhWxa_MSW3xWba2jpAQZSb-SKiL84hw&usqp=CAU",
    },
    {
      name: "Kanishk",
      email: "kk.pandey@gmail.com",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfHS7BhWxa_MSW3xWba2jpAQZSb-SKiL84hw&usqp=CAU",
    },
    {
      name: "Mayank",
      email: "mk.gupta@gmail.com",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfHS7BhWxa_MSW3xWba2jpAQZSb-SKiL84hw&usqp=CAU",
    },
    {
      name: "Rajat",
      email: "rajat.moon@gmail.com",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfHS7BhWxa_MSW3xWba2jpAQZSb-SKiL84hw&usqp=CAU",
    },
    {
      name: "Dikshant",
      email: "dikshant.gupta@gmail.com",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfHS7BhWxa_MSW3xWba2jpAQZSb-SKiL84hw&usqp=CAU",
    },
    {
      name: "kashish",
      email: "kt.tibrewal@gmail.com",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfHS7BhWxa_MSW3xWba2jpAQZSb-SKiL84hw&usqp=CAU",
    },
    {
      name: "atrij",
      email: "atrij.dixit@gmail.com",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfHS7BhWxa_MSW3xWba2jpAQZSb-SKiL84hw&usqp=CAU",
    },
  ];
  return (
    <div className="App">
      <MultiSelect options={options} />
    </div>
  );
}
