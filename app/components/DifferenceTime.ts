export function calculateTimeDifference(targetTime: string | undefined): string {
    if (!targetTime) {
        return '00:00';
      }

    const [targetHours, targetMinutes] = targetTime.split(':').map(Number);
    const now = new Date();
  
    const targetDate = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      targetHours,
      targetMinutes
    );
  
    const differenceInMs = now.getTime() - targetDate.getTime();
 
    const differenceInMinutes = Math.floor(differenceInMs / (1000 * 60));
    const minutes = differenceInMinutes % 60;
    const seconds = Math.floor((differenceInMs % (1000 * 60)) / 1000);
  
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    return formattedTime;
  }
  
  