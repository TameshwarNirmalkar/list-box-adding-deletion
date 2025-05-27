"use client";

import DateTimeComponent from "@/components/CurrentDateTime";
import { Button, Col, Row } from "antd";
import { useState } from "react";

export default function DashboardPage() {
  const [currentTime, setCurrentTime] = useState("");

  const handleClick = () => {
    const now = new Date();
    setCurrentTime(now.toLocaleTimeString());
  };
  return (
    <Row suppressHydrationWarning={true}>
      <Col span={8}>
        {currentTime}
        <Button type="primary" color="danger" onClick={handleClick}>
          Get Current Time
        </Button>

        <DateTimeComponent datetime={`abdfdsfa ::`} />
      </Col>
      <Col span={16}>col-6 col-pull-18</Col>
    </Row>
  );
}
