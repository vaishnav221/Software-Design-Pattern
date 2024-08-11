import React, { useState } from 'react';

const BookingCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const isToday = (date) => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
  };

  const selectDate = (day) => {
    const selected = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(selected);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-100">
        <button onClick={prevMonth} className="p-2 rounded-full hover:bg-gray-200">
          &lt;
        </button>
        <h2 className="text-lg font-semibold text-gray-800">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <button onClick={nextMonth} className="p-2 rounded-full hover:bg-gray-200">
          &gt;
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 p-4">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center text-sm font-medium text-gray-700">
            {day}
          </div>
        ))}
        {[...Array(firstDayOfMonth).keys()].map((_, index) => (
          <div key={`empty-${index}`} className="text-center py-2"></div>
        ))}
        {[...Array(daysInMonth).keys()].map((_, index) => {
          const day = index + 1;
          const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
          const isSelectedDate = selectedDate && 
            date.getDate() === selectedDate.getDate() &&
            date.getMonth() === selectedDate.getMonth() &&
            date.getFullYear() === selectedDate.getFullYear();

          return (
            <button
              key={day}
              onClick={() => selectDate(day)}
              className={`text-center py-2 rounded-full hover:bg-blue-100 transition-colors
                ${isToday(date) ? 'bg-blue-500 text-white hover:bg-blue-600' : ''}
                ${isSelectedDate ? 'bg-blue-200' : ''}
              `}
            >
              {day}
            </button>
          );
        })}
      </div>
      {selectedDate && (
        <div className="px-4 py-2 bg-gray-100 text-center">
          Selected Date: {selectedDate.toDateString()}
        </div>
      )}
    </div>
  );
};

export default BookingCalendar;