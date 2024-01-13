import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
// 보통 default 를 붙이는게 일반적인데, 안붙여도 된다
export default function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      {/* 이미지 경로를 그대로 작성 시 빌드 시 로딩 에러가 생길 수 있으니, 상대결로를 통해 값을 가져오는 게 좋다 */}
      {/* 따옴표는 생략해야한다 */}
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {/* 중괄호 안에 속성이나 JS 코드 작성 가능 */}
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
