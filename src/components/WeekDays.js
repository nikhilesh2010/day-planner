import "./styles/home.css"
import React, { useState } from 'react';

const WeekDays = (props) => {
    const { onSelectDay } = props;
    const [selectedDay, setSelectedDay] = useState(null);

    const handleDayClick = (e) => {
        const day = e.target.value;
        onSelectDay(day);
        setSelectedDay(day);
    };

    return (
        <div className="days">
            {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day) => (
                <button
                    key={day}
                    type="button"
                    value={day}
                    onClick={handleDayClick}
                    className={selectedDay === day ? 'selected' : ''}
                >
                    {day}
                </button>
            ))}
        </div>
    );
};

export default WeekDays;
