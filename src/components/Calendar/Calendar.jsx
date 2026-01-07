import React, { useState, useEffect } from "react";
import "./Calendar.css";

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [meetings, setMeetings] = useState({});

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const renderDays = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        const days = [];
        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className="day other-month"></div>);
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const isToday = new Date().toDateString() === new Date(year, month, i).toDateString();
            const dateStr = `${year}-${month + 1}-${i}`;
            const hasMeetings = meetings[dateStr] && Object.keys(meetings[dateStr]).length > 0;

            days.push(
                <div
                    key={i}
                    className={`day ${selectedDate?.getDate() === i && selectedDate?.getMonth() === month ? 'selected' : ''} ${isToday ? 'today' : ''} ${hasMeetings ? 'has-meetings' : ''}`}
                    onClick={() => setSelectedDate(new Date(year, month, i))}
                >
                    {i}
                </div>
            );
        }
        return days;
    };

    const handleSchedule = (e) => {
        e.preventDefault();
        if (!selectedDate || !selectedTime) {
            alert("Please select a date and time");
            return;
        }
        const title = e.target.elements['meeting-title'].value;
        const email = e.target.elements['attendee-email'].value;

        if (!title || !email) {
            alert("Please enter title and email");
            return;
        }

        const dateStr = `${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${selectedDate.getDate()}`;
        const newMeetings = { ...meetings };
        if (!newMeetings[dateStr]) newMeetings[dateStr] = {};
        newMeetings[dateStr][selectedTime] = { title, email };
        setMeetings(newMeetings);
        alert("Meeting Scheduled!");
        e.target.reset();
        setSelectedTime(null);
    };

    return (
        <div className="calendar-container">
            <div className="calendar-header">
                <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))}>
                    <i className="fas fa-chevron-left"></i>
                </button>
                <h2>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
                <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))}>
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>

            <div className="calendar-content">
                <div className="calendar-grid-box">
                    <div className="weekdays">
                        <div>SUN</div><div>MON</div><div>TUE</div><div>WED</div><div>THU</div><div>FRI</div><div>SAT</div>
                    </div>
                    <div className="days">
                        {renderDays()}
                    </div>
                </div>

                <div className="time-picker">
                    <h3>{selectedDate ? selectedDate.toDateString() : 'Select a date'}</h3>
                    <div className="time-slots">
                        {['9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm'].map(time => (
                            <div
                                key={time}
                                className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                                onClick={() => setSelectedTime(time)}
                            >
                                {time}
                            </div>
                        ))}
                    </div>

                    <form className="meeting-form" onSubmit={handleSchedule}>
                        <input type="text" name="meeting-title" placeholder="Meeting Title" required />
                        <input type="email" name="attendee-email" placeholder="Your Email" required />
                        <button type="submit" className="btn btn-accent btn-glow">Schedule</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Calendar;
