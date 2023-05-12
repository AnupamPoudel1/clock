import React, { useState } from 'react';

const DigitalaClock = () => {

    let arrDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let arrMth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const [year, setYear] = useState();
    const [month, setMonth] = useState();
    const [date, setDate] = useState();
    const [day, setDay] = useState();
    const [hrs, setHrs] = useState();
    const [mins, setMins] = useState();
    const [secs, setSecs] = useState();
    const [ampm, setAmpm] = useState("AM");

    const updateDate = () => {
        let time = new Date();
        let y = time.getFullYear();
        let m = time.getMonth();
        let d = time.getDate();
        let da = time.getDay();
        let h = time.getHours();
        let mi = time.getMinutes();
        let s = time.getSeconds();

        if (h === 0) {
            h = 12;
        }
        if (h > 12) {
            h = h - 12;
            setAmpm("PM");
        }

        setYear(y);
        setMonth(arrMth[m]);
        setDate(d);
        setDay(arrDay[da]);
        setHrs(h);
        setMins(mi);
        setSecs(s);
    }

    setInterval(updateDate, 1);


    return (
        <div class="digital-clock">
            <div class="d-clock">
                <div class="day">
                    <span id="year">{year}</span>
                    <span id="month">{month}</span>
                    <span id="date">{date}</span>
                    <span id="day">{day}</span>
                </div>
                <div class="time">
                    <span id="hrs">{hrs}</span>:
                    <span id="min">{mins}</span>:
                    <span id="sec">{secs}</span>
                    <span id="ampm">{ampm}</span>
                </div>
            </div>
        </div>
    )
}

export default DigitalaClock
