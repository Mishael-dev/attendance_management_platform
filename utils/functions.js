"use client";
import jwt from "jsonwebtoken";

export function getCurrentTime() {
  const currentDate = new Date();
  const formattedTime = currentDate.toISOString();
  return formattedTime;
}

export function getEndTime(startTime, durationInHours) {
  const startDateTime = new Date(startTime);

  // Ensure startDateTime is a valid date
  if (isNaN(startDateTime)) {
    throw new Error("Invalid start time");
  }

  // Calculate end time
  const endDateTime = new Date(
    startDateTime.getTime() + durationInHours * 3600000
  ); // Convert hours to milliseconds

  // Use toISOString() for formatting the end time
  const formattedEndTime = endDateTime.toISOString();

  return formattedEndTime;
}

export const getUser = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const token = localStorage.getItem("userToken");
    console.log(jwt);
    const decodedToken = jwt.decode(token, "qR7pXw2fL9sJ3mY8tZa6o");
    return { user: decodedToken.user, user_id: decodedToken.user_id };
  }

  return {};
};

export const get_user_data = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    return JSON.parse(localStorage.getItem("user"));
  }
};
export const get_user_location = async () => {
  if (typeof window !== "undefined" && window.navigator.geolocation) {
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const { latitude: lat, longitude: long } = position.coords;

      return { lat, long };
    } catch (error) {
      console.error("Error getting user location:", error);
    }
  }
};

export function subtractAndFormatTime(startTime, endTime) {
  // Convert time strings to Date objects
  const startDate = new Date(startTime);
  const endDate = new Date(endTime);

  // Calculate the time difference in milliseconds
  const timeDifference = endDate - startDate;

  // Convert milliseconds to minutes
  const minutesDifference = Math.floor(timeDifference / (1000 * 60));

  // Calculate hours and remaining minutes
  const hours = Math.floor(minutesDifference / 60);
  const remainingMinutes = minutesDifference % 60;

  // Format the result
  let result = '';
  if (hours > 0) {
      result += `${hours}hr `;
  }
  if (remainingMinutes > 0 || hours === 0) {
      result += `${remainingMinutes}mins`;
  }

  return result;
}

export function formatTime(inputTime) {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Parse the input time string
  const parsedTime = new Date(inputTime);

  // Extract components
  const year = parsedTime.getFullYear();
  const month = months[parsedTime.getMonth()];
  const day = parsedTime.getDate();
  let hour = parsedTime.getHours();
  const minute = parsedTime.getMinutes();

  // Convert to 12-hour format
  const period = hour >= 12 ? 'pm' : 'am';
  hour = hour % 12 || 12;

  // Format the output
  const formattedTime = `${hour}${minute !== 0 ? `:${minute}` : ''}${period} ${month} ${day} ${year}`;

  return formattedTime;
}
