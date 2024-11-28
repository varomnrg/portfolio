export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}
export function getCurrentTimeIndo(): Date {
  const now = new Date();

  const offsetIndo = 7;
  now.setHours(now.getUTCHours() + offsetIndo);

  return now;
}

export function formatTimeIndo(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "Asia/Jakarta",
  };

  let formattedTime = new Intl.DateTimeFormat("en-US", options).format(date);
  
  formattedTime += " WIB";

  return formattedTime;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
