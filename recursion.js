/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 0;
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, longestLength = 0) {
  if (idx === words.length) return longestLength;
  longestLength = Math.max(words[idx].length, longestLength);
  return longest(words, idx + 1, longestLength);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, newStr = "") {
  if (idx >= str.length) return newStr;

  newStr += str[idx];

  return everyOther(str, idx + 2, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
  let noSpaceStr = str.replace(/\s/g, "");
  let leftidx = idx;
  let rightidx = noSpaceStr.length - idx - 1;
  if (leftidx >= rightidx) return true;
  if (noSpaceStr[leftidx] !== noSpaceStr[rightidx]) return false;
  return isPalindrome(noSpaceStr, idx + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (arr[idx] === val) return idx;
  if (idx >= arr.length) return -1;
  return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = str.length - 1, newStr = "") {
  if (idx < 0) return newStr;
  newStr += str[idx];
  return revString(str, idx - 1, newStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strArr = [];

  for (let key in obj) {
    if (typeof obj[key] === "string") {
      strArr.push(obj[key]);
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      strArr.push(...gatherStrings(obj[key]));
    }
  }
  return strArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((left + right) / 2);
  if (arr[middle] === val) {
    return middle;
  }
  if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1);
  }
  return binarySearch(arr, val, middle + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
