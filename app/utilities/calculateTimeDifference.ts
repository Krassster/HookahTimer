import dayjs from "dayjs";

export function calculateTimeDifference(
  targetTime: string | undefined
): string {
  if (!targetTime) {
    return "00:00";
  }

  const now = dayjs();

  const [targetHours, targetMinutes, targetSeconds] = targetTime
    .split(":")
    .map(Number);

  const targetDate = now
    .set("hour", targetHours)
    .set("minute", targetMinutes)
    .set("second", targetSeconds || 0);

  const differenceInMs = now.diff(targetDate);

  const minutes = Math.floor(differenceInMs / (1000 * 60)) % 60;
  const seconds = Math.floor((differenceInMs % (1000 * 60)) / 1000);

  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return formattedTime;
}
