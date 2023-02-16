// function hamberger(type, size, num) {
//     console.log("빵두기")
//     console.log("상추두기")

//     if (type == "새우") {
//         console.log("새우패티두기")
//     } else if (type == "고기") {
//         console.log("고기패티두기")
//     }
//     console.log("마무리")
//     console.log(type, "버거", size, "사이즈", num, "개 준비완료")
// }

// hamberger("새우", "L", "3")

// function greet(type) {
//     console.log("안녕 내 이름은", type, "야")
//     return type
// }
// const type = greet("에밀리")
// console.log("안녕 내 이름은", type, "야")

// function dateBox(year, month, date) {
//     if (date) {
//         return `${year}.${month}.${date}`;
//     } else if (month) {
//         return `${year}년${month}월`;
//     } else if (year) {
//         return `${year}년`
//     }
// }

// console.log(dateBox(2022, 2, 3))

function find(arr) {
    if (arr.length == '') {
        return 0
    }

    let result = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (result > arr[i]) {
            result = arr[i]
        }
    }

    return result
}

console.log(find([100, 200, 3, 22, 2, 1]))