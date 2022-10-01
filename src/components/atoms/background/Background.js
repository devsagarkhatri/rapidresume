import React from "react";
import "./background.css";

const Background = (props) => {
  return (
    <>
      {props.isgradient ? (
        <div className="area">
          {props.isCircle && (
            <div className="circles">
              <div
                className={
                  props.circleAlign
                    ? "circle " + props.circleAlign
                    : "circle right"
                }
              ></div>
            </div>
          )}
        </div>
      ) : (
        <div class="areaWhite"></div>
      )}
    </>
  );
};

export default Background;
