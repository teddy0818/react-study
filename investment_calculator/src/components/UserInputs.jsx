export default function UserInputs({ paramInputs, onInput }) {
  return (
    <div id="user-input">
      <div className="input-group">
        {paramInputs &&
          Object.entries(paramInputs).map(([name, value]) => (
            <div>
              <label>{name}</label>
              <input
                key={name}
                type="number"
                value={value}
                onChange={(e) => onInput(name, e.target.value)}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
