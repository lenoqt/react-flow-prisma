import { useCallback } from "react";
import { Handle, Node, Position } from "reactflow";
import styles from "./Flow.module.css";

export const initialNodes = [
  {
    id: "node-1",
    type: "textUpdater",
    position: { x: 100, y: 100 },
    data: { value: 123 },
  },
] as Array<Node>;

export const nodeTypes = { textUpdater: TextUpdaterNode };

const handleStyle = { left: 10 };

function TextUpdaterNode({ data, isConnectable }) {
  const onChange = useCallback((event) => {
    console.log(event.target.value);
  }, []);
  return (
    <div className={styles.textNode}>
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <div>
        <label htmlFor="text">Text:</label>
        <input id="text" name="text" onChange={onChange} className="nodrag" />
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        isConnectable={isConnectable}
      />
    </div>
  );
}

export default TextUpdaterNode;
