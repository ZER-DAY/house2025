"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import Image from "next/image";

const Timeline = () => {
  const timelineData = [
    {
      title: "Software Engineer",
      subtitle: "Tech Corp",
      date: "2023 - Present",
      description:
        "Developed scalable web applications using React and Node.js.",
      icon: <FaBriefcase />,
      iconBackground: "#4F46E5",
      image: "/background.png",
    },
    {
      title: "Bachelor of Computer Science",
      subtitle: "XYZ University",
      date: "2019 - 2023",
      description: "Graduated with honors in Computer Science.",
      icon: <FaGraduationCap />,
      iconBackground: "#E11D48",
      image: "/images/graduation.jpg",
    },
  ];

  return (
    <div style={{ backgroundColor: "#000", padding: "20px" }}>
      <h1 style={{ color: "#fff", textAlign: "center", marginBottom: "20px" }}>
        My Timeline
      </h1>
      <VerticalTimeline>
        {timelineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            date={item.date}
            contentStyle={{ background: "#1E293B", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #1E293B" }}
            iconStyle={{ background: item.iconBackground, color: "#fff" }}
            icon={item.icon}
          >
            <h3 style={{ color: "#fff" }}>{item.title}</h3>
            <h4 style={{ color: "#ccc" }}>{item.subtitle}</h4>
            <p style={{ color: "#aaa" }}>{item.description}</p>
            {item.image && (
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "200px",
                  marginTop: "10px",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
