//Khi dùng var biến i sẽ được reference vào hàm timeout,
// mà hàm for chạy nhanh hơn=> kq print ra chỉ dc: 6( là con số i cuối cùng cùa for)
for(var i=1;i<=5;i++){
    setTimeout(function(){
        console.log("print:",i);
    },1000)
}
//Solution: =>Let đặt trong for loop fix dc bug referent
for(let i=1;i<=5;i++){
    setTimeout(function(){
        console.log("print with let:",i);
    },1000)
}

/* từ khóa 'let' có 3 tính chất:
     1/ Không hỗ trợ hoisting.
     2/ Không thể gán trị lại.
     3/ Mang tính chất cục bộ.

     Ví dụ:
     Tính chất 1:
    function helloWorld(name){
        if(name){
            let sayString = "Hello "+name;
        }else{
            let sayString = "Hello guest."
        }
        console.log("sayString");
    }
    => Console.log sẽ bị lỗi do biến sayString cục bộ.
*/
