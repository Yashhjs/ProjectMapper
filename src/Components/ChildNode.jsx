import PropTypes from 'prop-types';

const ChildNode = ({ nodeData, handleClick }) => {
  console.log("nodeData", nodeData.name);
  
  return (
    <div  className="border-2 border-dashed border-gray-500 p-2.5 bg-white cursor-pointer"
      onClick={() => handleClick(nodeData)}
    >
    <p className="text-base text-black">CHILDNODE{nodeData.name || 'No Name'}</p>    </div>
  );
};

// Prop validation
ChildNode.propTypes = {
  nodeData: PropTypes.shape({
    name: PropTypes.string.isRequired,  
  }).isRequired,
  handleClick: PropTypes.func.isRequired,  
};

export default ChildNode;
