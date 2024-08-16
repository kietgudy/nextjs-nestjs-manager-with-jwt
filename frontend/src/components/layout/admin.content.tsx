'use client'
import { Layout } from 'antd';
import React from 'react'
const { Content } = Layout;


const AdminContent = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: "#ccc",
              borderRadius: "#cccd",
            }}
          >
            {children}
          </div>
        </Content>
  )
}

export default AdminContent