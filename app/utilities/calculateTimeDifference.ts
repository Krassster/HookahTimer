export function calculateTimeDifference(
  targetTime: string | undefined
): string {
  if (!targetTime) {
    return "00:00";
  }

  const cleanedTime = targetTime.replace(/AM|PM|\s/g, "");

  const [targetHours, targetMinutes, targetSeconds] = cleanedTime
    .split(":")
    .map(Number);
  const now = new Date();

  const targetDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    targetHours,
    targetMinutes,
    targetSeconds
  );

  const differenceInMs = now.getTime() - targetDate.getTime();

  const differenceInMinutes = Math.floor(differenceInMs / (1000 * 60));
  const minutes = differenceInMinutes % 60;
  const seconds = Math.floor((differenceInMs % (1000 * 60)) / 1000);

  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return formattedTime;
}
