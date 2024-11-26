import React, { useState } from "react";
import { Modal, Button } from "antd";
import YAML from "js-yaml";
import { saveAs } from "file-saver";
import Papa from "papaparse";

const Preview = ({ configData }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const yamlPreview = YAML.dump(configData);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const exportYAML = () => {
    const blob = new Blob([yamlPreview], { type: "text/yaml;charset=utf-8" });
    saveAs(blob, "config.yaml");
  };

  const exportCSV = () => {
    const rows = Object.keys(configData).map((section) => {
      const keys = Object.keys(configData[section] || {});
      return [section, ...keys];
    });
    const csv = Papa.unparse(rows);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    saveAs(blob, "config.csv");
  };

  return (
    <>
      {/* Fixed Link at Bottom */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          padding: "10px",
          backgroundColor: "#f0f2f5",
          textAlign: "center",
          boxShadow: "0px -2px 10px rgba(0,0,0,0.1)",
          borderTop: "1px solid #ddd",
        }}
      >
        <Button type="primary" onClick={showModal}>
          Open Configuration Preview
        </Button>
      </div>

      {/* Modal Dialog */}
      <Modal
        title="Configuration Preview"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="csv" type="primary" onClick={exportCSV}>
            Export CSV
          </Button>,
          <Button key="yaml" type="primary" onClick={exportYAML}>
            Export YAML
          </Button>,
          <Button key="close" onClick={handleCancel}>
            Close
          </Button>,
        ]}
        width="70%"
      >
        <pre
          style={{
            backgroundColor: "#f9f9f9",
            padding: "10px",
            borderRadius: "4px",
            fontFamily: "monospace",
            fontSize: "14px",
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
            maxHeight: "400px",
            overflowY: "auto",
          }}
        >
          {yamlPreview}
        </pre>
      </Modal>
    </>
  );
};

export default Preview;
