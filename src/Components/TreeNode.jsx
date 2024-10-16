import { useState } from 'react';
import Tree from 'react-d3-tree';
import data from '../data.json';

const TreeGraph = () => {
  const [treeData, setTreeData] = useState(data);
  
  // Update container styles for full-screen coverage
  const containerStyles = {
    width: '100%',
    height: '100vh', // Full screen height
  };

  // Handle node collapse/expand functionality
  const handleNodeClick = (nodeData, evt) => {
    if (nodeData.children) {
      nodeData._collapsed = !nodeData._collapsed;
      setTreeData({ ...treeData }); // Re-render tree with updated collapsed state
    }
  };

  return (
    <div style={containerStyles} className="bg-gray-100 p-4 rounded shadow">
      <h1 className="text-3xl font-bold text-center mb-4">Project Hierarchy</h1>
      <Tree
        data={treeData}
        collapsible={true}
        onClick={handleNodeClick}
        translate={{ x: 100, y: 300 }}  // Adjust initial positioning
        zoomable={true}
        orientation="horizontal"  // Horizontal orientation
        nodeSize={{ x: 200, y: 100 }}  // Adjust size for spacing
        pathFunc="diagonal"  // Use diagonal lines for connections
        styles={{
          links: {
            strokeWidth: 2,  // Adjust line width
            stroke: '#888',  // Adjust line color
          },
          nodes: {
            node: {
              circle: { display: 'none' }, // Remove circles from nodes
              name: {
                fontSize: '16px',
                fontWeight: 'bold',
                fill: '#333', // Set node name color
              },
            },
            leafNode: {
              circle: { display: 'none' }, // Remove circles from leaf nodes
              name: {
                fontSize: '16px',
                fontWeight: 'bold',
                fill: '#333', // Set node name color
              },
            },
          },
        }}
      />
    </div>
  );
};

export default TreeGraph;
