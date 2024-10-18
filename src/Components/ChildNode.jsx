import PropTypes from 'prop-types';
import DraggableNode from './DraggableNode';

const ChildNode = ({ nodeData, handleClick }) => {
  return (
    <>
      <g
        onClick={() => handleClick(nodeData)}
        cursor="pointer"
      >
        <circle r={50} fill="#FFC300 " stroke="gray" />
        <text
          x="0"
          y="0"
          textAnchor="middle"
          dominantBaseline="middle" 
          fontSize="12"
          fontFamily='fantasy'
          fill="black"
        >
          {nodeData.name || 'No Name'}
        </text>
      </g>
    </>
  );
};

// Prop validation
ChildNode.propTypes = {
  nodeData: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired
};

export default DraggableNode(ChildNode);
