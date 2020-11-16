import React, { useState } from "react";
import "./App.css";
import useLongPress from "./useLongpress";
import Rightclick from './Rightclick';


export default function Longpress() {
  const [longPressCount, setlongPressCount] = useState(0)
  const [clickCount, setClickCount] = useState(0)

  const onLongPress = () => {
    console.log('longpress is triggered');
    setlongPressCount(longPressCount + 1)
  };

  const onClick = () => {
    console.log('click is triggered')
    setClickCount(clickCount + 1)
  }

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 500,
  };
  const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);

  return (
    <div className="Longpress">
      <button {...longPressEvent}>use  Loooong  Press</button>
      <span>Long press count: {longPressCount}</span>
      <span>Click count: {clickCount}</span>
    </div>
  );
}
