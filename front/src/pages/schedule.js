import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components'
import ScheduleLayout from '../components/layout/ScheduleLayout';
import { useRouter, withRouter  } from "next/router";
import { LOAD_SCHEDULES_REQUEST } from '../reducers/scheduleReducer';

const Schedule = () => {
    const { scheduleList } = useSelector(state => state.scheduleReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: LOAD_SCHEDULES_REQUEST
        });
    }, []);

    return (
        <ScheduleLayout scheduleList={scheduleList}/>
    )
}

export default Schedule;