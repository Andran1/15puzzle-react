import React from "react";
import "./board.css";
import { connect } from "react-redux";
import { takeId } from "../redux/platform/paltform.action";
import TileStyle from "../tile/tile-style";

const Board = (props) => {
  const { platformData } = props;
  
  const handleIndex = (xCord, yCord) => {
    const data = [...platformData];

    if (
      (xCord + 1 <= 3 && data[xCord + 1][yCord].num === null) ||
      (xCord - 1 >= 0 && data[xCord - 1][yCord].num === null) ||
      (yCord + 1 <= 3 && data[xCord][yCord + 1].num === null) ||
      (yCord - 1 >= 0 && data[xCord][yCord - 1].num === null)
    ) {
      for (let x = 0; x < 4; x++) {
        for (let y = 0; y < 4; y++) {
          if (data[x][y].num === null) {
            data[x][y].num = data[xCord][yCord].num;
            data[xCord][yCord].num = null;
          }
        }
      }
    }
    props.takeId(platformData);
  };

  return (
    <div className="board">
      {platformData.map((row, rowIdx) => {
        return (
          <div className="box" key={rowIdx}>
            {row.map((column, columnIdx) => (
              <div
                key={columnIdx}
                onClick={() => handleIndex(rowIdx, columnIdx)}
              >
                <TileStyle num={column.num} />
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  platform: state.platform,
  platformData: state.platform.platformData,
  className: state.platform.className,
});

const mapDispatchToProps = (dispatch) => ({
  takeId: (cordinates) => dispatch(takeId(cordinates)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Board);
