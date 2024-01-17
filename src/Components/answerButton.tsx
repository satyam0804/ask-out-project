import { Link } from "react-router-dom";
export default function Button() {
  // const nextPage = () => {
  //   window.location.href = "yes.tsx";
  // };

  const moveButton = () => {
    const noButton = document.getElementById("noButton");
    if (noButton) {
      const x = Math.random() * (window.innerWidth - noButton.offsetWidth) - 85;
      const y =
        Math.random() * (window.innerHeight - noButton.offsetHeight) - 48;

      noButton.style.left = `${x}px`;
      noButton.style.top = `${y}px`;
    }
  };

  return (
    <div className="buttons">
      <Link to="yes">
        <button className="btn" id="yesButton">
          Yes
        </button>
      </Link>

      <button
        className="btn"
        id="noButton"
        onMouseOver={moveButton}
        onClick={moveButton}
      >
        No
      </button>
    </div>
  );
}
