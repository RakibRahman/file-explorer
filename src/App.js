import "./App.css";
import React, { useState } from "react";
import ThisPc from "./img/this-pc.svg";
import Desktop from "./img/folder.svg";
import Download from "./img/download.svg";
import Document from "./img/document.svg";
import Pic from "./img/pic.svg";
import Vid from "./img/video.svg";
import Music from "./img/music.svg";
import Right from "./img/forward.svg";
import Down from "./img/down.svg";
import Click from "./img/click.mp3";

const App = () => {
  const Folder = ({ name, icon, clsname = "folder__name", children }) => {
    const [isShown, isShownSet] = useState(false);
    const ClickEffect = new Audio(Click);
    const clickEvent = (_) => {
      ClickEffect.play();
      isShownSet((e) => !e);
    };

    return (
      <div className="explorer">
        <div className="nameIcon">
          <img src={icon} alt="folder icon" />
          <img
            className="arrow"
            src={isShown ? Down : Right}
            alt="folder icon"
          />

          <h1 onClick={clickEvent} className={clsname}>
            {name}
          </h1>
        </div>
        {isShown ? children : null}
      </div>
    );
  };
  const File = ({ name, icon }) => {
    return (
      <div className="file">
        <img src={icon} alt="icon" />
        <p>{name}</p>
      </div>
    );
  };
  return (
    <div className="wrapper">
      <Folder name="This Pc" clsname="main__folder" icon={ThisPc}>
        <Folder name="Desktop" icon={Desktop}>
          <File name="cat.png" icon={Pic} />
          <File name="js notes.docx" icon={Document} />
        </Folder>
        <Folder name="Downloads" icon={Download}>
          <File name="learn react fast.mp4" icon={Vid} />
        </Folder>
        <Folder name="Pictures" icon={Pic}>
          <Folder name="Family" icon={Desktop} clsname="subFolder">
            <File name="nature.png" icon={Pic} />
          </Folder>
        </Folder>
        <Folder name="Video" icon={Vid}>
          <File name="sum pair zero.mp4" icon={Vid} />
          <File name="kill me heal me.mp4" icon={Vid} />

          <Folder name="HomeWork" icon={Desktop} clsname="subFolder" />
        </Folder>
        <Folder name="Music" icon={Music}>
          <File name="to the end.wav" icon={Music} />
        </Folder>
      </Folder>
    </div>
  );
};
export default App;
