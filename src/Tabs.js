import React, { useState } from "react";
import TabsContent from "./TabsContent";

const Tabs = ({ children, defaultActiveTab = 0 }) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  const tabs = React.Children.toArray(children).filter(
    (child) => child.type === TabsContent
  );

  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div>
        {tabs.map((tab, index) => {
          return (
            <button
              key={index}
              disabled={tab?.props?.disabled}
              onClick={() => handleClick(index)}
              style={{ backgroundColor: activeTab === index ? "green" : "" }}
            >
              {tab.props.label}
            </button>
          );
        })}
      </div>
      <div style={{ border: "1px solid black" }}>{tabs[activeTab]}</div>
    </div>
  );
};

export default Tabs;
