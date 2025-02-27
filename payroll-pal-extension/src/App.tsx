import React, { useState } from "react";
import "./App.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { calculateWorkedTime } from "./utils/calculateWorkedTime";

export default function App() {
  const days = [
    { label: "Monday", key: "monday" },
    { label: "Tuesday", key: "tuesday" },
    { label: "Wednesday", key: "wednesday" },
    { label: "Thursday", key: "thursday" },
    { label: "Friday", key: "friday" },
    { label: "Saturday", key: "saturday" },
    { label: "Sunday", key: "sunday" },
  ];

  type Inputs = {
    [key: string]: {
      timeIn: string;
      timeOut: string;
    };
  };

  const [totalHours, setTotalHours] = useState(0);
  const [totalMinutes, settotalMinutes] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // This variable will accumulate the total worked minutes.
    let totalWorkedMinutes = 0;

    // Iterate through each day in the form data.
    for (const day in data) {
      if (!data[day].timeIn || !data[day].timeOut) continue;

      const { timeIn, timeOut } = data[day];
      const workedTime = calculateWorkedTime(timeIn, timeOut);
      // Convert worked time to minutes and add to total.
      totalWorkedMinutes += workedTime.hours * 60 + workedTime.minutes;
    }

    // Calculate final hours and minutes from the accumulated minutes.
    const finalHours = Math.floor(totalWorkedMinutes / 60);
    const finalMinutes = totalWorkedMinutes % 60;

    setTotalHours(finalHours);
    settotalMinutes(finalMinutes);
  };

  return (
    <div className="App">
      <h1 className="App-header">Weekly Payroll Pal</h1>
      <div
        style={{
          backgroundColor: "white",
          height: "70%",
          color: "black",
          padding: "5px",
        }}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {days.map(({ label, key }) => (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
              }}
              key={key}
            >
              <div
                style={{
                  flex: "1",
                  textAlign: "center",
                }}
              >
                <h3>{label}</h3>
              </div>
              <div
                style={{
                  flex: "2",
                  display: "flex",
                  gap: "1rem",
                }}
              >
                <label>IN</label>
                <input type="time" {...register(`${key}.timeIn`, {})} />
                {errors?.[key]?.timeIn?.message && (
                  <p>{errors?.[key]?.timeIn?.message}</p>
                )}
                <label>OUT</label>
                <input type="time" {...register(`${key}.timeOut`, {})} />

                {errors?.[key]?.timeOut?.message && (
                  <p>{errors?.[key]?.timeOut?.message}</p>
                )}
              </div>
            </div>
          ))}
          <div
            style={{
              display: "flex",
              gap: "2rem",
            }}
          >
            <input
              style={{
                margin: "1rem",
                backgroundColor: "rgba(0, 105, 0, .9)",
                color: "white",
                borderRadius: "5px",
                padding: "10px",
                border: "none",
              }}
              type="submit"
            />
            <button
              style={{
                margin: "1rem",
                backgroundColor: "rgba(225, 0, 0, 0.9)",
                color: "white",
                borderRadius: "5px",
                padding: "10px",
                border: "none",
              }}
              onClick={() => reset()}
            >
              {" "}
              Reset{" "}
            </button>
          </div>
        </form>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bolder",
          gap: "1rem",
          height: "100%",
        }}
      >
        <h3>Total Hours: {totalHours}</h3>
        <h3>Total Minutes: {totalMinutes}</h3>
      </div>
    </div>
  );
}
