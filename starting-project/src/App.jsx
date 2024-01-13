import reactImg from "./assets/react-core-concepts.png";
import componentsImg from "./assets/components.png";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
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

function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title="Compononts"
              description="The core UI building block."
              image={componentsImg}
            ></CoreConcept>
            <CoreConcept />
            <CoreConcept />
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
