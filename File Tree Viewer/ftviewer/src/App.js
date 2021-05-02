import React, { useState } from "react";

function App() {
  return (
    <div>
      <Folder name="Desktop">
        <Folder name="Pictures">
          <File name="dogs.jpeg" />
          <File name="cats.jpeg" />
        </Folder>
        <Folder name="Music">
          <File name="music1.mp3" />
          <File name="music2.mp3" />
        </Folder>
      </Folder>
      <Folder name="Applications" />
    </div>
  );
}

const Folder = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { name, children } = props;

  const direction = isOpen ? "down" : "right";

  const clickHandler = () => setIsOpen(!isOpen);

  return (
    <div>
      <span onClick={clickHandler}>
        <i className="blue folder icon"></i>
        <i className={`caret ${direction} icon`}></i>
      </span>
      {name}
      <div style={{ marginLeft: "17px" }}>{isOpen ? children : null}</div>
    </div>
  );
};

const File = (props) => {
  const { name } = props;
  const ext = name.split(".")[1];
  const fileIcons = {
    mp3: "headphones",
    jpeg: "file image outline",
  };
  return (
    <div>
      <i className={`${fileIcons[ext]} icon`}></i>
      {props.name}
    </div>
  );
};

export default App;
