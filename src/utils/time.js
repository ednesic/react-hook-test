const ABBREVIATED_MONTHS = ['Jan.', 'Feb.', 'March', 'April', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];

export default (date) => {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const minutes = diff / 1000 / 60;
  if (minutes < 1) {
    return 'Just Now';
  }
  if (minutes < 60) {
    const m = Math.floor(minutes);
    return `${m}m ago`;
  }
  const hours = minutes / 60;
  if (hours < 12) {
    const h = Math.floor(hours);
    return `${h}h ago`;
  }

  const month = `${ABBREVIATED_MONTHS[date.getMonth()]}`;
  const dayOfMonth = date.getDate();
  const year = date.getFullYear();
  if (year === now.getFullYear()) {
    return `${month} ${dayOfMonth}`;
  }
  return `${month} ${dayOfMonth}, ${year}`;
};
