
        const buyBtns =document.querySelectorAll('.js-buy-ticket')
        const modal= document.querySelector('.js-modal')
        const modalContainer = document.querySelector('.js-modal-container')
        const modalClose = document.querySelector('.js-modal-close') 
        function ShowBuyTickets(){
            modal.classList.add('open')
        }
        function CloseTickets(){
            modal.classList.remove('open')
        }
    for(const buyBtn of buyBtns){
    buyBtn.addEventListener('click',ShowBuyTickets)
    }
    modalClose.addEventListener('click',CloseTickets)  

    modal.addEventListener('click',CloseTickets)

    modalContainer.addEventListener('click',function(event){
        event.stopPropagation()
    })
   //function 2
   var header=document.getElementById('header')
   var mobileM=document.getElementById('mobile-menu')
   var headerHight= header.clientHeight;

   //đóng mở menu
    mobileM.onclick= function(){
        var isClose = header.clientHeight===headerHight;
        if(isClose){
            header.style.height='auto';
        }else
        {
            header.style.height=null;
        }
    }
    //tự động đóng khi chạm menu
    var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
    for(var i =0;i<menuItems.length;i++){
        var menuItem =menuItems[i];
      
        menuItem.onclick=function(event){
            var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
            if(isParentMenu){
                event.preventDefault();
            }else{
                header.style.height=null;
            }
        }
    }


    var current = 1;
    var num_image = 3;
    function loadimage(){
        setTimeout("switch_Image()", 3000);
    } 
      function switch_Image(){
          current++;
          document.images['image_slider'].src ='/assets/img/slider/slider'+ current + '.jpg';
         if(current < num_image){
           setTimeout("switch_Image()", 3000);
         }else if(current == num_image){
           current = 0;
           setTimeout("switch_Image()", 3000);
         }
        }
        
