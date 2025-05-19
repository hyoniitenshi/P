// $(function(){
//     $('.gallery li').each(function(index, el){
//         $(el).mouseenter(function(){
//             $(this).find('video')[0].play()
//         })
//         $(el).mouseenter(function(){
//             $(this).find('video')[0].pause()
//             $(this).find('video')[0].currentTime = 0
//         })
//         $(el).click(function(){
//             // 가지고 오기
//             const title = $(this).find('h2').text()
//             const text = $ (this).find('.ddd').text()
//             const videoSrc = $(this).find('video').attr('src')

//             // 적용하기
//             $('.popup').find('h2').text(title)
//             $('.popup').find('p').text(text)
//             $('.popup').find('video').attr('src', videoSrc)
//             $('.popup').addClass('on')
//             $('.popup').find('video')[0].play()
//         })
        
//     })})
    $(function(){
   // nav li 클릭했을 때 할 일
   $('header nav li').click(function(e){
    // a 태그 기능 막기
    e.preventDefault()
   // this on 클래스 추가 ~ 나머지는 on 클래스 삭제
   $(this).addClass('on').siblings().removeClass('on')
   // 이동
   let idx = $(this).index()
   let section = $('main section').eq(idx)
   let sectionD = section.offset().top-70
   $('html, body').animate({
    scrollTop : sectionD
   })
   })
   
   // 윈도 스크롤 했을 때 할 일
   $(window).scroll(function(){
    // 해당영역에 들어오면 li 클래스 추가 ~ 나머지는 삭제
    $('main section').each(function(){
        if($(this).offset().top <= $(window).scrollTop()+70){
            let idx = $(this).index()
            $('header nav li').removeClass('on')
            $('header nav li').eq(idx).addClass('on')
        }
    })
   })
   

})
$(function () {
  const headerHeight = 114;

  // 클릭 시 이동 + 글자색 바꾸기
  $('header nav li a').click(function (e) {
    e.preventDefault();
    let targetId = $(this).attr('href');
    let targetSection = $(targetId);
    let scrollTop = targetSection.offset().top - headerHeight;

    // 스크롤 이동
    $('html, body').animate({ scrollTop: scrollTop }, 500);

    // 클릭한 메뉴에 .on 클래스
    $('header nav li').removeClass('on');
    $(this).parent().addClass('on');
  });

  // 스크롤 시 메뉴 자동 변경
  $(window).on('scroll', function () {
    $('main section').each(function () {
      let sectionTop = $(this).offset().top - headerHeight - 1;
      let sectionBottom = sectionTop + $(this).outerHeight();
      let scroll = $(window).scrollTop();

      if (scroll >= sectionTop && scroll < sectionBottom) {
        let id = $(this).attr('id');
        $('header nav li').removeClass('on');
        $('header nav li a[href="#' + id + '"]').parent().addClass('on');
      }
    });
  });
});

  
    // const thumbnails = document.querySelectorAll('.thumbnail');
    // const modal = document.getElementById('videoModal');
    // const videoFrame = document.getElementById('videoFrame');
    // const videoDescription = document.getElementById('videoDescription');

    // thumbnails.forEach(thumbnail => {
    //   thumbnail.addEventListener('click', () => {
    //     const videoId = thumbnail.dataset.videoId;
    //     const description = thumbnail.dataset.description;
    //     videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    //     videoDescription.textContent = description;
    //     modal.style.display = 'flex';
    //   });
    // });

    // function closeModal() {
    //   modal.style.display = 'none';
    //   videoFrame.src = '';
    //   videoDescription.textContent = '';
    // }

    // window.addEventListener('click', (e) => {
    //   if (e.target === modal) {
    //     closeModal();
    //   }
    // });
     const thumbnails = document.querySelectorAll('.thumbnail');
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    const descTitle = document.getElementById('descTitle');
    const descBody = document.getElementById('descBody');

    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', () => {
        const videoId = thumbnail.dataset.videoId;
        const title = thumbnail.dataset.descriptionTitle;
        const body = thumbnail.dataset.descriptionBody;
        videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        descTitle.textContent = title;
        descBody.innerHTML = body; // HTML 허용
        modal.style.display = 'flex';
      });
    });

    function closeModal() {
      modal.style.display = 'none';
      videoFrame.src = '';
      descTitle.textContent = '';
      descBody.innerHTML = '';
    }

    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
      });