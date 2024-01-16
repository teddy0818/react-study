import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    // 1. 잘못 된 오래 된 방식 (전의 상태값을 변경시)
    // setIsEditing(!isEditing); // true
    // setIsEditing(!isEditing); // true

    // 2. 옳은 방식
    setIsEditing((editing) => !editing);
    setIsEditing((editing) => !editing);
  };

  let playerName = <span className="player-name">{name}</span>;

  if (isEditing) {
    playerName = <input type="text" required value={name} />;
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span id="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
