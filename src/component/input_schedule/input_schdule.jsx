import { useRef, useState } from "react";
import Input_item from "../input_item/input_item.jsx";
import "./input_schdule.css";

const Input_schdule = () => {
  const [item, setitem] = useState([]);

  const isub = useRef(null);
  const iday = useRef(null);
  const itime = useRef(null);
  const iscore = useRef(null);
  const icheck = useRef(null);

  const setit = () => {
    setitem({
      sub: isub.current.value,
      day: iday.current.value,
      time: itime.current.value,
      score: iscore.current.value,
      e: icheck.current.value,
    });

    isub.current.value = "";
    iday.current.value = "";
    itime.current.value = "";
    iscore.current.value = "";

    console.log(item);
  };

  return (
    <div className="input-container">
      <div className="input-field">
        <span className="input-title">교과목명</span>
        <input ref={isub} type="text" />
        <div className="input-day">
          <span className="input-title">요일</span>
          <input ref={iday} type="text" />
          <span className="input-title">시간</span>
          <input ref={itime} type="text" />
        </div>
        <span className="input-title">학점</span>
        <input ref={iscore} type="text" />
        <div className="input-checkbox">
          <span className="input-title input-use">필수여부</span>
          <input ref={icheck} className="input-check" type="checkbox" />
        </div>
        <button onClick={() => setit()} className="input-button">
          추가
        </button>
      </div>
      <div className="input-list">
        <div className="input-list-title">
          <span>교과목</span>
          <span>요일</span>
          <span>시간</span>
          <span>학점</span>
        </div>
        <Input_item />
        <Input_item />
        <Input_item />
      </div>
    </div>
  );
};

export default Input_schdule;
