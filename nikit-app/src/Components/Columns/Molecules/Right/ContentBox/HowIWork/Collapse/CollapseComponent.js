import React from 'react'
import { Collapse } from "antd";
import AddFillIcon from "remixicon-react/AddFillIcon";
import MailFillIcon from "remixicon-react/MailFillIcon";
import PhoneFillIcon from "remixicon-react/PhoneFillIcon";
import ShareBoxFillIcon from "remixicon-react/ShareBoxFillIcon";
import CloseFillIcon from "remixicon-react/CloseFillIcon";
export default function CollapseComponent() {
    const { Panel } = Collapse;
  return (
    <section>


    <Collapse
          bordered={false}
          className="CollapseParent"
          defaultActiveKey={["1"]}
          expandIcon={({ isActive }) => (
            <div>
              <AddFillIcon
                className={`${isActive
                    ? "collapseHeaderIconExpand"
                    : "collapseHeaderIconCollapse"
                  }`}
              />
            </div>
          )}
          expandIconPosition="right"
          onChange={() => { }}
        >
          <Panel key="1" header="Contacts">
            {/* {contact()} */}
          </Panel>
        </Collapse>
        </section>
  )
}
