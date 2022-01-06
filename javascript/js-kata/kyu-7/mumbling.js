/* 
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z. 
*/


function accum(s) {
	let mumbling = "";
    for(let i = 0; i < s.length; i++){
        let temp = ""; 
        for(let j = 0; j < i+1; j++){
            temp += s[i]
        }

        if(i === s.length - 1){
            result += temp.charAt(0).toUpperCase() + temp.slice(1).toLowerCase();
        }else {
            result += temp.charAt(0).toUpperCase() + temp.slice(1).toLowerCase() + '-';
        }
    }

    return mumbling;
}


// Oneline solution
function accum2(s){
    return s.split('').map((x, i) => x.toUpperCase() + x.repeat(i).toLowerCase()).join('-');
}
