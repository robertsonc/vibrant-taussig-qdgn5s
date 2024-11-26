import React, { useState } from "react";
import { useForm } from "react-hook-form";

const BgpSystemConfigForm = ({ data = {}, onSave }) => {
  const [isExpanded, setIsExpanded] = useState(true); // Track if the form is expanded
  const { register, handleSubmit } = useForm({
    defaultValues: {
      enable: false,
      asn: "",
      routerId: "",
      enableGracefulRestart: false,
      maxRestartTime: "",
      maxStalePathTime: "",
      redistToSilverPeak: false,
      propagateAsPath: false,
      redistOspfToBgp: false,
      filterTag: "",
      importRouteTarget: "",
      exportRouteTarget: "",
      ...data, // Merge provided data with default values
    },
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
        <h4 style={{ margin: 0 }}>BGP System Configuration</h4>
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
            height: "300px", // Fixed height for scrollable form
            overflowY: "auto", // Enable vertical scrolling
            paddingRight: "10px", // Add padding for scrollbar space
          }}
        >
          <div>
            <label
              style={{
                display: "block",
                fontWeight: "bold",
                marginBottom: "5px",
              }}
            >
              Enable BGP:
            </label>
            <input
              type="checkbox"
              {...register("enable")}
              style={{ width: "20px", height: "20px" }}
            />
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontWeight: "bold",
                marginBottom: "5px",
              }}
            >
              ASN:
            </label>
            <input
              type="number"
              {...register("asn")}
              placeholder="Enter ASN"
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontWeight: "bold",
                marginBottom: "5px",
              }}
            >
              Router ID:
            </label>
            <input
              {...register("routerId")}
              placeholder="Enter Router ID"
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontWeight: "bold",
                marginBottom: "5px",
              }}
            >
              Enable Graceful Restart:
            </label>
            <input
              type="checkbox"
              {...register("enableGracefulRestart")}
              style={{ width: "20px", height: "20px" }}
            />
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontWeight: "bold",
                marginBottom: "5px",
              }}
            >
              Max Restart Time (seconds):
            </label>
            <input
              type="number"
              {...register("maxRestartTime")}
              placeholder="Enter max restart time"
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontWeight: "bold",
                marginBottom: "5px",
              }}
            >
              Max Stale Path Time (seconds):
            </label>
            <input
              type="number"
              {...register("maxStalePathTime")}
              placeholder="Enter max stale path time"
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontWeight: "bold",
                marginBottom: "5px",
              }}
            >
              Redistribute to Silver Peak:
            </label>
            <input
              type="checkbox"
              {...register("redistToSilverPeak")}
              style={{ width: "20px", height: "20px" }}
            />
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontWeight: "bold",
                marginBottom: "5px",
              }}
            >
              Propagate AS Path:
            </label>
            <input
              type="checkbox"
              {...register("propagateAsPath")}
              style={{ width: "20px", height: "20px" }}
            />
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontWeight: "bold",
                marginBottom: "5px",
              }}
            >
              Redistribute OSPF to BGP:
            </label>
            <input
              type="checkbox"
              {...register("redistOspfToBgp")}
              style={{ width: "20px", height: "20px" }}
            />
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontWeight: "bold",
                marginBottom: "5px",
              }}
            >
              Filter Tag:
            </label>
            <input
              type="number"
              {...register("filterTag")}
              placeholder="Enter filter tag"
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>

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

export default BgpSystemConfigForm;
