import React, { useState, useEffect } from "react";
import SLLNode from "../../components/SLLNode/SLLNode";
import Arrow from "../../components/Arrow/Arrow";
import { sLList } from "../../static/data/sLListData";
import Grid from "../../components/Grid/Grid";
import styles from "./SLList.module.css";
import Button from "../../components/Button/Button";
import { motion, AnimatePresence } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

export default function SLList() {
  // const [initialList, setInitialList] = useState();
  const [list, setList] = useState(sLList);
  const [value, setValue] = useState("");

  // useEffect(() => {
  // }, []);

  const appendNode = () => {
    if (!value || isNaN(value)) {
      alert("Not a valid number!");
    } else {
      setList([
        ...list,
        { value: Infinity, id: uuidv4() },
        { value: +value, id: uuidv4() },
      ]);
    }
  };

  const deleteNode = (index) => {
    console.log("deleting ", list[index]);
    let newList = list.filter((_, i) => i !== index && i !== index + 1);
    setList(newList);
  };

  return (
    <div className={styles.canvas}>
      <Grid>
        <AnimatePresence>
          {list &&
            list.map((e, i) =>
              e.value < Infinity ? (
                <SLLNode key={e.id} onDeletNode={() => deleteNode(i)}>
                  {e.value}
                </SLLNode>
              ) : (
                <Arrow key={e.id} />
              )
            )}
        </AnimatePresence>
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
