export default function Tabs({ children, buttons, ButtonsContainer }) {
  // 변수를 통해서도 가능함
  //   const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
