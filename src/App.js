import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MainArea from "./components/MainArea";
import Preview from "./components/Preview";
import { DragDropContext } from "@hello-pangea/dnd";
import "./App.css";

const initialSections = [
  "applianceInfo",
  "bgpSystemConfig",
  "localRoutes",
  "ecLicensing",
  "bridgeGroups",
  "linkAggregation",
  "customApplianceTags",
  "interfaceConfig",
  "usblte",
  "pppoe",
  "virtualTunnelInterface",
  "managementIp",
];

const App = () => {
  const [remainingSections, setRemainingSections] = useState(initialSections); // Sidebar items
  const [droppedSections, setDroppedSections] = useState([]); // Main area items
  const [configData, setConfigData] = useState({}); // Configuration data for each section

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { draggableId, destination } = result;

    // Handle item drop into the main area
    if (
      destination.droppableId === "main-area" &&
      !droppedSections.includes(draggableId)
    ) {
      setDroppedSections((prev) => [...prev, draggableId]);
      setRemainingSections((prev) =>
        prev.filter((item) => item !== draggableId)
      );
    }
  };

  const updateSectionData = (section, data) => {
    setConfigData((prev) => ({
      ...prev,
      [section]: data,
    }));
  };

  const handleRemove = (section) => {
    setDroppedSections((prev) => prev.filter((item) => item !== section));
    if (!remainingSections.includes(section)) {
      setRemainingSections((prev) => [...prev, section]);
    }
    setConfigData((prev) => {
      const updatedConfig = { ...prev };
      delete updatedConfig[section];
      return updatedConfig;
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={{ display: "flex", height: "100vh" }}>
        {/* Sidebar */}
        <div style={{ width: "20%", background: "#f4f4f4", padding: "10px" }}>
          <Sidebar remainingSections={remainingSections} />
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <MainArea
            droppedSections={droppedSections}
            configData={configData}
            updateSectionData={updateSectionData}
            onRemove={handleRemove}
          />
          <Preview configData={configData} />
        </div>
      </div>
    </DragDropContext>
  );
};

export default App;
