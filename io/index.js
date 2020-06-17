module.exports = io => {
  io.on('connection', function (socket) {
    console.log('New client connect');
    // app.post('/fromAdafruit/',function(req,res){
    //     Adfruit = req.body;
    //     console.log(Adfruit)
    //     // phai lay duoc du lieu gui len Card ID
    //     queryInterface.bulkInsert('Activities', [{
    //       cardId: cardID,
    //       unclock_date: new Date().toISOString(),
    //       type : "Voice"
    //     }]);
    //     socket.broadcast.emit('cardCheckDone',"1");
    //     console.log("lehoangtuan")
    //     res.send("Da nhan data"+data); 
    // });
    
    // socket.on('checkCard',function(data) {
    //     console.log(data);
    //     a = data.length;
    //     console.log(a);
    //     const data01 = data.slice(1,a-1);
    //     console.log(data01);
    //     if (data01 == "13c6c61b" ){
    //         console.log("ma the dung")
    //         cardCheck = "1"
    //     } else {
    //         console.log("ma the sai")
    //         cardCheck = "0"
    //     }
    //     socket.emit('cardCheckDone',cardCheck);
    // })
    // socket.on('disconnect', function () {
    //     console.log('Client disconnect'.gray);
    // });
    socket.on('disconnect', function () {
      console.log('Client disconnect'.gray);
  });
  });
};