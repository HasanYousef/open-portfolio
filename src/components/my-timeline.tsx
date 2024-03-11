import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

export default function MyTimeline() {
  const list = [
    {
      date: "",
      iconPath: "",
      content: "",
    },
    {
      date: "",
      iconPath: "",
      content: "",
    },
    {
      date: "",
      iconPath: "",
      content: "",
    },
    {
      date: "",
      iconPath: "",
      content: "",
    },
  ];

  return (
    <div className="flex flex-col justify-between items-start w-full max-w-5xl">
      <Timeline>
        {list.map((item, index) => (
          <TimelineItem>
            <TimelineOppositeContent className="text-slate-400 max-w-14 pl-0">
              2020
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              {index !== list.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent className="text-slate-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam quas, deleniti repellat placeat molestias,
              exercitationem sequi reiciendis recusandae dolores autem dolorum
              officia facere velit necessitatibus perferendis iste quod iusto
              voluptate.
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
