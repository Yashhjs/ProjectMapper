// import { useState } from 'react';
// import Tree from 'react-d3-tree';
// import data from '../data.json';

// const TreeGraph = () => {
//   const [treeData, setTreeData] = useState(data);
  
//   // Update container styles for full-screen coverage
//   const containerStyles = {
//     width: '100%',
//     height: '100vh', // Full screen height
//   };

//   // Handle node collapse/expand functionality
//   const handleNodeClick = (nodeData, evt) => {
//     if (nodeData.children) {
//       nodeData._collapsed = !nodeData._collapsed;
//       setTreeData({ ...treeData }); // Re-render tree with updated collapsed state
//     }
//   };

//   return (
//     <div style={containerStyles} className="bg-gray-100 p-4 rounded shadow">
//       <h1 className="text-3xl font-bold text-center mb-4">Project Hierarchy</h1>      
//       <Tree
//         data={treeData}
//         collapsible={true}
//         onClick={handleNodeClick}
//         translate={{ x: 100, y: 300 }}  // Adjust initial positioning
//         zoomable={true}
//         orientation="horizontal"  // Horizontal orientation
//         nodeSize={{ x: 200, y: 100 }} 
//         pathFunc="diagonal"  
//         styles={{
//           links: {
//             strokeWidth: 2,  // Adjust line width
//             stroke: '#888',  // Adjust line color
//           },

//           nodes: {
//             node: {
//               circle: { display: 'none' }, // Remove circles from nodes
//               name: {
//                 fontSize: '16px',
//                 fontWeight: 'bold',
//                 fill: '#333', 
//                 margin:'100px',
//               },
//             },
//             leafNode: {
//               circle: { display: 'none' }, 
//               name: {
//                 fontSize: '16px',
//                 fontWeight: 'bold',
//                 fill: '#333', 
//                 margin:'100px',
//               },
//             },
//           },
//         }}
//       />
//     </div>
//   );
// };

// export default TreeGraph;









// import { useState } from 'react';
// import Tree from 'react-d3-tree';
// import data from '../data.json';

// const TreeGraph = () => {
//   const [treeData, setTreeData] = useState(data);

//   // Handle node collapse/expand functionality
//   const handleNodeClick = (nodeData) => {
//     if (nodeData.children) {
//       nodeData._collapsed = !nodeData._collapsed;
//       setTreeData({ ...treeData }); // Re-render tree with updated collapsed state
//     }
//   };

//   // Render custom node elements
//   const renderCustomNode = ({ nodeDatum, toggleNode }) => {
//     return (
//       <g>
//         <circle r={15} fill="#888" onClick={toggleNode}></circle>
//         <text fill="black" strokeWidth="1" x={20} y={0}>
//           {nodeDatum.name}
//         </text>
//       </g>
//     );
//   };

//   return (
//     <div style={{ width: '100%', height: '100vh' }} className="bg-gray-100 p-4 rounded shadow">
//       <h1 className="text-3xl font-bold text-center mb-4">Project Hierarchy</h1>
//       <Tree
//         data={treeData}
//         collapsible={true}
//         orientation="horizontal"
//         translate={{ x: 100, y: 300 }}
//         zoomable={true}
//         nodeSize={{ x: 200, y: 100 }}
//         pathFunc="diagonal"
//         renderCustomNodeElement={renderCustomNode}  // Custom node rendering
//         styles={{
//           links: {
//             strokeWidth: 2,
//             stroke: '#888',
//           },
//         }}
//       />
//     </div>
//   );
// };

// export default TreeGraph;








import { useState } from 'react';
import Tree from 'react-d3-tree';
import data from '../data.json';
import ParentNode from './ParentNode';
import ChildNode from './ChildNode';

const TreeGraph = () => {
  const [treeData, setTreeData] = useState(data);

  const renderCustomNode = ({ nodeDatum, toggleNode }) => {
    const isParent = nodeDatum.children && nodeDatum.children.length > 0;

    return (
      <g>
        {isParent ? (
          <ParentNode nodeData={nodeDatum} handleClick={() => toggleNode(nodeDatum)} />
        ) : (
          <ChildNode nodeData={nodeDatum} handleClick={() => toggleNode(nodeDatum)} />
        )}
      </g>
    );
  };

  return (
    <div style={{ width: '100%', height: '100vh' }} className="bg-gray-100 p-4 rounded shadow">
      <h1 className="text-3xl font-bold text-center mb-4">Project Hierarchy</h1>
      <Tree
        data={treeData}
        collapsible
        orientation="horizontal"
        translate={{ x: 250, y: 400 }}
        zoomable
        nodeSize={{ x: 200, y: 110 }}
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
