import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import styled, { css } from 'styled-components';
import dynamic from 'next/dynamic';
import 'tui-calendar/dist/tui-calendar.css';

const CalendarNoSSR = dynamic(() => import('@toast-ui/react-calendar'), { ssr: false });
const ScheduleLayout = ({ scheduleList  }) => {
    const calendarRef = useRef();

    const inputSelection = () => {
      console.log(scheduleList);
    };
    inputSelection()
    return (
      <div>
        <CalendarNoSSR 
        ref={calendarRef}
        view="month"
        schedules={scheduleList}
        />
        <button type="button" onClick={inputSelection}>dddd</button>
      </div>
    )
}

export default ScheduleLayout;

