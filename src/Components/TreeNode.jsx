import { useState } from 'react';
import Tree from 'react-d3-tree';
import data from '../data.json';
import ParentNode from './ParentNode'; // Adjust path as needed
import ChildNode from './ChildNode'; // Adjust path as needed

const TreeGraph = () => {
  const [treeData, setTreeData] = useState(data);

  const handleNodeClick = (nodeData) => {
    if (nodeData.children) {
      nodeData._collapsed = !nodeData._collapsed;
      setTreeData({ ...treeData });
    }
  };

  const handleDragStart = (nodeData, evt) => {
    evt.dataTransfer.setData('application/reactflow', nodeData.name);
    evt.dataTransfer.effectAllowed = 'move';
  };

  const handleDrop = (nodeData, evt) => {
    const draggedNodeName = evt.dataTransfer.getData('application/reactflow');
    // Logic to update the treeData with the new position
  };

  

  const renderCustomNode = ({ nodeDatum }) => {
    const isParent = nodeDatum.children && nodeDatum.children.length > 0;
    
    console.log("nodeDatum",nodeDatum)
    return (
      <g
        // draggable
        // onDragStart={(evt) => handleDragStart(nodeDatum, evt)}
        // onDrop={(evt) => handleDrop(nodeDatum, evt)}
        // onDragOver={(evt) => evt.preventDefault()} // Allow dropping
      >
        {/* Render a circle or rectangle for parent/child node */}
        {isParent ? (
          <ParentNode
            nodeData={nodeDatum}
            handleClick={handleNodeClick}
          />
        ) : (
          <ChildNode
            nodeData={nodeDatum}
            handleClick={handleNodeClick}
          />
        )}
      </g>
    );
  };
  

  return (
    <div style={{ width: '100%', height: '100vh' }} className="bg-gray-100 p-4 rounded shadow">
      <h1 className="text-3xl font-bold text-center mb-4">Project Hierarchy</h1>
      <Tree
        data={treeData}
        collapsible={true}
        orientation="horizontal"
        translate={{ x: 100, y: 300 }}
        zoomable={true}
        nodeSize={{ x: 200, y: 100 }}
        pathFunc="diagonal"
        renderCustomNodeElement={renderCustomNode}
        styles={{
          links: {
            strokeWidth: 2,
            stroke: '#888',
          },
        }}
      />
    </div>
  );
};

export default TreeGraph;
