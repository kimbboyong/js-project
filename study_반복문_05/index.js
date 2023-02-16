// i++ = i=i+1
// for (let i = 2; i < 10; i++) {
//     for (let j = 1; j < 10; j++) {
//         console.log(i + '*' + j + '=' + i * j)
//     }
// }

// let fruit = ["a", "b", "c", 'D']

// for (let i = 0; i < fruit.length; i++) {
//     console.log(fruit[i])
// }

// 1부터 100까지 더하는 for문을 만들고결과 출력하기
// for (let i = 1; i <= 100; i++) {
//     console.log(i)
// }


// 1부터 100까지 홀수만 출력하자.
// for (let i = 1; i <= 100; i += 2) {
//     console.log(i)
// }

// 부터 50까지 369결과를 프린트하자.
// for (let i = 1; i <= 50; i++) {
//     let stringValue = i.toString()
//     let result = ""

//     for (let j = 0; j < stringValue.length; j++) {
//         if (stringValue[j] == "3" || stringValue[j] == "6" || stringValue[j] == "9") {
//             result += "짝"
//         }
//     }
//     console.log(result.length > 0 ? result : i)
// }

// 주어진 숫자가 소수이면 true 아니면 false를 출력하는 프로그램을 짜시오.

// let n = 10
// let isPrime = true

// if (n === 1) {
//     isPrime = false
// }
// for (let i = 2; i < n; i++) {
//     if (n % i == 0) {
//         isPrime = false
//     }
// }
// console.log(isPrime)


// 369 문제 풀이

for (let i = 1; i <= 50; i++) {
    let stringValue = i.toString()
    let result = ""
    for (let j = 0; j < stringValue.length; j++) {
        if (stringValue[j] === "3" || stringValue[j] === "6" || stringValue[j] === "9") {
            result = result + "짝"
        }
    }
    console.log()
}