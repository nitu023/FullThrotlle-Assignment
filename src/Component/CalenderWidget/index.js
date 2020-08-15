import React from "react"
import data from "../../Asset/testData.json"
import moment from "moment"
import "moment-timezone"
import Timeline from "react-calendar-timeline"
import "react-calendar-timeline/lib/Timeline.css"

export default function CalenderWidget(props) {
  const selMember = data.members[props.idx];
  const groups = [{ id: selMember.id, title: selMember.real_name }];
  const items = selMember.activity_periods.map((a, idx) => ({
    id: idx,
    group: selMember.id,
    title: "",
    start_time: moment.tz(a.start_time, "MMM D YYYY  h:mma", selMember.tz),
    end_time: moment.tz(a.end_time, "MMM D YYYY  h:mma", selMember.tz),
  }));

  return (
    <Timeline
      groups={groups}
      items={items}
      color="blue"
      defaultTimeStart={moment().startOf("year")}
      defaultTimeEnd={moment().endOf("year")}
    />
  )
}
