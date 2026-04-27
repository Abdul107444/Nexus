import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';

export default function CalendarPage() {
  const [date, setDate] = useState(new Date());
  const [slots, setSlots] = useState<string[]>(['10:00 AM', '02:00 PM']);
  const [newSlot, setNewSlot] = useState('');

  const [requests, setRequests] = useState([
    { name: 'Michael Rodriguez', time: '10:00 AM', status: 'Pending' },
    { name: 'Jennifer Lee', time: '02:00 PM', status: 'Confirmed' },
  ]);

  const addSlot = () => {
    if (!newSlot) return;
    setSlots([...slots, newSlot]);
    setNewSlot('');
  };

  const updateRequest = (index: number, status: string) => {
    const updated = [...requests];
    updated[index].status = status;
    setRequests(updated);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Meeting Scheduling Calendar</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-5 rounded-lg shadow">
          <Calendar onChange={(value) => setDate(value as Date)} value={date} />
          <p className="mt-4 font-medium">
            Selected Date: {date.toDateString()}
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-3">Availability Slots</h2>

          <div className="flex gap-2 mb-4">
            <input
              value={newSlot}
              onChange={(e) => setNewSlot(e.target.value)}
              placeholder="Example: 04:00 PM"
              className="border rounded px-3 py-2 w-full"
            />
            <button
              onClick={addSlot}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Add
            </button>
          </div>

          <div className="space-y-2">
            {slots.map((slot, index) => (
              <div key={index} className="border rounded px-3 py-2">
                {slot}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white p-5 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-3">Meeting Requests</h2>

        <div className="space-y-3">
          {requests.map((request, index) => (
            <div
              key={index}
              className="flex items-center justify-between border rounded p-3"
            >
              <div>
                <p className="font-medium">{request.name}</p>
                <p className="text-sm text-gray-500">{request.time}</p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{request.status}</span>

                <button
                  onClick={() => updateRequest(index, 'Confirmed')}
                  className="bg-green-600 text-white px-3 py-1 rounded"
                >
                  Accept
                </button>

                <button
                  onClick={() => updateRequest(index, 'Declined')}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Decline
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}