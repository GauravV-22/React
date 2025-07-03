import '../css/H&B&C.css'
import { useSearchParams } from 'react-router-dom'
import events from '../data/events.json'
import {EventCard} from '../components/EventCard'
import EventFilters from '../components/EventFilter'

export const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const filters = {
    type: searchParams.get('type') || '',
    category: searchParams.get('category') || '',
    date: searchParams.get('date') || ''
  };

  const handleFilter = (updated) => {
    setSearchParams(updated);
  };

  const filteredEvents = events.filter(event => {
    const Type = filters.type ? event.type === filters.type : true;
    const Category = filters.category ? event.category === filters.category : true;
    const Date = filters.date ? event.date === filters.date : true;
    return (Type && Category && Date);
  });

  return (
    <div className = 'home'>

     <div className='top'> <h1>Discover Events</h1>
      <EventFilters className='filters' filters={filters} onFilterChange={handleFilter}/></div>

      <div className="eventGrid">
          {
            filteredEvents.length > 0 ? (
              filteredEvents.map(event => <EventCard key={event.id} event={event} />))
              : ( <p>No events found</p> )
          }
      </div>

    </div>
  )
}