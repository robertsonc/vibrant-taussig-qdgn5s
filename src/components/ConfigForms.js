import React from "react";
import ApplianceInfoForm from "./ApplianceInfoForm";
import BgpSystemConfigForm from "./BgpSystemConfigForm";
import BridgeGroupsForm from "./BridgeGroupsForm";

const ConfigForms = ({ section, data = {}, onSave }) => {
  console.log("Rendering form for:", section, "with data:", data);

  switch (section) {
    case "applianceInfo":
      return <ApplianceInfoForm data={data} onSave={onSave} />;
    case "bgpSystemConfig":
      return <BgpSystemConfigForm data={data} onSave={onSave} />;
    case "bridgeGroups":
      return <BridgeGroupsForm data={data} onSave={onSave} />;
    default:
      return <p>No form available for {section}</p>;
  }
};

export default ConfigForms;
