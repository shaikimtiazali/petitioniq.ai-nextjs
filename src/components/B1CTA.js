/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect } from 'react';

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function B1CTA({ isOpen, onOpen, onClose }) {
  const [selectedAttorney, setSelectedAttorney] = useState('firm1');
  const [calendarCells, setCalendarCells] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [notes, setNotes] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  const [confirmedDetails, setConfirmedDetails] = useState({
    firm: '',
    date: '',
    time: ''
  });

  useEffect(() => {
    // Generate 14 calendar cells starting from today
    const cells = [];
    const today = new Date();
    const current = new Date(today);

    for (let i = 0; i < 14; i++) {
      const dayIndex = current.getDay();
      const dateVal = current.getDate();
      const monthVal = current.getMonth();
      const yearVal = current.getFullYear();
      
      const isWeekend = (dayIndex === 0 || dayIndex === 6);
      
      cells.push({
        dateVal,
        dateStr: `${MONTHS[monthVal]} ${dateVal}, ${yearVal}`,
        isWeekend
      });
      
      current.setDate(current.getDate() + 1);
    }
    setCalendarCells(cells);
  }, []);

  const handleBookingSubmit = () => {
    if (!selectedDate) {
      alert('Please select a date on the calendar.');
      return;
    }
    if (!selectedTime) {
      alert('Please select a time slot.');
      return;
    }

    const firmMap = {
      firm1: 'Immigration Partner Group LLP (Supervising Attorneys)',
      firm2: 'Summit Employment Law Group LLC',
      firm3: "Khushboo Jain's Advisory & Specialist Network"
    };

    setConfirmedDetails({
      firm: firmMap[selectedAttorney] || 'Participating Firm',
      date: selectedDate,
      time: selectedTime + ' EST'
    });

    setIsBooked(true);
  };

  const handleReset = () => {
    setSelectedDate(null);
    setSelectedTime(null);
    setNotes('');
    setIsBooked(false);
  };

  return (
    <section className="section sec-gray" id="b1-consult" aria-labelledby="b1-h">
      <div className="container">
        <div className="b1-cta fade-up">
          <div>
            <span className="b1-ey">STAGE B1 &mdash; PAID CONSULTATION</span>
            <h3 className="b1-title" id="b1-h">Ready to speak with a Participating Attorney?</h3>
            <p className="b1-desc">Your Stage A evaluation identifies the strongest areas of your profile. Stage B1 is a structured, limited-scope consultation with a Participating Attorney &mdash; a candid, experienced assessment of your petition pathway with no obligation to proceed further.</p>
            <div className="b1-items">
              <div className="b1-item"><span className="b1-chk">✓</span> Flat consultation fee &mdash; paid directly to the Law Firm</div>
              <div className="b1-item"><span className="b1-chk">✓</span> No obligation to proceed to full representation</div>
              <div className="b1-item"><span className="b1-chk">✓</span> PetitionIQ invoices the Law Firm for case preparation services &mdash; not the referral</div>
              <div className="b1-item"><span className="b1-chk">✓</span> Consultation fee credit toward B2 at attorney's discretion</div>
              <div className="b1-item"><span className="b1-chk">✓</span> Governed by Limited-Scope Consultation Agreement</div>
            </div>
          </div>
          <div className="b1-right">
            <div className="b1-pl">Consultation Fee</div>
            <div className="b1-price">Set by Participating Attorney</div>
            <div className="b1-note">Per Schedule A</div>
            <button className="btn btn-navy" onClick={onOpen}>Connect With An Attorney</button>
            <a className="btn btn-outline" href="#evaluator">Complete Stage A First</a>
            <div className="b1-note">Bring your own attorney? PetitionIQ's tools and services remain available to support your existing counsel directly.</div>
          </div>
        </div>

        {/* Interactive Booking Component */}
        <div className={`booking-wrap fade-up ${isOpen ? 'visible' : ''}`} id="booking-modal" style={{ display: isOpen ? 'block' : 'none' }}>
          {!isBooked ? (
            <div id="booking-form-panel">
              <h3 className="serif" style={{ fontSize: '20px', color: 'var(--navy)', marginBottom: '6px' }}>Book Consultation Session</h3>
              <p style={{ fontSize: '12px', color: 'var(--gray-dark)', marginBottom: '20px' }}>Select a date and time slot. All consultation sessions are 45 minutes long, conducted via secure video conference.</p>
              
              <div className="f-grp">
                <label className="f-lbl" htmlFor="booking-attorney">Select Participating Firm / Attorney</label>
                <select
                  className="f-sel"
                  id="booking-attorney"
                  value={selectedAttorney}
                  onChange={(e) => setSelectedAttorney(e.target.value)}
                >
                  <option value="firm1">Immigration Partner Group LLP (Supervising Attorneys)</option>
                  <option value="firm2">Summit Employment Law Group LLC</option>
                  <option value="firm3">Khushboo Jain's Advisory &amp; Specialist Network</option>
                </select>
              </div>

              <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--navy)', textTransform: 'uppercase', marginBottom: '8px' }}>Select Consultation Date</div>
              
              {/* Calendar grid */}
              <div className="calendar-grid" id="booking-calendar">
                <div className="cal-day-name">M</div>
                <div className="cal-day-name">T</div>
                <div className="cal-day-name">W</div>
                <div className="cal-day-name">T</div>
                <div className="cal-day-name">F</div>
                <div className="cal-day-name">S</div>
                <div className="cal-day-name">S</div>
                {calendarCells.map((cell, idx) => (
                  <div
                    key={idx}
                    className={`cal-cell ${cell.isWeekend ? 'disabled' : ''} ${selectedDate === cell.dateStr ? 'selected' : ''}`}
                    onClick={() => {
                      if (!cell.isWeekend) {
                        setSelectedDate(cell.dateStr);
                      }
                    }}
                  >
                    {cell.dateVal}
                  </div>
                ))}
              </div>

              <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--navy)', textTransform: 'uppercase', marginBottom: '8px' }}>Select Time Slot (EST)</div>
              <div className="time-slots" id="booking-time-slots">
                {['09:00 AM', '11:30 AM', '02:00 PM', '04:30 PM'].map((tSlot) => (
                  <div
                    key={tSlot}
                    className={`time-slot ${selectedTime === tSlot ? 'selected' : ''}`}
                    onClick={() => setSelectedTime(tSlot)}
                  >
                    {tSlot}
                  </div>
                ))}
              </div>

              <div className="f-grp">
                <label className="f-lbl" htmlFor="booking-notes">Briefly list your top questions for the attorney</label>
                <textarea
                  className="f-ta"
                  id="booking-notes"
                  placeholder="e.g. Can we count my foreign patent? How many citation letters do I need?"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>

              <button className="e-btn e-btn-gold" onClick={handleBookingSubmit}>Confirm Booking Details</button>
            </div>
          ) : (
            /* Booking success panel */
            <div id="booking-success-panel" className="bk-success" style={{ display: 'block' }}>
              <div className="bk-success-icon">✓</div>
              <h3 className="serif" style={{ fontSize: '22px', color: 'var(--navy)', marginBottom: '8px' }}>Consultation Confirmed</h3>
              <p style={{ fontSize: '13px', color: 'var(--gray-dark)', lineHeight: 1.7, marginBottom: '16px' }}>Your B1 Consultation session has been scheduled successfully. An invitation has been sent to your email with link details.</p>
              <div style={{ background: 'var(--gray-bg)', padding: '14px', borderRadius: 'var(--r-sm)', marginBottom: '20px', fontSize: '12px', textAlign: 'left' }}>
                <div><strong>Firm:</strong> <span>{confirmedDetails.firm}</span></div>
                <div><strong>Date:</strong> <span>{confirmedDetails.date}</span></div>
                <div><strong>Time:</strong> <span>{confirmedDetails.time}</span></div>
                <div style={{ marginTop: '6px', color: 'var(--warn)', fontSize: '11px' }}>Note: Flat fee consultation agreement terms apply. The fee is settled directly.</div>
              </div>
              <button className="e-btn" onClick={handleReset}>Book Another Slot / Modify</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
