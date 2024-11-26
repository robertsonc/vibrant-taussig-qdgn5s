import React, { useState } from "react";
import { Form, Input, Button, Select } from "antd";

const { Option } = Select;

const ApplianceInfoForm = ({ onSave }) => {
  const [isExpanded, setIsExpanded] = useState(true); // Track if the form is expanded

  const onFinish = (values) => {
    console.log("Form Values:", values);
    onSave(values);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      style={{
        marginBottom: "10px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "10px",
        backgroundColor: "#f9f9f9",
      }}
    >
      {/* Expand/Collapse Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <h4 style={{ margin: 0 }}>Appliance Info Configuration</h4>
        <Button
          type="primary"
          onClick={toggleExpand}
          style={{
            backgroundColor: isExpanded ? "#ff6347" : "#007bff",
            border: "none",
          }}
        >
          {isExpanded ? "Collapse" : "Expand"}
        </Button>
      </div>

      {/* Form - Conditionally Rendered */}
      {isExpanded && (
        <Form
          layout="vertical"
          onFinish={onFinish}
          style={{
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <Form.Item
            label="Hostname"
            name="hostname"
            rules={[{ required: true, message: "Please enter a hostname!" }]}
          >
            <Input placeholder="Enter hostname" />
          </Form.Item>

          <Form.Item
            label="Group"
            name="group"
            rules={[{ required: true, message: "Please enter a group!" }]}
          >
            <Input placeholder="Enter group" />
          </Form.Item>

          <Form.Item
            label="Site"
            name="site"
            rules={[{ required: true, message: "Please enter a site!" }]}
          >
            <Input placeholder="Enter site" />
          </Form.Item>

          <Form.Item
            label="Network Role"
            name="networkRole"
            rules={[
              { required: true, message: "Please select a network role!" },
            ]}
          >
            <Select placeholder="Select a network role">
              <Option value="hub">Hub</Option>
              <Option value="non-hub">Non-Hub</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default ApplianceInfoForm;
