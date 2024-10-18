import PropTypes from 'prop-types';

const ParentNode = ({ nodeData, handleClick }) => {
  console.log("ParentNode----nodeData", nodeData.name);

  return (
    <div  className="border-2 border-dashed border-gray-500 p-2.5 bg-white cursor-pointer"
      onClick={() => handleClick(nodeData)}
    >
      <p className="text-base text-black">DADNODE{nodeData.name|| 'No Name'}</p> 
    </div>
  );
};

// Prop validation
ParentNode.propTypes = {
  nodeData: PropTypes.shape({
    name: PropTypes.string.isRequired,  
  }).isRequired,
  handleClick: PropTypes.func.isRequired,  
};

export default ParentNode;
