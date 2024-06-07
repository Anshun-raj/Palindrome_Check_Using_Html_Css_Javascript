function reverseString(str) {
  return str.split("").reverse().join("");
}

function palindromeCheck() {
  let msg = document.getElementById("msg").value;
  let ans = document.getElementById("ans");
  msg = msg.toLowerCase();
  if (msg == "") {
    alert("Please enter any string");
  } else {
    if (msg == reverseString(msg)) {
      ans.innerHTML = "It's Palindrome!";
    } else {
      ans.innerHTML = "It's not Palindrome!";
    }
  }
}
