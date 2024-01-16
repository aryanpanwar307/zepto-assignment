import React, { useState, useRef, useEffect } from "react";
import './App.css'


const MultiSelect = ({ options }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [filter, setFilter] = useState("");
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isChipHighlighted, setChipHighlighted] = useState(false);

  const inputRef = useRef(null);
  console.log("filter", filter);
  const handleItemClick = (item) => {
    setSelectedItems((prevSelected) => [...prevSelected, item]);
    setFilter("");
    setDropdownVisible(false);
    inputRef.current?.focus();
  };

  const handleChipRemove = (removedItem) => {
    setSelectedItems((prevSelected) =>
      prevSelected.filter((item) => item !== removedItem)
    );
  };

  const handleInputKeyDown = (e) => {
    if (
      e.key === "Backspace" &&
      !isChipHighlighted &&
      filter === "" &&
      selectedItems.length > 0
    ) {
      const lastSelectedItem = selectedItems[selectedItems.length - 1];
      //highlighting condition
      setChipHighlighted(true);
      // handleChipRemove(lastSelectedItem);
    } else if (e.key === "Backspace" && isChipHighlighted) {
      const lastSelectedItem = selectedItems[selectedItems.length - 1];
      handleChipRemove(lastSelectedItem);
      setChipHighlighted(false);
    }
  };

  const handleInputChange = (e) => {
    setFilter(e.target.value);
    setDropdownVisible(true);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const filteredOptions = options.filter(
    (item) => !selectedItems.find((sitem) => sitem.name === item.name)
  );

  return (
    <div className="relative">
      <div
        style={{ border: "2px solid black", alignItems: "center" }}
        className="flex flex-wrap gap-2 p-2 border  focus-within:ring-2 focus-within:ring-blue-500"
      >
        {selectedItems.map((item, index) => (
          <div
            key={item.name}
            className={`bg-blue-500 text-white rounded-md flex items-center center gap-1 px-2 ${
              filter === "" &&
              isChipHighlighted &&
              index === selectedItems.length - 1
                ? "highlighted-chip"
                : ""
            }`}
            style={{
              borderRadius: "100px",
              height: "1.8rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex" }}>
              <img
                src={item.avatar}
                style={{
                  height: "1.4rem",
                  width: "1.4rem",
                  alignItems: "center",
                  marginRight: "0.5rem",
                  borderRadius: "10rem",
                }}
              />
              {item.name}
            </div>
            <button
              type="button"
              className="focus:outline-none cross-button"
              onClick={() => handleChipRemove(item)}
            >
              &times;
            </button>
          </div>
        ))}
        <div>
          <input
            ref={inputRef}
            type="text"
            value={filter}
            style={{ border: "none", outline: "none" }}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            placeholder="Select items"
            className="flex-grow outline-none focus:ring-0 input-box outline-none"
            onClick={() => setDropdownVisible(true)}
            // onFocus={() => {
            //   setDropdownVisible(true);
            // }}
            // onBlur={() => {
            //   setDropdownVisible(false);
            // }}
          />
          {/* {isDropdownVisible && ( */}
          <div
            style={{ top: "20", display: isDropdownVisible ? "block" : "none" }}
            className="absolute z-10 mt-2 p-2 bg-white border rounded-md shadow-md"
          >
            {filteredOptions
              .filter((item) =>
                item.name.toLowerCase().includes(filter.toLowerCase())
              )
              .map((item) => (
                <div
                  key={item}
                  onClick={() => {
                    handleItemClick(item);
                  }}
                  className="cursor-pointer p-2 hover:bg-green-200 filter-item"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "2rem",
                    borderRadius: "6px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      borderRadius: "50%",
                    }}
                    className="chip"
                  >
                    <img
                      src={item.avatar}
                      style={{
                        height: "2rem",
                        marginRight: "0.5rem",
                        borderRadius: "10rem",
                      }}
                    />
                    <span className="user-name">{item.name}</span>
                  </div>
                  <span
                    className="user-email"
                    style={{
                      fontSize: "0.8rem",
                      color: "#979797",
                    }}
                  >
                    {item.email}
                  </span>
                </div>
              ))}
          </div>
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default MultiSelect;
