import { useRef } from "react";
import useClickAway from "./hooks/useClickAway";

export default function Storefront() {
  const targetElement = useRef(null);

  const alertClickAway = () => {
    alert("Clicked outside product 1");
  };

  useClickAway(targetElement, alertClickAway);

  return (
    <div className="gallery">
      <div className="col" ref={targetElement} >
        <img src="https://i.postimg.cc/G207QNV7/image.png" alt="Product 1" />
        <p>iWatch Series 6</p>
        <div className="btns">
          <button >
            <img
              src="https://api.iconify.design/flat-color-icons:like.svg?color=%23888888"
              alt="like"
            />
          </button>
          <button >
            <img
              src="https://api.iconify.design/icon-park:buy.svg?color=%23888888"
              alt="add"
            />
          </button>
        </div>
      </div>
    </div>
  );
}