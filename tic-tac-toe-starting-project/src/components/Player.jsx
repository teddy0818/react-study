import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  let playerName = <span className="player-name">{name}</span>;
  if (isEditing) {
    playerName = <input type="text" value={name} required />;
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span id="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>Edit</button>
      </span>
    </li>
  );
}
