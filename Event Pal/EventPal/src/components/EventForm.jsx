import { useState } from "react";

export const EventForm = () => {

  const [formData, setFormData] = useState({
    title: '',
    date: '',
    description: '',
    location: '',
    category: '',
    type: 'online',
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="eventForm">
      <h2>Create New Event</h2>
      <div className = 'form'>
      <input name='title' placeholder='Title' onChange={handleChange} required />
      <input name='date' type="date" onChange={handleChange} required />
      <input name='location' placeholder='Location' onChange={handleChange} required />
      <select name='category' onChange={handleChange}>
        <option value='Webinar'>Webinar</option>
        <option value='Meetup'>Meetup</option>
        <option value='Workshop'>Workshop</option>
      </select>
      <select name='type' onChange={handleChange}>
        <option value='online'>Online</option>
        <option value='offline'>Offline</option>
      </select>
      <textarea name='description' placeholder='Description' onChange={handleChange}></textarea>
      <button type="submit">Create Event</button>
      </div>
    </form>
  )
}
