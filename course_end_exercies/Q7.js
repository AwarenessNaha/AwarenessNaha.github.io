/**
 * 7. Given a positive integer, return its corresponding column title as appear in an Excel Sheet. 
For example: 1→A, 2→B, 3→C,...,26→z,27→AB,→28->AB, ... #excel_sheet_column_title
Input
Output
1
A
28
AB
701
 
ZY
 */

function excel_sheet_column_title(num) {
    if (Math.floor(num / 26) === 0) {
        if (num % 26 === 0) {
            return "";
        } else {

            let charCode = num % 26 + 64;
            if (num % 26 === 0) {
                charCode = 26 + 65;
            }
            return String.fromCharCode(charCode);
        }
    } else {

        return excel_sheet_column_title(Math.floor(num / 26)) + String.fromCharCode(num % 26 + 64);;
    }
}

//let str = excel_sheet_column_title(number);


console.log(excel_sheet_column_title(1)); // A
console.log(excel_sheet_column_title(2)); //B
console.log(excel_sheet_column_title(26)); //AA
console.log(excel_sheet_column_title(27)); //AA
console.log(excel_sheet_column_title(28)); //AB
console.log(excel_sheet_column_title(52)); //AB
console.log(excel_sheet_column_title(55)); //BC
console.log(excel_sheet_column_title(72)); //BD
console.log(excel_sheet_column_title(701)); //
console.log(excel_sheet_column_title(788)); // ADH