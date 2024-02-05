import React, { useState, useEffect } from 'react';
import WeekDays from "./WeekDays";
import "./styles/home.css";
import EventCard from './EventCard';
import EventList from './EventList';


    
const Home = (props) => {
    
    const [state, setState] = useState({
        title: "",
        description: "",
    });
    const [events, setEvents] = useState([]);
    const [selectedDay, setSelectedDay] = useState(null);
    
    // Load events from local storage on component mount
    useEffect(() => {
        const storedEvents = localStorage.getItem('events');
        if (storedEvents) {
            setEvents(JSON.parse(storedEvents));
        }
    }, []);

    // Save events to local storage whenever the events state changes
    useEffect(() => {
        localStorage.setItem('events', JSON.stringify(events));
    }, [events]);

    const add = (e) => {
        e.preventDefault();
        // const { title, description, date } = state;
        // setSubmittedData({ title, description, date });
        // console.log('Title:', title);
        // console.log('Description:', description);
        // console.log('Date:', date);
        // setState({ title: '', description: '', date: '' });

        const { title, description, date } = state;

        // Get the day of the week from the entered date
        const day = new Date(date).toLocaleDateString('en-US', { weekday: 'long' });
        const dayOfWeek = day.substring(0,3).toUpperCase();

        const newEvent = { title, description, date, dayOfWeek };

        setEvents([...events, newEvent]);

        console.log('Title:', title);
        console.log('Description:', description);
        console.log('Date:', date);
        console.log('Day of the Week:', dayOfWeek);

        setState({ title: '', description: '', date: '' });
    };
    const deleteEvent = (index) => {
        const updatedEvents = [...events];
        updatedEvents.splice(index, 1);
        setEvents(updatedEvents);
    };

    const handleSelectDay = (day) => {
        setSelectedDay(day);
    };
    const filteredEvents = selectedDay ? events.filter((event) => event.dayOfWeek === selectedDay) : events;

    console.log('Selected Day:', selectedDay);
    console.log('Filtered Events:', filteredEvents);


    return (
        <div className='body'>
            <form onSubmit={add}>
                <div className="addPlan">
                    <div>
                        <div>
                            <input
                                type="text"
                                value={state.title} 
                                onChange={(e) => setState({ ...state, title: e.target.value })}
                                placeholder='Title'
                                className='title'
                            />
                        </div>
                        <input type='date' value={state.date} onChange={(e) => setState({ ...state, date: e.target.value })} className='date' />
                    </div>
                    <br />
                    <div>
                        <input
                            type="text"
                            value={state.description}
                            onChange={(e) => setState({ ...state, description: e.target.value })}
                            placeholder='Description'
                            className='description'
                        />
                        <button type='submit' className="save">SAVE</button>
                    </div>
                </div>
            </form>
            
            <WeekDays onSelectDay={handleSelectDay} />

            <EventList>
                {filteredEvents.map((event, index) => (
                    <EventCard key={index} event={event} onDelete={() => deleteEvent(index)} />
                ))}
            </EventList>

        </div>
    )
};

export default Home;
