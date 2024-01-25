import React, { useState, useRef } from "react";
import ResultModal from "./ResultModal";

// 1. 전역변수로 해야 timer 함수가 컴포넌트 재실행에 방해받지 않는다
// 2. 컴포넌트 별로 timer 변수를 공유하기 때문에 로직에 이상이 생간다 - timer가 초기화 되버린다
// 3. 참조가 답이다 !!
// let timer;

export default function PlayTimerChallenge({ title, targetTime }) {
  // 컴포넌트 내 다른 인스턴스들의 참조가 만들어져 독립적으로 동작한다
  // 컴포넌트가 재실행되도 참조값은 유실되지 않는다
  // timer 자체가 UI와 직접적인 영향이 없기 때문에 사용하기 좋은 사례다
  const timer = useRef();
  const dialog = useRef();

  const [timerStarted, setTimerStarted] = useState();
  const [timerExpired, setTimerExpired] = useState();

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      console.log(dialog.current);
      dialog.current.showModal();
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handleStop() {
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        result={timerExpired ? "lost" : "win"}
        targetTime={targetTime}
      />
      <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>You lost!</p>}
        <p className="chaalenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
