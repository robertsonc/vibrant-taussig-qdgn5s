import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";

const BridgeGroupsForm = ({ data = {}, onSave }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      bridgeGroups: [
        {
          bridgeGroup: "",
          interfaces: [],
          mtu: "",
          adminStatus: "Up",
          comment: "",
        },
        ...(data.bridgeGroups || []),
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "bridgeGroups",
  });

  const onSubmit = (formData) => {
    onSave(formData);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      style={{
        marginBottom: "10px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        padding: "10px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <h4 style={{ margin: 0 }}>Bridge Groups Configuration</h4>
        <button
          onClick={toggleExpand}
          style={{
            padding: "5px 10px",
            border: "none",
            borderRadius: "4px",
            backgroundColor: isExpanded ? "#ff6347" : "#007bff",
            color: "#fff",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          {isExpanded ? "Collapse" : "Expand"}
        </button>
      </div>

      {isExpanded && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            height: "300px", // Fixed height for scrolling
            overflowY: "auto",
            paddingRight: "10px",
          }}
        >
          {fields.map((item, index) => (
            <div
              key={item.id}
              style={{ borderBottom: "1px solid #ddd", paddingBottom: "10px" }}
            >
              <h5>Bridge Group {index + 1}</h5>
              <label>Bridge Group Name:</label>
              <input
                {...register(`bridgeGroups.${index}.bridgeGroup`)}
                placeholder="Enter bridge group name"
                style={{
                  width: "100%",
                  padding: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />

              <label>MTU:</label>
              <input
                type="number"
                {...register(`bridgeGroups.${index}.mtu`)}
                placeholder="Enter MTU"
                style={{
                  width: "100%",
                  padding: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />

              <label>Admin Status:</label>
              <select
                {...register(`bridgeGroups.${index}.adminStatus`)}
                style={{
                  width: "100%",
                  padding: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              >
                <option value="Up">Up</option>
                <option value="Down">Down</option>
              </select>

              <label>Comment:</label>
              <input
                {...register(`bridgeGroups.${index}.comment`)}
                placeholder="Enter comment"
                style={{
                  width: "100%",
                  padding: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />

              <label>Interfaces:</label>
              <input
                {...register(`bridgeGroups.${index}.interfaces`)}
                placeholder="Enter comma-separated interfaces (e.g., lan0, wan0)"
                style={{
                  width: "100%",
                  padding: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />

              <button
                type="button"
                onClick={() => remove(index)}
                style={{
                  marginTop: "10px",
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: "4px",
                  backgroundColor: "#ff6347",
                  color: "#fff",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Remove Bridge Group
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={() =>
              append({
                bridgeGroup: "",
                interfaces: [],
                mtu: "",
                adminStatus: "Up",
                comment: "",
              })
            }
            style={{
              marginTop: "10px",
              padding: "8px 16px",
              border: "none",
              borderRadius: "4px",
              backgroundColor: "#007bff",
              color: "#fff",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Add Bridge Group
          </button>

          <button
            type="submit"
            style={{
              marginTop: "10px",
              padding: "8px 16px",
              border: "none",
              borderRadius: "4px",
              backgroundColor: "#007bff",
              color: "#fff",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Save
          </button>
        </form>
      )}
    </div>
  );
};

export default BridgeGroupsForm;
