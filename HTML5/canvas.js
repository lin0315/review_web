// 绘制矩形
// function draw(id) {
//   let canvas = document.getElementById(id);
//   if (canvas == null) {
//     return false;
//   } else {
//     let context = canvas.getContext('2d');
//     // fillStyle 填充图形颜色
//     context.fillStyle = '#EEEEEFF';
//     //  fillRect 绘制图形
//     context.fillRect(0, 0, 400, 300);
//     context.fillStyle = 'red';
//     context.fillRect(50, 50, 100, 100);
//     //  strokeStyle 边框颜色
//     context.strokeStyle = 'blue';
//     // 边框宽度
//     context.lineWidth = 1;
//     // storkeRect 边框位置及大小
//     context.strokeRect(50, 50, 100, 100)
//   }
// }

// 绘制圆形
// function draw(id) {
//   let canvas = document.getElementById(id);
//   if (canvas == null) {
//     return false;
//   } else {
//     let context = canvas.getContext('2d');
//     context.fillStyle = '#EEEEFF';
//     context.fillRect(0, 0, 400, 300);

//     for (let i = 0; i < 10; i++) {
// 开始路径
//       context.beginPath();
// 绘制圆弧路径
//       context.arc(i * 25, i * 25, i * 10, 0, Math.PI * 2, true);
// 关闭路径
//       context.closePath();
//       context.fillStyle = 'rgba(255, 0, 0, 0.25)';
//       context.fill();
//     }
//   }
// }

//  moveTo 和 lineTO
function draw(id) {
  let canvas = document.getElementById(id);
  if (canvas == null) {
    return false;
  } else {
    let context = canvas.getContext('2d');
    context.fillStyle = '#EEEEFF';
    context.fillRect(0, 0, 400, 300);
    let n = 0;
    let dx = 150;
    let dy = 150;
    let s = 100;
    context.beginPath();
    context.fillStyle = 'rgb(100, 255, 200)';
    context.strokeStyle = 'rgb(0,0,100)';
    let x = Math.sin(0);
    let y = Math.cos(0);
    let dig = Math.PI / 15 * 11;
    for (let i = 0; i < 30; i++) {
      let x = Math.sin(i * dig);
      let y = Math.cos(i * dig);
      context.lineTo(dx + x * s, dy + y * s);

    }
    context.closePath();
    context.fill();
    context.stroke();
  }
}
