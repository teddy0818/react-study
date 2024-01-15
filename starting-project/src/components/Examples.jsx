import { EXAMPLES } from "../data-with-examples";
import TabButton from "./TabButton.jsx";
import { useState } from "react";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  let tabContent = "Please click a tap !!";

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>
          {EXAMPLES[selectedTopic].description}
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </p>
      </div>
    );
  }
  return (
    <>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton
            isSelected={selectedTopic === "components" ? true : false}
            onSelect={() => handleClick("components")}
          >
            Components
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "jsx" ? true : false}
            onSelect={() => handleClick("jsx")}
          >
            JSX
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "props" ? true : false}
            onSelect={() => handleClick("props")}
          >
            Props
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "state" ? true : false}
            onSelect={() => handleClick("state")}
          >
            State
          </TabButton>
        </menu>
      </section>
      {tabContent}
    </>
  );
}
