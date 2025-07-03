import '../css/H&B&C.css'
import { useSelector } from 'react-redux'
import events from '../data/events.json'
import {EventCard} from '../components/EventCard'

export const Bookmarks = () => {
  const bookmarkedIds = useSelector(state => state.bookmarks.ids);
  const bookmarkedEvents = events.filter(event => bookmarkedIds.includes(event.id));

  return (
    <div className = 'bookmark'>
      <h1>My Bookmarked Events</h1>
      <div className = 'eventGrid'>
        {bookmarkedEvents.length > 0 ? (
          bookmarkedEvents.map(event => <EventCard key={event.id} event={event} />)
        ) : (
          <p>No bookmarked events</p>
        )}
      </div>
    </div>
  )
}
