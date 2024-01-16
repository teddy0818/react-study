import { useState } from "react";

export default function Player({ initName, symbol }) {
  const [playerName, setPlayerName] = useState(initName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // 1. 잘못 된 오래 된 방식 (전의 상태값을 변경시)
    // setIsEditing(!isEditing); // true
    // setIsEditing(!isEditing); // true

    // 2. 옳은 방식
    // setIsEditing((editing) => !editing);
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        defaultValue={playerName}
        onChange={handleChange}
      />
    );
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span id="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
