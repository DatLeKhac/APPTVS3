// Hàm Callback:

let courses = [
    "Javascript",
    "Dart",
    "PHP",
    "Ruby",
];

// Xài thử phương thức khi tự tạo callback();
var courseValue = courses.map(function (course, index) {
    console.log(index, course);
});

console.log("\n");
// Tự tạo hàm map2:
Array.prototype.map2 = function(callback) {
    var arrayLength = this.length;
    for (var i = 0; i < arrayLength; i++){
        callback(this[i], i);
    };
};

courses.map2(function (course, index) {
    console.log(index, course);
});


// Ham callback với forEach:
    // ForEach không cần return!
courses.forEach(function() {
});

Array.prototype.forEach2 = function(callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            callback(this[index], index, this);
        }
    }
};
courses.forEach2(function(course, index, array){
    console.log(index, course, array);
});

// Filter trong Callback
// Filter sẽ không lặp qua Array trống!
// Phải dùng hasOwnProperty
Array.prototype.filter2 = function(callback) {
    
}

// Some trả về true / false
// Đưa Array trống thì không lặp qua
// Every cũng trả về đúng hoặc sai nhưng ngược với Some