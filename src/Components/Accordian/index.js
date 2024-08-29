import { useState } from "react";
import { data } from "./data";
import "./Accordian.css";

export default function Accordian() {
  const [select, setselect] = useState(null);
  const [enableMultiSelection, setenableMultiSelection] = useState(false);
  const [multiple, setmultiple] = useState([]);

  const handleSelect = (currentId) => {
    setselect(currentId === select ? null : currentId);
  };

  const multipleSelect = (currentId) => {
    let copyMultiple = [...multiple];
    const findcurrentselectIndex = copyMultiple.indexOf(currentId);
    if (findcurrentselectIndex === -1) {
      copyMultiple.push(currentId);
    } else {
      copyMultiple.splice(findcurrentselectIndex, 1);
    }
    setmultiple(copyMultiple);
  };
  console.log(select, multiple);
  return (
    <div className="wrapper">
      <button onClick={() => setenableMultiSelection(!enableMultiSelection)}>
        {enableMultiSelection ? "DisableMulti Select" : "EnableMulti Select"}
      </button>
      <div className="accordian" style={{ width: "50%" }}>
        {data && data.length > 0 ? (
          data.map((item) => (
            <>
              <div className="item">
                <div
                  onClick={
                    enableMultiSelection
                      ? () => multipleSelect(item.id)
                      : () => handleSelect(item.id)
                  }
                  className="title"
                >
                  {item.question}
                  <span style={{ float: "right", cursor: "pointer" }}>+</span>
                </div>
                {enableMultiSelection
                  ? multiple.indexOf(item.id) !== -1 && (
                      <div className="answer">{item.answer}</div>
                    )
                  : select === item.id && (
                      <div className="answer">{item.answer}</div>
                    )}
              </div>
            </>
          ))
        ) : (
          <div>No data Found</div>
        )}
      </div>
    </div>
  );
}
