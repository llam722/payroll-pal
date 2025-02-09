import React from "react";
import "./App.css";
import { useForm, SubmitHandler } from "react-hook-form";

export default function App() {
  type Inputs = {
    hours: number;
    minutes: number;
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="App">
      <h1 className="App-header">Payroll Pal</h1>
      <div
        style={{
          backgroundColor: "white",
          height: "70%",
          color: "black",
          padding: "10px",
        }}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            gap: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              textAlign: "center",
              gap: "10px",
            }}
          >
            <label> Monday </label>
            IN:
            <input
              type="number"
              style={{
                width: "30px",
                height: "20px",
              }}
              {...register("hours", {
                validate: (value) => {
                  console.log(typeof value, "value entered");

                  if (!Number(value)) {
                    return "Please enter a number";
                  } else if (Number(value) < 0 || Number(value) > 24) {
                    return "Please enter a valid number between 0 and 24";
                  }
                },
              })}
            />
            OUT:
            <input
              style={{
                width: "30px",
                height: "20px",
              }}
              {...register("minutes", { required: true })}
            />
          </div>
          {errors.hours && (
            <span
              style={{
                color: "red",
                fontSize: "10px",
              }}
            >
              {errors.hours.message}
            </span>
          )}
          <input type="submit" />
        </form>
      </div>
      <div>This is the bottom</div>
    </div>
  );
}
