export function relativeTimeInWords(date) {
  const d = new Date(date);
  const today = new Date();
  const yearDiff = today.getFullYear() - d.getFullYear();

  if (yearDiff >= 2) {
    return `${Math.floor(yearDiff)} years ago`;
  }
  else if (yearDiff >= 1) {
    return '1 year ago';
  }
  else {
    const monthDiff = today.getMonth() - d.getMonth();
    if (monthDiff >= 2) {
      return `${Math.floor(monthDiff)} months ago`;
    }
    else if (monthDiff >= 1) {
      return '1 month ago';
    }
    else {
      const dayDiff = today.getDate() - d.getDate();
      if (dayDiff >= 2) {
        return `${Math.floor(dayDiff)} days ago`;
      }
      else if (dayDiff >= 1) {
        return '1 day ago';
      }
      else {
        const hoursDiff = today.getHours() - d.getHours();
        if (hoursDiff >= 1) {
          return `${Math.floor(hoursDiff)} hours ago`;
        }
        else if (hoursDiff === 1) {
          return '1 hour ago';
        }
        else {
          const minutesDiff = today.getMinutes() - d.getMinutes();
          if (minutesDiff >= 2) {
            return `${Math.floor(minutesDiff)} minutes ago`;
          }
          else if (minutesDiff === 1) {
            return '1 minute ago';
          }
          else {
            const secondsDiff = today.getSeconds() - d.getSeconds();
            if (secondsDiff >= 2) {
              return `${Math.floor(secondsDiff)} seconds ago`;
            }
            else {
              return '1 second ago';
            }
          }
        }
      }
    }
  }
}