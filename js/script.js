 // Lấy danh sách menu
 var menu = document.querySelectorAll('.nav-links > li');

 // Lặp qua từng menu để gán sự kiện click
 for (var i = 0; i < menu.length; i++)
 {
     menu[i].addEventListener("click", function()
     {
         // Ẩn hết menu con
         var menuList = document.querySelectorAll('.nav-links > li > ul');
         for (var j = 0; j < menuList.length; j++) {
             menuList[j].style.display = "none";
         }

         // Hiển thị menu hiện tại
         // đối tượng this chính là thẻ li hiện tại
         // nên ta sử dụng hàm childrent để lấy danh sách thẻ con
         // mà thẻ ul nằm ở vị trí thứ 2 nên trong mảng con nó
         // sẽ có vị trí là 1 (mảng bắt đầu từ 0)
         this.children[1].style.display = "block";
     });
 }
//nếu click ra ngoài thì ẩn tất cả các menu con 
 window.addEventListener("click", function(){
     if(!Event.target.matches('.nav-links > li')){
         for (var i = 0; i < menuList.length; i++){
            menuList[i].style.display="none";
         }
     }
 });

// let arrow = document.querySelectorAll(".arrow");
// for (var i = 0; i < arrow.length; i++) {
//   arrow[i].addEventListener("click", (e)=>{
//  let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
//  arrowParent.classList.toggle("showMenu");
//   });
// }
