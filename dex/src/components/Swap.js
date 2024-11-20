import React from "react";
import { useState, useEffect } from "react";
import { input, Popover, Radio, Modal, message } from "antd";
import {
  ArrowdownOulined,
  DownOutlined,
  SettingOutlined,
} from "@ant-design/icons";

function Swap() {
  const [slippage, setSlippage] = useState(2.5);

  const handleSlippageChange = (e) => {
    setSlippage(e.target.value);
  };
  const settings = (
    <>
      <div>Slippage Tolernce</div>
      <div>
        <Radio.Group value={slippage} onChange={handleSlippageChange}>
          <Radio.Button value={0.5}>0.5%</Radio.Button>
          <Radio.Button value={2.5}>2.5%</Radio.Button>
          <Radio.Button value={5.0}>5.0%</Radio.Button>
        </Radio.Group>
      </div>
    </>
  );
  return (
    <div className="tradeBox">
      <div className="tradeBoxHeader">
        <h4>Swap</h4>
        <Popover
          title="Settings"
          content={settings}
          trigger="click"
          placement="bottomRight"
        >
          <SettingOutlined className="cog" />
        </Popover>
      </div>
    </div>
  );
}

export default Swap;
