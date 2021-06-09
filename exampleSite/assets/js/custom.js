// Put custom JavaScript code in this file
// Put custom JavaScript code in this file

document.addEventListener("DOMContentLoaded", function(){
		
	window.addEventListener('scroll', function() {
	
		if (window.scrollY > 200) {
			document.getElementById('navbar_top').classList.add('fixed-top');
			// add padding top to show content behind navbar
			navbar_height = document.querySelector('.navigation').offsetHeight;
			document.body.style.paddingTop = navbar_height + 'px';

		} else {
			 document.getElementById('navbar_top').classList.remove('fixed-top');
			 // remove padding top from body
			document.body.style.paddingTop = '0';

		} 
	});
}); 

$(function() {
    /* 按下GoTop按鈕時的事件 */
    $('#BackTop').click(function(){
        $('html,body').animate({ scrollTop: 0 }, 333);   /* 返回到最頂上 */
        //return false;
    });
    
    /* 偵測卷軸滑動時，往下滑超過400px就讓GoTop按鈕出現 */
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 200){
            $('#BackTop').fadeIn(222);
        } else {
            $('#BackTop').fadeOut(222);
        }
    }).scroll();d
});

AOS.init({
    once: false,
    //delay: 50, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease-in-sine',
});


//lazySize js
window.lazySizesConfig = window.lazySizesConfig || {};
window.lazySizesConfig.init = false;
onMyCallback(lazySizes.init);

// imagesLoaded
/*
$('#portfolio-img-parent').imagesLoaded().always( function() {
    // images have loaded
    alert('imageloaded');
    shuffleInstance.layout();
  });
 */