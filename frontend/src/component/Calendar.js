import React, { useCallback, useState } from "react";
import classNames from "classnames/bind";
import style from "../style/Calendar.css";

const cx = classNames.bind(style);

const Calendar = () => {
  const today = {
    year: new Date().getFullYear(), //오늘 연도
    month: new Date().getMonth() + 1, //오늘 월
    date: new Date().getDate(), //오늘 날짜
    day: new Date().getDay(), //오늘 요일
  };
  const [selectedYear, setSelectedYear] = useState(today.year); //현재 선택된 연도
  const [selectedMonth, setSelectedMonth] = useState(today.month); //현재 선택된 달
  //const [selectedDate, setSelectedDate] = useState(today.date); //현재 선택된 날짜
  //const [selectedDay, setSelectedDay] = useState(today.day); //현재 선택된 요일
  const dateTotalCount = new Date(selectedYear, selectedMonth, 0).getDate(); //선택된 연도, 달의 마지막 날짜

  //이전 달
  const prevMonth = useCallback(() => {
    if (selectedMonth === 1) {
      setSelectedMonth(12);
      setSelectedYear(selectedYear - 1);
    } else setSelectedMonth(selectedMonth - 1);
  }, [selectedMonth, selectedYear]);

  //다음 달
  const nextMonth = useCallback(() => {
    if (selectedMonth === 12) {
      setSelectedMonth(1);
      setSelectedYear(selectedYear + 1);
    } else {
      setSelectedMonth(selectedMonth + 1);
    }
  }, [selectedMonth, selectedYear]);

  //달 고르기
  const monthControl = useCallback(() => {
    let monthArr = [];
    for (let i = 0; i < 12; i++) {
      monthArr.push(
        <option key={i + 1} value={i + 1}>
          {i + 1}월
        </option>
      );
    }
    return (
      <select
        onChange={changeSelectMonth}
        value={selectedMonth}
      >
        {monthArr}
      </select>
    );
  }, [selectedMonth]);

  //연도 고르기
  const yearControl = useCallback(() => {
    let yearArr = [];
    const startYear = today.year - 10; //현재 년도부터 10년전 까지만
    const endYear = today.year + 10; //현재 년도부터 10년후 까지만
    for (let i = startYear; i < endYear + 1; i++) {
      yearArr.push(
        <option key={i} value={i}>
          {i}년
        </option>
      );
    }
    return (
      <select
        // className="yearSelect"
        onChange={changeSelectYear}
        value={selectedYear}
      >
        {yearArr}
      </select>
    );
  }, [selectedYear, today.year]);

  const changeSelectMonth = (e) => {
    setSelectedMonth(Number(e.target.value));
  };
  const changeSelectYear = (e) => {
    setSelectedYear(Number(e.target.value));
  };

  //요일 반환 함수
  const returnWeek = useCallback(() => {
    const week = ["일", "월", "화", "수", "목", "금", "토"]; //일주일
    let weekArr = [];
    week.forEach((v) => {
      weekArr.push(
        <div
          key={v}
          className={cx(
            { weekday: true },
            { sunday: v === "일" },
            { saturday: v === "토" }
          )}
        >
          {v}
        </div>
      );
    });
    return weekArr;
  }, []);

  //선택된 달의 날짜 반환 함수
  const returnDay = useCallback(() => {
    const week = ["일", "월", "화", "수", "목", "금", "토"]; //일주일
	let emptyKey = 0;
    let dayArr = [];

    for (const nowDay of week) {
      const day = new Date(selectedYear, selectedMonth - 1, 1).getDay();
      if (week[day] === nowDay) {
        for (let i = 0; i < dateTotalCount; i++) {
          dayArr.push(
            <div
              key={i + 1}
              className={cx(
                {
                  //오늘 날짜일 때 표시할 스타일 클라스네임
                  today:
                    today.year === selectedYear &&
                    today.month === selectedMonth &&
                    today.date === i + 1,
                },
                { weekday: true }, //전체 날짜 스타일
                {
                  //전체 일요일 스타일
                  sunday:
                    new Date(
                      selectedYear,
                      selectedMonth - 1,
                      i + 1
                    ).getDay() === 0,
                },
                {
                  //전체 토요일 스타일
                  saturday:
                    new Date(
                      selectedYear,
                      selectedMonth - 1,
                      i + 1
                    ).getDay() === 6,
                }
              )}
            >
              {i + 1}
            </div>
          );
        }
      } else {
        dayArr.push(<div key={100 + emptyKey++} className="weekday"></div>);
      }
    }

    return dayArr;
  }, [selectedYear, selectedMonth, dateTotalCount, today.year, today.month, today.date]);

  return (
    <div className="container">
      <div className="title">
        <h3>
          {yearControl()}년 {monthControl()}월
        </h3>
        <div className="pagination">
          <button onClick={prevMonth}>◀︎</button>
          <button onClick={nextMonth}>▶︎</button>
        </div>
      </div>
      <div className="week">{returnWeek()}</div>
      <div className="date">{returnDay()}</div>
    </div>
  );
};

export default Calendar;