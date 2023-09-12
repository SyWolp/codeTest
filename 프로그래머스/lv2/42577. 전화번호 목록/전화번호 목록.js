function solution(phone_book) {
    let result = true;
    const sort_book = phone_book.sort();
    for (let i = 0; i < sort_book.length - 1; i++) {
        if ( sort_book[i + 1].match(sort_book[i]) !== null && sort_book[i + 1].match(sort_book[i]).index === 0) {
            result = false;
            break;
        }
    }
    return result;
}