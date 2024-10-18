import PropTypes from 'prop-types';
import DraggableNode from './DraggableNode';

const ParentNode = ({ nodeData, handleClick }) => {
  return (
    <g
      onClick={() => handleClick(nodeData)}
      cursor="pointer"
    >
      <rect
        x={-50}
        y={-20}
        width={110}
        height={40}
        fill="#0096FF"
        stroke="gray"
      />
      <text
        textAnchor="middle"
        dominantBaseline="middle" 
        fontSize="16"
        fontFamily='fantasy'
        fill="black"
      >
        {nodeData.name || 'No Name'}
      </text>
    </g>
  );
};

// Prop validation
ParentNode.propTypes = {
  nodeData: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default DraggableNode(ParentNode);
