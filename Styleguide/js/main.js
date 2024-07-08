$(document).ready(function(){

  /* $(".depth2").hide();
  $(".tab_menu > ul > li").hover(function(){
    $(this).find(".depth2").stop().slideToggle();
  }); */


  var dimmed = '<div class="dimmed"></div>'

  // 레이어 팝업
  layerpop();

  /* 레이어 팝업 */
  function layerpop(){
    
    $('.btn-popup').each(function(){
        var $pop = $($(this).attr('data-pop'));
        
        $(this).click(function(){
            $pop.show();
            $('body').append(dimmed);
            
            $('.popup-close, .dimmed, .cancel, .btn-ok, .btn-no').click(function(){
                $('.dimmed').remove();
                $pop.hide().removeAttr('style');
            });
        })
    });
  }
  
  /* 상태진행바 */
  $('progress').each(function () {
    // 'value' 속성을 읽어와 'max' 변수에 저장합니다.
    const max = $(this).attr('value');
    // 0에서 'max'까지 1초(1000ms) 동안 애니메이션 합니다.
    $(this).val(0).animate({ value: max }, 1000);
});

 /*login.html user-box*/
  /*포커스 했을때*/
  $('input[type="text"]#user-id').focus(function(){
    $('.input-text.user-id').removeClass('inactive')
    $('.input-text.user-id').addClass('focused')
  });
  $('input[type="text"]#user-pw').focus(function(){
    $('.input-text.user-pw').removeClass('inactive')
    $('.input-text.user-pw').addClass('focused')
  });


  
  /*user-box에 incorrect 붙이면 */
  /* if($('.user-box').hasClass('incorrect')){
    $(this).find('.input-text').addClass('incorrect')
    $(this).find('.txt-box').addClass('incorrect')
  }else{
    $(this).find('.input-text').removeClass('incorrect')
    $(this).find('.txt-box').removeClass('incorrect')
  }
  if($('.user-box').hasClass('correct')){
    $(this).find('.input-text').addClass('correct')
    $(this).find('.txt-box').addClass('correct')
  }else{
    $(this).find('.input-text').removeClass('correct')
    $(this).find('.txt-box').removeClass('correct')
  }
   */




  //드롭다운 옵션 선택시 변경
      /* const btn = document.querySelector('.dropdown-btn.hover');
      const list = document.querySelector('.selectbox-option.hover');
      btn.addEventListener('click', () => {
        list.classList.toggle('on');
      });
      list.addEventListener('click', (event) => {
        if (event.target.nodeName === 'BUTTON') {
          btn.innerText = event.target.innerText;
          list.classList.remove('on');
        }
      });

      document.addEventListener('DOMContentLoaded', function() {
        var element = document.getElementById('yourElementId');
        if (element) {
            element.addEventListener('click', function() {
                // 이벤트 핸들러 코드
            });
        } else {
            console.error('Element with ID "yourElementId" not found');
        }
    });

    document.addEventListener('DOMContentLoaded', function() {
      var element = document.getElementById('myElement');
      if (element) {
          element.addEventListener('click', function() {
              // some code
          });
      }
  });
    


      //드롭다운 슬라이드 토글
      $(".selectbox-option.hover").hide();
      $(".dropdown-btn.hover").click(function(){
        $(".selectbox-option.hover").stop().slideToggle();
      }); */

    

});