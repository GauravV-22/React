import events from "../data/events.json";
import { EventCard } from "../components/EventCard";
import "../css/H&B&C.css";

export const Calendar = () => {
  const grouped = events.reduce((acc, event) => {
    const date = new Date(event.date).toISOString().split("T")[0];
    if (!acc[date]) acc[date] = [];
    acc[date].push(event);
    return acc;
  }, {});

  const sortedDates = Object.keys(grouped).sort();

  return (
    <div className='calendar'>
      <h1>Event Timeline</h1>

      {sortedDates.map((date) => (
        <div className="timeline" key={date}>
          <h3 className="date">
            📅 {new Date(date).toLocaleDateString("en-IN", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric"
            })}
          </h3>

          <div className="eventGrid">
            {grouped[date].map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
