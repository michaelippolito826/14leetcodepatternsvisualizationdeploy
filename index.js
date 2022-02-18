function fillGrid() {
  let str_input = "abcabcaa";
  let visual = document.getElementsByClassName("visual")[0];

  //DOM Manipulation for string and pointers
  for (let index = 0; index < str_input.length; index++) {
    let char_div = document.createElement("div");
    char_div.className = "visual_content";
    char_div.innerHTML = str_input[index];
    visual.appendChild(char_div);
  }
  visual.style.gridTemplateColumns = `repeat(${str_input.length}, 1fr)`;

  let start_pointer = document.getElementsByClassName("start_pointer")[0];
  start_pointer.style.gridColumn = "1";

  let right_pointer = document.getElementsByClassName("right_pointer")[0];
  right_pointer.style.gridColumn = "1";

  //algo implementation
  let set = new Set();
  let count = 0;
  let start_pointer_value = 0;

  let start_pointer_arr = [];
  let right_pointer_arr = [];
  let count_arr = [];
  //loop through string using sliding window technique
  for (let right_pointer_value in str_input) {
    while (set.has(str_input[right_pointer_value])) {
      set.delete(str_input[start_pointer_value]);
      start_pointer_value++;
    }
    set.add(str_input[right_pointer_value]);
    count = Math.max(count, right_pointer_value - start_pointer_value + 1);

    start_pointer_arr.push(start_pointer_value);
    right_pointer_arr.push(parseInt(right_pointer_value));
    count_arr.push(count);
  }
  console.log(count);
  console.log(start_pointer_arr);
  console.log(right_pointer_arr);
  console.log(count_arr);

  return [start_pointer_arr, right_pointer_arr, count_arr];
}

let arr_holder = fillGrid();

let i = 0;
let start_pointer = document.getElementsByClassName("start_pointer")[0];
let right_pointer = document.getElementsByClassName("right_pointer")[0];
while (i < arr_holder[0].length) {
  movePointers(
    arr_holder[0][i],
    arr_holder[1][i],
    arr_holder[2][i],
    start_pointer,
    right_pointer,
    i
  );
  i++;
}

function movePointers(
  start_pointer_arr,
  right_pointer_arr,
  count_arr,
  start_pointer,
  right_pointer,
  i
) {
  setTimeout(function () {
    start_pointer.style.gridColumn = start_pointer_arr[i] + 1;
    right_pointer.style.gridColumn = right_pointer_arr[i] + 1;
  }, 2000 * i);
}
