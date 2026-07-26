"use client"

import {useState} from "react";
import { getTodayString } from "@/utils/date";

export default function ShiftForm() {
    const [startDate, setStartDate] = useState(getTodayString());
    const[startTime, setStartTime] = useState("");
    const[stopTime, setStopTime] = useState("");

    const [sameDay, setSameDay] = useState(true)
    const [stopDate, setStopDate] = useState(startDate)

    return (
        <form action="submit">
            <div>
                <label htmlFor="date">Date:</label>
                <input 
                    type="date" 
                    id="startDate" 
                    name="startDate"
                    value={startDate}
                    onChange = {(e) => setStartDate(e.target.value)}
                    onBlur={(e) => {
                        if (e.target.value > getTodayString()) {
                            setStartDate(getTodayString());
                        }
                    }}
                    max = {getTodayString()}
                />
            </div>
                
            <div>
                <label htmlFor="startTime">Start Time:</label>
                <input 
                    type="time" 
                    id="startTime" 
                    name="startTime"
                    value={startTime}
                    onChange = {(e) => setStartTime(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="sameDay">Same Day</label>
                <input 
                    type="checkbox"
                    id="sameDay"
                    checked = {sameDay}
                    onChange = {(e) => setSameDay(e.target.checked)} 
                />
                
            </div>
            
            {!sameDay && <div>
                    <input 
                        type="date" 
                        id="stopDate" 
                        name="stopDate"
                        value={stopDate}
                        onChange = {(e) => setStopDate(e.target.value)}
                        onBlur={(e) => {
                            if (e.target.value > getTodayString()) {
                                setStopDate(getTodayString());
                            }
                        }}
                        max = {getTodayString()}
                    />
                    </div>}

            <div>
                <label htmlFor="stopTime">Stop Time:</label>
                <input 
                    type="time" 
                    id="stopTime" 
                    name="stopTime"
                    value={stopTime}
                    onChange = {(e) => setStopTime(e.target.value)}
                />
            </div>
        </form>
    )
}