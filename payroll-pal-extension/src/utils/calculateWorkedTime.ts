function calculateWorkedTime(timeIn: string, timeOut: string) {
  // Parse the "HH:MM" strings into hours and minutes as numbers.
  const [inHours, inMinutes] = timeIn.split(":").map(Number);
  const [outHours, outMinutes] = timeOut.split(":").map(Number);

  // Convert both times to total minutes since midnight.
  const inTotalMinutes = inHours * 60 + inMinutes;
  let outTotalMinutes = outHours * 60 + outMinutes;

  // If the out time is less than the in time, adjust for overnight work.
  if (outTotalMinutes < inTotalMinutes) {
    outTotalMinutes += 1440; // add 24 hours (in minutes)
  }

  // Calculate the total minutes worked.
  const totalMinutesWorked = outTotalMinutes - inTotalMinutes;

  // Calculate whole hours and remaining minutes.
  const hours = Math.floor(totalMinutesWorked / 60);
  const minutes = totalMinutesWorked % 60;

  return { hours, minutes };
}

export { calculateWorkedTime };
