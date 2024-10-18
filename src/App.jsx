import { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ItemType = {
  TEXT: 'text',
};


const DraggableText = ({ textItem, index, onDelete, onTextChange, onMove, onBlur }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType.TEXT,
    item: { index, textItem }, // Include textItem to pass its position
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop(() => ({
    accept: ItemType.TEXT,
    hover: (draggedItem, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset(); // Get the change in position
      if (draggedItem.index !== index) {
        const newX = textItem.x + delta.x; // Calculate new x position
        const newY = textItem.y + delta.y; // Calculate new y position
        onMove(draggedItem.index, index, newX, newY); // Pass new position to onMove
        draggedItem.index = index; // Update dragged item's index
      }
    },
  }));

  const [isEditing, setIsEditing] = useState(false); // State to track editing mode

  const handleClick = () => {
    setIsEditing(true); // Switch to editing mode on text click
  };

  const handleBlur = (e) => {
    onBlur();
    setIsEditing(false); // Exit editing mode on blur
    e.stopPropagation(); // Prevent click from propagating to the canvas
  };

  return (
    <div
      ref={(node) => drag(drop(node))}
      style={{
        position: 'absolute',
        left: `${textItem.x}px`,
        top: `${textItem.y}px`,
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
      }}
      onClick={(e) => e.stopPropagation()} 
    >
      <div
        onClick={() => onDelete(index)}
        className="absolute -top-4 -left-4 bg-red-500 text-white p-0 rounded-full cursor-pointer text-xs w-4 h-4 flex items-center justify-center"
      >
        &#x2716; {/* Cross mark for delete icon */}
      </div>

      {/* Conditionally render text or input based on editing state */}
      {isEditing ? (
        <input
          type="text"
          value={textItem.text}
          onChange={(e) => onTextChange(index, e.target.value)}
          onBlur={handleBlur} // Correctly reference the onBlur function
          autoFocus
          className="text-base p-2 border border-gray-300 outline-none"
          style={{ 
            zIndex: 1,
          }}
          placeholder="Type here"
        />
      ) : (
        <div
          onClick={handleClick} // Click to edit
          className="text-base p-2"
          style={{ 
            zIndex: 1,
          }}
        >
          {textItem.text || 'Click to edit...'} {/* Show the text or a placeholder */}
        </div>
      )}
    </div>
  );
};

// Add prop types validation
DraggableText.propTypes = {
  textItem: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired,
  onMove: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

const Canvas = () => {
  const [texts, setTexts] = useState([]);
  const [selectedTextIndex, setSelectedTextIndex] = useState(null); // Track selected text for editing

  const handleClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Add a new text input at the click position
    setTexts((prevTexts) => [...prevTexts, { x, y, text: '' }]);
  };

  const handleTextChange = (index, newText) => {
    const updatedTexts = texts.map((text, i) =>
      i === index ? { ...text, text: newText } : text
    );
    setTexts(updatedTexts);
  };

  const handleBlur = () => {
    setSelectedTextIndex(null);
  };

  const handleDelete = (index) => {
    const updatedTexts = texts.filter((_, i) => i !== index);
    setTexts(updatedTexts);
    setSelectedTextIndex(null);
  };

  const handleMove = (fromIndex, toIndex) => {
    const draggedText = texts[fromIndex];
    const updatedTexts = [...texts];
    updatedTexts.splice(fromIndex, 1); // Remove dragged item
    updatedTexts.splice(toIndex, 0, draggedText); // Insert at new position
    setTexts(updatedTexts);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        className="relative w-screen h-screen bg-gray-200 cursor-pointer"
        onClick={handleClick}
      >
        {texts.map((textItem, index) => (
          <DraggableText
            key={index}
            textItem={textItem}
            index={index}
            onDelete={handleDelete}
            onTextChange={handleTextChange}
            onMove={handleMove}
            onBlur={handleBlur} // Pass down the onBlur function
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default Canvas;
