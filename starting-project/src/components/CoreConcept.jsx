export default function CoreConcept({ image, title, description }) {
  // 구조분해 문법 사용
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
