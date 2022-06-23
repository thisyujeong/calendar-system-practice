export default function isToday(date: Date, current: Date): boolean {
  const compareYear = date.getFullYear() === date.getFullYear();
  const compareMonth = date.getMonth() === current.getMonth();
  const compareDate = date.getDate() === current.getDate();

  return compareYear && compareMonth && compareDate;
}
