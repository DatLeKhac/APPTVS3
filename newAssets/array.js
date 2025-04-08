

// Khởi tạo mảng

let arrLanguages = [
    'JavaScrip',
    'PHP',
    'Ruby',
];
console.log(arrLanguages);

// Có thể đưa nbất cứ kiểu dữ liệu nào vào trong mảng
let arrNumber = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arrNumber);

// Truy cập phần tử trong mảng == index
console.log(arrNumber[0]);
console.log(arrNumber[1]);
    // Truy cập bằng length:
console.log(arrNumber[arrNumber.length-1]);

// Thay đổi phần tử trong mảng bằng Index:
arrLanguages[1] = "Dart";
console.log(arrLanguages);

// Tính độ dài của mảng:
console.log(arrLanguages.length);

// Thêm và xoá phần tử vào mảng:
let arrNaN = [];
    // .push(); Thêm vào cuối mảng:
arrNaN.push("Đ");
console.log("Phần tử thêm vào mảng == push() ", arrNaN);
    // .unshift(); Thêm vào đầu mảnh:
arrNaN.unshift("Đoàn Quang Minh");
console.log("Phần tử sau khi thêm vào cuối arr = unshift() ", arrNaN);

    // join() Biến Arr -> String
console.log("Mảng khi dùng join(): ", arrLanguages.join(" "));

    // .pop(); Xoá phần tử ở cuối mảng
arrNaN.pop();
console.log("Mảng sau khi bị xoá ở cuối mảng == pop() ", arrNaN);
arrNaN.shift();
console.log("Phần tử sau khi xoá ở đầu ar == shift(): ", arrNaN);

// Tìm kiếm trong mảng:
let numbersArr = [10, 20, 30, 40, 50, 60, 30, 50, 40];

    // includes(): Kiểm tra có phần tử trong mảng hay không
console.log("Có 10 trong mảng hay không? ", numbersArr.includes(10));
console.log("Có 11 trong mảng hay không? ", numbersArr.includes(11));

    // Tìm kiếm phần tử bằng
        // .indexOf(): Lần đầu xuất hiện (Đếm theo index())
console.log("Số 30 lần đầu xuất hiện == indexOf(): ", numbersArr.indexOf(30));
console.log("Số 100 có tồn tại trong mảng hay không? (-1 là không tồn tại!): ", numbersArr.indexOf(100));
        // .lastIndexOf(): Lần cuối xuất hiện:
console.log("Số 40 lần cuối xuất hiện == lastIndexOf(): ", numbersArr.lastIndexOf(40));

    // Tìm kiếm bằng điều kiện find() và finđInex()
        // find(): Tìm phần tử đầu tiên lớn hơn điều kiện:
let result = numbersArr.find(number => number > 25);
console.log("Phần tử đầu tiên lớn hơn 25 trong mảng khi dùng find(): ", result);
/**
Được gọi như sau:
    array.find(callback(element, index, array));
 */

    // .findIndex(): In ra index của phần tử:
let result1 = numbersArr.findIndex(number => number > 25);
console.log("Index của phần tử đầu tiên thoả mãn điều kiện > 25 == findIndex(): ", result1);


// Cắt và nối mảng:
    // .slice(start, end): Cắt mảng
let newNumberArr = numbersArr.slice(1, 5);
console.log("Mảng mới được cắt từ 1 đến 5 là: ", newNumberArr);

    // .splice(): Xoá, thêm phần tử vào mảng
        // .splice(index, sl): Xoá phần tử "index" với "sl" số lượng 
let newNumbersArr = [1, 2, 3, 4, 5, 6, 7];
newNumbersArr.splice(2, 1);
console.log("Mảng sau khi xoá index = 2 với sl = 1: ", newNumbersArr);
        // .splice(index, sl, value): CHèn vào array
newNumbersArr.splice(2, 0, 99);
console.log("Mảng sau khi thêm 99 vào index == 2", newNumbersArr);


// Duyệt mảng:
    // Dùng for:
console.log("Mảng newNumbersArr có: ");
for (let i = 0; i < newNumbersArr.length; i ++) {
    console.log(newNumbersArr[i]);
}

    // Dùng forEach()
console.log("Mảng được duyệt khi dùng forEach(): ");
newNumbersArr.forEach((newNumber, index) => {
    console.log(`${index}: ${newNumber}`);
});

    // Dùng for..of:
console.log("Mảng được duyệt khi dùng for..of");
for (let newNumber of newNumbersArr) {
    console.log(newNumber);
}


// Biến đổi mảng:
    // Map() : Khi muốn tạo mảng mới mà không ảnh hưởng tới mảng cũ:
