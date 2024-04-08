import {getCurrentMonthNumber, getCurrentYear} from "../helpers/getDate.js";
import {Value} from "sass";

export function expirationInputListener(value, inputError) {
    const currentMonth = getCurrentMonthNumber()
    const currentYear = getCurrentYear()
    let inputtedMonth = value.slice(0, 2)
    const inputtedYear = value.slice(3)
    const clearValue = value.replace(/\D/g, '') // value without letters for validation current work

    //if starts with '0' like '01 or 02...'  so we remove '0' for next validation
    if (inputtedMonth.startsWith('0')) inputtedMonth = inputtedMonth.slice(1)

    if (clearValue.length < 4 || inputtedYear < currentYear || (inputtedYear === currentYear && parseInt(inputtedMonth) < parseInt(currentMonth))) {
        document.querySelector('.parentOfCvcAndDate').append(inputError)
    }
}

export function isCvcCorrect(value) {
    const clearValue = value.replace(/_/g, '')

    if (parseInt(clearValue, 10)) {
        return clearValue.length === 3
    }
    return false
}

export function cvcInputListener(value, inputError) {
    if (!isCvcCorrect(value)) {
        document.querySelector('.parentOfCvcAndDate').append(inputError)
    } else return true
}

export function emailInputListener(value, inputError) {
    // Regular expression for validating email addresses
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailRight = emailRegex.test(value);

    if (!isEmailRight) document.querySelector('.parentOfEmail').append(inputError)
}
