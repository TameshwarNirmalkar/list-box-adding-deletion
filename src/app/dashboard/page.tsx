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
    <Row>
      <Col span={12} push={12}>
        {currentTime}
        <Button type="primary" color="danger" onClick={handleClick}>
          Get Current Time
        </Button>

        <DateTimeComponent datetime={`abdfdsfa ::`} />
      </Col>
      <Col span={12} pull={12}>
        col-6 col-pull-18
      </Col>
    </Row>
  );
}
