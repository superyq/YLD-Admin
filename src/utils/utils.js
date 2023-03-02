// 时间处理
export function nowDate() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let week = date.getDay();
  let weekArr = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
  let weekMsg = weekArr[week];

  hour = hour < 10 ? `0${hour}` : hour;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${year}年${month}月${day}日 ${weekMsg}`;
}

// 深拷贝
export function deepClone(obj) {
  if (obj === null) return null;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (typeof obj !== 'object') return obj;
  let cloneObj = new obj.constructor();
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key])
    }
  }
  return cloneObj;
}

// 字符串截取
export function filterStr(str, start, end, replace) {
  if (typeof str !== "string") return;
  let _str = "";
  if (replace && replace.length) {
    _str = str.slice(start, end).replaceAll('-', replace);
  } else {
    _str = str.slice(start, end)
  }
  return _str
}

/**
 * 是否字符串
 * @param {string} str
 * @returns {Boolean}
 */
export function isString(str) {
  if (typeof str === "string" || str instanceof String) {
    return true;
  }
  return false;
}

/**
 * 是否数组
 * @param {Array} arg
 * @returns {Boolean}
 */
export function isArray(arg) {
  if (typeof Array.isArray === "undefined") {
    return Object.prototype.toString.call(arg) === "[object Array]";
  }
  return Array.isArray(arg);
}