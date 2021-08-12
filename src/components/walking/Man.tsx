import "../walking/Man.styling.css";
type icon = {
  src: string;
  id: number;
  title: string;
};

const Man = () => {
  let icons: icon[] = [
    {
      src: "https://img.icons8.com/plasticine/100/000000/react.png",
      id: 2,
      title: "React logo",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png",
      id: 3,
      title: "Redux logo",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
      id: 1,
      title: "Javascript logo",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
      id: 4,
      title: "Typescript logo",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      id: 5,
      title: "NodeJs logo",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      id: 6,
      title: "Python logo",
    },
  ];
  return (
    <div className="sky">
      <h1>My Path</h1>
      <div className="typewriter">
        <h1>Coding adventures are waiting!</h1>
      </div>

      <div className="icons">
        {icons.map((icon) => (
          <img
            src={icon.src}
            alt={icon.title}
            key={icon.id}
            className={`icon_${icon.id}`}
            style={{ height: 70 }}
          />
        ))}
      </div>
      <div className="mountain" />
      <div className="road" />

      <div id="animation">
        <div className="lvlup">LevelUp!</div>
      </div>

      <div className="city" />
    </div>
  );
};
export default Man;
