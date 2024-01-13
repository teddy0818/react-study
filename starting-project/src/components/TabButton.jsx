export default function TabButton({ children, onSelect }) {
  {
    /* 매개변수명은 사용자 마음대로 지어도 됨(children는 특수한 경우) */
    /* 보통 함수경우 on 으로 시작하는 경우가 많음 */
    /* props 에서 쓰일 함수명 - handle로 시작하는 경우가 많음 */
  }

  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
