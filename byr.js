// alert('你丫是北邮人啊！');
// var bg = chrome.extension.getBackgroundPage();
// bg.test();

// 这是发送消息
// chrome.extension.sendMessage({greeting:"hello"},function(response){
//     alert(response.farewell);
// });

var s = document.createElement('script');
s.innerHTML = 'console.log("Hello, byr!")';
document.querySelector('body').appendChild(s);