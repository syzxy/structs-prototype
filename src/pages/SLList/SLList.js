import React, { useState, useEffect } from "react";
import SLLNode from "../../components/SLLNode/SLLNode";
import Arrow from "../../components/Arrow/Arrow";
import { sLList } from "../../static/data/sLListData";
import Grid from "../../components/Grid/Grid";
import styles from "./SLList.module.css";
import Button from "../../components/Button/Button";

export default function SLList() {
  /** vv ignore these for now vv **/
  const ROW = 1;
  const COL = 20;
  const emptyGrid = Array.from(Array(ROW), (r) =>
    Array.from(Array(COL), (c) => null)
  );

  const [grid, setGrid] = useState(emptyGrid);
  const [list, setList] = useState(sLList);

  useEffect(() => {
    const newGrid = [...grid];
    const newList = Array(2 * list.length - 1);

    // Update the grid by populating linked list elements
    newList[0] = list[0];
    for (let i = 1, j = 1; i < list.length; i++) {
      newList[j++] = Infinity; // sentinel for an arrow
      newList[j++] = list[i]; // list element
    }
    newGrid[0] = newList;
    setGrid(newGrid);
  }, [list]);
  /** ^^ ignore these for now ^^ **/

  const [value, setValue] = useState("");

  const appendNode = () => {
    if (!value || isNaN(value)) {
      alert("Not a valid number!");
    } else {
      setList([...list, +value]);
    }
  };

  return (
    <div className={styles.canvas}>
      <Grid>
        {grid.map((row, i) =>
          row.map((cell, j) =>
            cell < Infinity ? (
              <SLLNode key={`${i}${j}`}>{cell}</SLLNode>
            ) : (
              <Arrow key={`${i}${j}`}></Arrow>
            )
          )
        )}
      </Grid>
      <input
        type="text"
        placeholder="value of the new node?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button onClick={appendNode}>Append Node</Button>
    </div>
  );
}
