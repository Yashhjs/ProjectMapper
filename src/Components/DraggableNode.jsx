// DraggableNode.js
import PropTypes from 'prop-types';

const DraggableNode = (WrappedComponent) => {
  const ComponentWithDrag = (props) => {
    const handleDragStart = (event) => {
      event.dataTransfer.setData('nodeData', JSON.stringify(props.nodeData));
    };

    const handleDrop = (event) => {
      event.preventDefault();
      const droppedNodeData = JSON.parse(event.dataTransfer.getData('nodeData'));
      const dropPosition = { x: event.clientX, y: event.clientY };
      console.log('Dropped node:', droppedNodeData, 'Drop position:', dropPosition);
      // You can implement additional logic here to handle the drop action.
    };

    const handleDragOver = (event) => {
      event.preventDefault(); // Allow drop
    };

    return (
      <g
        draggable
        onDragStart={handleDragStart}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <WrappedComponent {...props} />
      </g>
    );
  };

  // Set the display name for better debugging
  ComponentWithDrag.displayName = `Draggable(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  // Define PropTypes for the wrapped component
  ComponentWithDrag.propTypes = {
    nodeData: PropTypes.shape({
      name: PropTypes.string.isRequired,
      // Add other fields that you expect in nodeData
    }).isRequired,
  };

  return ComponentWithDrag;
};

export default DraggableNode;
