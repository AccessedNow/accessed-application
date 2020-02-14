/** 
 * Common Functions
*/
// number helper class to show K,M,B, Roundup
var units = ["K", "M", "B", "T"];
export function numberFormat(number) {
  if (number <= 999) {
    return number;
  }
  var order = Math.floor(Math.log(number) / Math.log(1000));
  var unitname = units[(order - 1)];
  var num = number / 1000 ** order;
  return num.toFixed(1) + unitname
}

export function dayFormatter(dateInLong) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const oneDay = (1000 * 60 * 60 * 24);
  const previous = new Date(dateInLong);
  const current = new Date();
  const days = (current.getTime() - previous.getTime()) / oneDay;
  if (days < 1) {
    const pH = 24 - previous.getHours();
    return `${current.getHours() + pH}h`;
  }

  if (days < 7) {
    return `${Math.round(days)}d`;
  }
  // 30.44 One Week
  if (days < 30.44) {
    return `${Math.round(days / 7)}w`;
  }

  // 365.24 One Year
  if (days < 365.24) {
    return `${Math.round(days / 30.44)}m`;
  }
  return `${months[previous.getMonth()]} ${previous.getDate()}, ${previous.getFullYear()}`;
}