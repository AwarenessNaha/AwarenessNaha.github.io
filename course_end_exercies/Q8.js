/**
 * 8. Given a column title as appear in an excel sheet, return its 
 * corresponding column number. 
 * #excel_sheet_column_number
 * Input
Output
A
1
AB
28
ZY
701
 */

function excel_sheet_column_number(str) {
    switch (str.length) {
        case 1:
            return str.charCodeAt(0) - 64;
            break;
        case 2:
            return (str.charCodeAt(0) - 64) * 26 + (str.charCodeAt(1) - 64);
            break;
        case 3:
            return
            return (str.charCodeAt(0) - 64) * 26 * 26 + (str.charCodeAt(1) - 64) * 26 + (str.charCodeAt(2) - 64);
            break;
        default:
            return (str.charCodeAt(0) - 64) * 26 * 26 * 26 + (str.charCodeAt(1) - 64) * 26 * 26 + (str.charCodeAt(2) - 64) * 26 + (str.charCodeAt(0) - 64);

    }
}

console.log(excel_sheet_column_number("A")); //1
console.log(excel_sheet_column_number("AB"));//28
console.log(excel_sheet_column_number("ZY")); //701
