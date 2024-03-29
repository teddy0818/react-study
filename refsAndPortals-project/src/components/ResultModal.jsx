import React, { forwardRef, useImperativeHandle, useRef, onReset } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime },
  ref
) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formatterRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  // useImperativeHandle - 함수를 커스터 마이징 할때 쓰이기 좋다
  // 간단한 앱에서는 상관없지만, 복잡도가 높은 앱에서 쓰이기 좋다
  // ex) dialog.showModal() 에서 혹시라도 dialog 태그가 바뀌면 문제가 생긴다
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {userLost && <h2>You Lost</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formatterRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
    // document.getElementsByClassName("modal")
  );
});

export default ResultModal;
