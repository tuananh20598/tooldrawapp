// M : di chuyển điểm vẽ đến tọa độ x, y (M x y)
// L : vẽ từ điểm hiện tại đến điểm x, y (L x y)
// H : vẽ đường ngang từ điểm hiện tại đến điểm có tọa độ x (H x)
// V : vẽ đường thẳng đứng đến điểm có tọa độ y (V y)
// C : vẽ đường cong cubic-bezier từ điểm hiện tại x0, y0 đến điểm x, y. điểm đầu đường cong tiếp tuyến với đường thẳng x0,y0, x1, y1 điểm thứ 2 của đường cong tiếp tuyến với tường x,y, x2, y2 C x1 y1, x2 y2, x, y
// S : vẽ đường cong trơn từ điểm hiện tại x0, y0 đến điểm x, y trong đó điểm đầu tiếp tuyến với đường x0,y0, x2, y2 S x2 y2, x y
// Q : vẽ đường cong cubic-bezier từ điểm hiện tại x0, y0 đến điểm x, y. điểm đầu đường cong tiếp tuyến với đường thẳng x0,y0, x1, y1 điểm thứ 2 của đường cong tiếp tuyến với tường x,y, x1, y1 C x1 y1, x y
// T : vẽ đường cong cubic-bezier, từ điểm hiện tại đến điểm x,y (T x y)
// A : vẽ cung tròn
// Z : đóng đường vẽ

// Ảnh svg bắt đầu bằng thẻ svg
// Thuộc tính chiều rộng và chiều cao của thẻ svg định nghĩa chiều rộng và chiều cao của ảnh svg
// Thẻ circle dùng để vẽ hình tròn
// Thuộc tính cx và cy là tọa độ x và y của tâm đường tròn. Nếu cx và cy ko đặt thì tâm đường tròn sẽ là (0,0)
// Thuộc tính r là bán kính của đường tròn
// Thuộc tính stroke và stroke-width định nghĩa đường viền của hình
// Thuộc tính fill đặt màu trong hình
// Thẻ </svg> dùng để đóng thẻ svg

// Rectangle <rect> vẽ hình chữ nhật
// Circle <circle> vẽ hình tròn
// Ellipse <ellipse> vẽ hình ellip
// Line <line> vẽ đường thẳng
// Polyline <polyline> vẽ đường ngoằn nghèo
// Polygon <polygon> vẽ hình khối
// Path <path> vẽ tất cả

// points="200,10 250,190 160,210"
//         cx1,cy1 cx2,cy2 cx3,cy3

// --- SVG ---
// SVG có khả năng mở rộng tốt hơn. Vì vậy, nó có thể được in với chất lượng cao ở bất kỳ độ phân giải nào
// SVG cho hiệu suất tốt hơn với số lượng vật nhỏ hơn hoặc bề mặt lớn hơn.
// SVG có thể được sửa đổi thông qua script và CSS
// SVG dựa trên vector và bao gồm các hình dạng

// --- Canvas ---
// Canvas có khả năng mở rộng kém. Do đó nó không phù hợp để in ở độ phân giải cao hơn
// Canvas cho hiệu suất tốt hơn với bề mặt nhỏ hơn hoặc số lượng đối tượng lớn hơn
// Canvas chỉ có thể được sửa đổi thông qua tập lệnh
// Canvas dựa trên raster và bao gồm pixel


// function main() {
//     var clicks = 0;
//     var lastClick = [0, 0];

//     var canvas = document.getElementById('canvas');

//     canvas.addEventListener('click', draw, false);

//     function draw(e) {
//         ctx = this.getContext('2d'); // vẽ hình 2d

//         x = getClick(e)[0]; // - this.offsetLeft;
//         y = getClick(e)[1]; // - this.offsetTop;

//         if (clicks != 1) {
//             clicks++;
//         } else {
//             ctx.beginPath();
//             ctx.moveTo(lastClick[0], lastClick[1]); //Định điểm bắt đầu
//             ctx.lineTo(x, y, 6); // Định điểm kết thúc

//             ctx.strokeStyle = '#000000'; // Css line
//             ctx.stroke()// Vẽ đường từ 2 điểm

//             clicks = 0;
//         }
//         lastClick = [x, y];
//     }

//     function getClick(e) {
//         var x, y;

//         if (e.pageX != undefined && e.pageY != undefined) {
//             x = e.pageX;
//             y = e.pageY;
//         } else {
//             x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
//             y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
//         }

//         return [x, y];
//     }
// }

function connect() {
    alert("Click 2 points");

}

