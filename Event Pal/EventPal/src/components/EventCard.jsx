import { useDispatch, useSelector } from 'react-redux';
import { toggleBookmark } from '../Redux/bookmarkSlice';

export const EventCard = ({ event }) => {
  const dispatch = useDispatch();
  const bookmarkedIds = useSelector((state) => state.bookmarks.ids);
  const bookmarked = bookmarkedIds.includes(event.id);

  return (
    <div className="eventCard">
      <h3>{event.title}</h3>
      <p>{event.date} – {event.location}</p>
      <p className="description">{event.description}</p>
      <button className="bookmark-btn" onClick={() => dispatch(toggleBookmark(event.id))}>
        {bookmarked ?'Bookmarked':'Bookmark'}
      </button>
    </div>
  )
}
