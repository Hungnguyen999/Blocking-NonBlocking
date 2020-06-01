//ví dụ về blocking
// Single Thread
console.log("Bắt đầu ");

//Đây là hàm ví dụ về 1 công việc tốn nhiều thời gian giải quyết
//nếu viết như này thì công việc,dữ liệu cần lấy cần hoàn thành trước sẽ không được được chạy nếu như công việc 
//helloWorld() này hoàn thành

function helloWorld(err){
    if(err) throw err;
    for(let i = 0; i < 500; i++){
        console.log(i);
    }
} 

setTimeout(helloWorld,5000);  // Asynchronous 
// Cái hàm helloWorld này nó sẽ chạy vào callstack và call stack gọi sẽ đưa setTimeout vào 1 stack -> sau đó đem truyền 1 biến timer vào trong 
//webAPIS và hàm này sẽ chạy => callback. sau 5 s khi hàm có kết quả thì sẽ chuyển nó vào stack queue . bên cạnh đó call stack đã có th takenumber 
//và thực hiện xong takenumber sẽ pop th takenumber ra khỏi callstack và th main cũng kết thúc => callstack trống . Event loop sẽ check xem call stack có 
//rỗng không nếu có thì nó sẽ push th cb của helloworld vào call satck và thực hiện sau đó pop
function takeNumber(){
    console.log("Dữ liệu chúng ta cần lấy")
}
takeNumber();
console.log("Kết thúc");