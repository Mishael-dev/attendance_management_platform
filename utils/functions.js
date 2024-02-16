export function getCurrentTime() {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); 
  const day = String(currentDate.getDate()).padStart(2, "0"); 
  const hours = String(currentDate.getHours()).padStart(2, "0"); 
  const minutes = String(currentDate.getMinutes()).padStart(2, "0"); 
  const seconds = String(currentDate.getSeconds()).padStart(2, "0"); 
  const milliseconds = String(currentDate.getMilliseconds()).padStart(3, "0"); 

  const formattedTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`;

  return formattedTime;
}

export function getEndTime(startTime, durationInHours) {
    const startDateTime = new Date(startTime);
  
    // Ensure startDateTime is a valid date
    if (isNaN(startDateTime)) {
      throw new Error('Invalid start time');
    }
  
    // Calculate end time
    const endDateTime = new Date(startDateTime.getTime() + durationInHours * 3600000); // Convert hours to milliseconds
  
    // Format the end time in the desired format
    const year = endDateTime.getUTCFullYear();
    const month = String(endDateTime.getUTCMonth() + 1).padStart(2, '0');
    const day = String(endDateTime.getUTCDate()).padStart(2, '0');
    const hours = String(endDateTime.getUTCHours()).padStart(2, '0');
    const minutes = String(endDateTime.getUTCMinutes()).padStart(2, '0');
    const seconds = String(endDateTime.getUTCSeconds()).padStart(2, '0');
    const milliseconds = String(endDateTime.getUTCMilliseconds()).padStart(3, '0');
  
    const formattedEndTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`;
  
    return formattedEndTime;
  }
