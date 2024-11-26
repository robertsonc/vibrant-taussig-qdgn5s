import React from "react";
import { Droppable, Draggable } from "@hello-pangea/dnd";

const Sidebar = ({ remainingSections }) => {
  return (
    <Droppable droppableId="sidebar" isDropDisabled={true}>
      {(provided) => (
        <ul
          ref={provided.innerRef}
          {...provided.droppableProps}
          style={{ listStyle: "none", padding: 0 }}
        >
          {remainingSections.map((section, index) => (
            <Draggable key={section} draggableId={section} index={index}>
              {(provided) => (
                <li
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  style={{
                    padding: "8px",
                    marginBottom: "4px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    background: "#f9f9f9",
                    cursor: "grab",
                    ...provided.draggableProps.style,
                  }}
                >
                  {section}
                </li>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
};

export default Sidebar;