let numberMap = [1, 2, 3, 4, 5, 6, 7];
let newMap = numberMap.map((number) => number * 3);
console.log("Mảng mới khi xài map và nhân với 3", newMap);

    // filter()- Lọc phần tử thoả mãn điều kiện:
        // Khi xài filter() nó sẽ lọc toàn bộ phần tử thoả mãn điều kiện trong mảng
let filterNumberMap = numberMap.filter((number) => number % 2 === 0);
console.log("Mảng thoả mãn khi % 2 === 0 xài filter(): ", filterNumberMap);

    // reduce() - Gộp cá phần tử thành 1 giá trị:
        // Hiểu như sau: total sẽ như sum = 0 - Biến lưu trữ; num sẽ là từng phần tử trong mảng, và 0 sẽ là index đầu tiên của mảng
let reduceNumberMap = numberMap.reduce((total, number) => total + number, 0);
console.log("Mảng khi dùng reduce để cộng lại: ", reduceNumberMap);

// Sắp xếp mảng:
    // .sort() - Lưu trữ theo kiểu string
    // lấy phần tử index 0 so sánh với phần tử index 1, sau đó trừ đi, nếu nó âm sẽ giữ lại. và tiếp tục lấy phần tử đầu so sanh với các ptử tiếp theo, nếu nó dương thì dổi chỗ cho nhau, rồi so sanh lại từ đầu.
let arrSort = [4, 6, 3, 2, 9, 7, 1, 8, 10, 5];
arrSort.sort((a, b) => a - b);
console.log("Mảng sau khi được sắp xếp tăng dần: ", arrSort);

arrSort.sort((a, b) => b - a);
console.log("Mảng sau khi được sắp xếp giảm dần: ", arrSort);

// Đảo ngược mảng:
let arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr); // [5, 4, 3, 2, 1]

// --------------------------------
// Array nâng cao:

var courses = [
    {
        id: 1,
        name: "Javascript",
        coin: 500,
    },
    {
        id: 2,
        name: "PHP",
        coin: 400,
    },
    {
        id: 3,
        name: "Dart",
        coin: 0,
    },
    {
        id: 4,
        name: "Ruby",
        coin: 0,
    }
];

// For Each()
courses.forEach(function(course, index) {
    console.log(index, course);
});

//  .every(); trả về kiểu boolean()
// Nếu tất cả thoả mãn điều kiện thì sẽ in ra true, còn sai thì sẽ false
console.log("Điều kiện .every()");
var isFree = courses.every((course) => {
    return course.coin === 0;
});
console.log(isFree);

//  .some() - Ngược lại 
// chỉ cần gặp đk đúng trả lại đúng:
console.log("Điều kiện .some()");
var isFree1 = courses.some((course)=> {
    return course.coin === 0;
});
console.log(isFree1);

// .find()
console.log("Điều kiện .find()");
var isFree2 = courses.find((course)=> {
    return course.name === "Dart";
});
console.log(isFree2);

// Dùng .Map() thay đổi gì đó:
function coursesHandler(course, index, originArr) {
    return {
        id: course.id,
        name: `Khoá học: ${course.name}`,
        coin: course.coin,
        coinText: `Giá: ${course.coin}`,
        index: index,
        originArr: courses,
    }
};
var newCourses = courses.map(coursesHandler);
console.log(newCourses);


// Reduce() - Chi tiết hơn: 
// accumulator: value lưu trữ
// currentValue: Giá trị trả về
// currentIndex: Chỉ mục (Index)
// originArray: Mảng lưu trữ
var i = 0;
function coinHadelr(accumulator, currentValue, currentIndex, originArray) {
    i++ ;
    var total = accumulator + currentValue.coin;
    console.table({
        "Lượt chạy: " : i,
        "Biến lưu trữ: ": accumulator,
        "Giá: ": currentValue,
        "Giá tích trữ: ": total,
    });
    return total;
}

// initial value: Giá trị khởi tạo!

var totalCoin = courses.reduce(coinHadelr, 0);
console.log(totalCoin);

// KHông cần giá trị khởi tạo: Khi cùng kiểu giá trị mới không cần initial Value
var coins = [100, 200, 300, 550];
var totalCoins = coins.reduce(function(total, number) {
    return total + number;
}, 0);
// Không đặt initial Value:
console.log(totalCoins);


// Làm "Phẳng mảng" từ Depth Array - "Mảng sâu"
let depthArray = 
    [1, 2, 
    [3, 4], 
    5, 6, 
    [7, 8, 9]];

let flatArray = depthArray.reduce(function(flatOutput, depthItem){
    return flatOutput.concat(depthItem);
}, []); 

console.log(flatArray);

export default depthArray;