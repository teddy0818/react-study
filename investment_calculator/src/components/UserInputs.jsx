export default function UserInputs({ paramInputs, onInput }) {
  return (
    <div id="user-input">
      <div className="input-group">
        {paramInputs &&
          Object.entries(paramInputs).map(([name, value]) => (
            <p key={name}>
              <label>{name}</label>
              <input
                required
                min="1"
                type="number"
                value={value}
                onChange={(e) => onInput(name, e.target.value)}
              />
            </p>
          ))}
      </div>
    </div>
  );
}
