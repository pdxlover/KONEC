$(document).ready(function () { //start

  var dimmed = '<div class="dimmed"></div>'

  // 레이어 팝업
  layerpop();

  /*gnb menu*/
  $('.gnb-wrap').hide()
  $('nav .btn.open').click(function () {
    $('.gnb-wrap').show().addClass('on')
  });
  $('.gnb-m .btn.close').click(function () {
    $('.gnb-wrap').removeClass('on')
    $('.gnb-wrap').delay(1000).slideUp(1)
  });

  $('.depth02').hide();
  $('.gnb-pc .dim').hide();
  $('.gnb-m > ul > li').click(function () {
    if ($(this).find('.depth02').hasClass('on')) {
      $('.depth02').slideUp().removeClass('on')
    } else {
      $(this).find('.depth02').stop().slideDown().addClass('on')
      $(this).siblings().find('.depth02').stop().slideUp()
    }
  });
  $('.gnb-pc > ul > li').mouseenter(function () {
    $(this).find('.depth02').stop().slideDown()
    $(this).siblings().find('.depth02').stop().slideUp();
    $(this).find('.hover-box').stop().addClass('on')
    $('header').addClass('on')
    if ($('header').hasClass('on')) {
      $('.gnb-pc .dim').stop().slideDown()
    } else {
      $('.gnb-pc .dim').stop().slideUp()
    }
  });
  $('.gnb-pc > ul > li').mouseleave(function () {
    $(this).find('.depth02').stop().slideUp()
    $('.hover-box').stop().removeClass('on')

  });
  $('header').mouseenter(function () {
    if ($('header').hasClass('on')) {
      $('.gnb-pc .dim').stop().slideDown()
    }
  });
  $('header').mouseleave(function () {
    $('header').removeClass('on')
    if ($('header').hasClass('on')) {
    } else {
      $('.gnb-pc .dim').stop().slideUp()
    }
  });

  /*toggle-box light, dark모드 변경*/
  var switchDark = $(".toggle-box .mode #switchDark")
  var switchLight = $(".toggle-box .mode #switchLight")
  $(switchDark).on("click", function (e) {
    if ($(this).is(':checked')) {
      $('#wrap').removeClass('dark')
      $('#wrap').addClass('light')
    }
  });
  $(switchLight).on("click", function (e) {
    if ($(this).is(':checked')) {
      $('#wrap').addClass('dark')
      $('#wrap').removeClass('light')
    }
  });

  /*login.html user-box*/
  /*포커스 했을때*/
  $('input[type="text"]#user-id').focus(function () {
    $('.input-text.user-id').removeClass('inactive')
    $('.input-text.user-id').addClass('focused')
  });
  $('input[type="password"]#user-pw').focus(function () {
    $('.input-text.user-pw').removeClass('inactive')
    $('.input-text.user-pw').addClass('focused')
  });
  /*user-box에 incorrect 붙이면 */
  if ($('.user-box').hasClass('incorrect')) {
    $(this).find('.input-text').addClass('incorrect')
    $(this).find('.txt-box').addClass('incorrect')
  } else {
    $(this).find('.input-text').removeClass('incorrect')
    $(this).find('.txt-box').removeClass('incorrect')
  }
  if ($('.user-box').hasClass('correct')) {
    $(this).find('.input-text').addClass('correct')
    $(this).find('.txt-box').addClass('correct')
  } else {
    $(this).find('.input-text').removeClass('correct')
    $(this).find('.txt-box').removeClass('correct')
  }

  /* 레이어 팝업 */
  function layerpop() {
    $('.btn-popup').each(function () {
      var $pop = $($(this).attr('data-pop'));

      $(this).click(function () {
        $pop.show();
        $('body').append(dimmed);

        $('.popup-close, .dimmed, .cancel').click(function () {
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

  /*로그인 한영변경*/
  $(".login-wrap input[id=kor]").click(function(){
    $(".login-save label").text("로그인 정보 저장");
    $('input#user-id').attr('placeholder','아이디');
    $('input#user-pw').attr('placeholder','비밀번호');
   });
 
   $(".login-wrap input[id=eng]").click(function(){
    $(".login-save label").text("Save Login Information");
    $('input#user-id').attr('placeholder','ID');
    $('input#user-pw').attr('placeholder','PASSWORD');
   });
});//end