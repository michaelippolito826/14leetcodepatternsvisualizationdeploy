function fillGrid() {
    let str_input = "abcabcaa";
    let visual = document.getElementsByClassName('visual')[0];

    //DOM Manipulation for string and pointers
    for (let index = 0; index < str_input.length; index++) {
        let char_div = document.createElement('div');
        char_div.className = 'visual_content'
        char_div.innerHTML = str_input[index];
        visual.appendChild(char_div);
    }
    visual.style.gridTemplateColumns = `repeat(${str_input.length}, 1fr)`;
    
    let start_pointer = document.getElementsByClassName('start_pointer')[0];
    start_pointer.style.gridColumn = "1";

    let right_pointer = document.getElementsByClassName('right_pointer')[0];
    right_pointer.style.gridColumn = "1";

    //algo implementation 
    let set = new Set();
    let count = 0; 
    let start_pointer_value = 0; 
    //loop through string using sliding window technique 
    for (let right_pointer_value in str_input) {
        while (set.has(str_input[right_pointer_value])) {
            set.delete(str_input[start_pointer_value]);
            start_pointer_value++; 
        } 
        set.add(str_input[right_pointer_value]); 
        count = Math.max(count, right_pointer_value - start_pointer_value + 1);
        
        start_pointer.style.gridColumn = parseInt(start_pointer_value) + 1;
        right_pointer.style.gridColumn = parseInt(right_pointer_value) + 1;
    } 
    console.log(count);    
}

fillGrid();