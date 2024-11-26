import React from "react";
import { Droppable } from "@hello-pangea/dnd";
import ConfigForms from "./ConfigForms";

const MainArea = ({
  droppedSections,
  configData,
  updateSectionData,
  onRemove,
}) => {
  return (
    <Droppable droppableId="main-area">
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          style={{
            minHeight: "300px",
            border: "1px dashed #ccc",
            padding: "10px",
            background: "#f9f9f9",
          }}
        >
          <h2>EdgeConnect Configuration to YAML/CSV</h2>

          {droppedSections.map((section) => (
            <div
              key={section}
              style={{
                marginBottom: "10px",
                padding: "8px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                background: "#fff",
              }}
            >
              <h4>{section}</h4>

              {/* Render the appropriate form for the section */}
              <ConfigForms
                section={section}
                data={configData[section] || {}} // Ensure valid data is passed
                onSave={(formData) => updateSectionData(section, formData)}
              />

              <button
                onClick={() => onRemove(section)}
                style={{
                  marginTop: "10px",
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "4px",
                  background: "#e74c3c",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))}

          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default MainArea;
