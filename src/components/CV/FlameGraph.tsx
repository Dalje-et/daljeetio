import React, { useState, useRef } from "react";

import { CV_ITEMS } from "./cv_items";

type Item = {
  /* Name of the activity, e.g. name of school or company. */
  name: string;
  /* Type of the activity. */
  type: "Experience" | "Education";
  /* Position held. Only necessary if activity is of type Experience. */
  position?: string;
  /* Location of the activity, e.g. Paris, France. */
  location: string;
  /* Start date of the activity. */
  start: Date;
  /* End date of the activity. None provided is interpreted as an ongoing activity. */
  end?: Date;
};

type FlameGraphProps = {
  /* Start date of the flame graph. Only month and year matters, e.g. new Date(2015, 7). */
  start: Date;
  /* Number of months that the graph shall display.  None provided is interpreted as {today}. */
  duration?: number;
  /* Classes to apply */
  className?: string;
};

export default function FlameGraph({ className, start, duration }: FlameGraphProps) {
  const [expandedItemIndex, setExpandedItemIndex] = useState(null);
  const refs = useRef([]);

  function calculatePercentage(x: number, y: number) {
    return Math.round((x / y) * 100);
  }

  function monthsBetween(date1, date2) {
    let months;
    months = (date2.getFullYear() - date1.getFullYear()) * 12;
    months -= date1.getMonth() + 1;
    months += date2.getMonth();
    return months <= 0 ? 0 : months;
  }

  function getItemClass(index, itemStart: Date, itemDuration: number, graphStart: Date, graphDuration: number): string {
    // use graphStart if itemStart is out of range
    if (itemStart < graphStart) {
      itemStart = graphStart;
    }

    const justifyContent =
      expandedItemIndex === index
        ? "left-0"
        : `left-[${calculatePercentage(
            monthsBetween(graphStart, itemStart),
            graphDuration
          )}%]`;

		const width = 
			expandedItemIndex === index
			  ? 'w-[100%]'
				: `w-[${calculatePercentage(itemDuration, graphDuration)}%]`;
				
		const height = expandedItemIndex === index ? 'h-fit' : 'h-[25px]';

    let css = `${width} ${height} ${justifyContent} mt-1 flex flex-col relative `;
    css += "border-solid border-[1px] border-passive rounded-md ";
    css += "overflow-hidden overflow-ellipsis hover:cursor-pointer ease-linear "
    css += "px-1 "
    if (expandedItemIndex != null && expandedItemIndex !== index) {
      css += "blur-xs";
    }
    return css;
  }

  function onItemClick(e: React.MouseEvent<HTMLDivElement>, index): void {
    expandedItemIndex === index
      ? setExpandedItemIndex(null)
      : setExpandedItemIndex(index);
  }

  function getMonthYearString(date: Date): string { 
    return date ? date.getMonth() + 1 + "/" + date.getFullYear() : "Present";
  }

  if (!duration) {
    duration = monthsBetween(start, new Date());
  }

  return (
    <div className={`flex-col ${className}`}>
      {CV_ITEMS.map((item, index) => {
        let itemDuration = monthsBetween(
          item.start,
          item.end ? item.end : new Date()
        );

        return (
          <div
            key={index}
            ref={(element) => refs.current.push(element)}
						onClick={(e) => onItemClick(e, index)}
            className={`${getItemClass(
              index,
              item.start,
              itemDuration,
              start,
              duration
            )}`}
						style={{
							transition: 'width 0.5s, left 0.5s, height 0.5s, filter 0.5s',
              minWidth: '25px'
						}}
          >
            <>
              <strong className="font-mono">
                {
                  item.position
                  ? <span>👨🏽‍💻 {item.position}</span>
                  : <span>👨🏽‍🎓 Student</span>
                }
              </strong>

              <div className="px-3 py-3">
                <span className="text-sm text-gray-700">{item.name} · {getMonthYearString(item.start)} - {getMonthYearString(item.end)}</span>
                <span className="text-sm text-gray-700">{item.location}</span>
                
                <hr className="my-3"/>
                <ul className="text-sm text-gray-500 list-disc list-inside space-y-2">
                  {item.descriptions.map((d, index) => 
                    <li key={index}>{d}</li>
                  )}
                </ul>
              </div>
            </>
          </div>
        );
      })}
    </div>
  );
}
