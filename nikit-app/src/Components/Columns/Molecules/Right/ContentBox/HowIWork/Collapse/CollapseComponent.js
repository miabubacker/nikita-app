import React from 'react'
import { Collapse } from "antd";
import AddFillIcon from "remixicon-react/AddFillIcon";
import './Collapse.scss'
export default function CollapseComponent(props) {
    const { Panel } = Collapse;
     const{value,index}=props
  return (
    <section className='colapse'>


    <Collapse
          bordered={false}
          className="CollapseParent"
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
          <Panel key={index} header={value.title}>
         <div>   <p>{value.about}</p></div>
          </Panel>
        </Collapse>
        </section>
  )
}
