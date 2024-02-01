import React from 'react';

const EventList = (props) => {
    return (
        <div className="event-list">
            {props.children}
        </div>
    );
};

export default EventList;
