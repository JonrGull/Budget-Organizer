import { useState, useRef } from "react";

const DropdownMenu = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="menu-container">
      <button onClick={onClick} className="menu-trigger">
        <span>User</span>
        <img
          src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg"
          alt="User avatar"
        />
      </button>
    </div>
  );
};
