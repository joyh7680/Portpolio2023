

$(function(){
  // sc-intro
  const introTxt = new SplitType('.sc-intro .tit-area h2, .sc-intro .tit-area p', { types : 'words, chars', });
  gsap.set(introTxt.chars, {
    xPercent:("random(-200,200)"),
    yPercent:("random(-200,200)"),
    rotation:("random(-360,360)")
  })
  gsap.to(introTxt.chars,1,{
    xPercent: 0,
    yPercent: 0,
    rotation: 0,
    stagger : {
      from : 'random',
      amount : 0.1
    }
  })

  // sc-about
  aboutTxt = gsap.timeline({
    scrollTrigger:{
      trigger:".sc-about",
      start:"20% 0%",
      end : "60% 0%",
      scrub : 1,
    },
  })
  aboutTxt.to('.sc-about .group-column',{
    opacity: 1,
    })

  // sc-project
  $('.sc-project .project-item').each(function(i,e){
    descEL =  $(this).find('.desc-area')
    leftEL = $(this).find('.img-area.left')
    rightEL = $(this).find('.img-area.right')

    const projectMotion = gsap.timeline({
      scrollTrigger:{
        trigger:e,
        start:"0% 95%",
        end : "100% 90%",
        scrub : 1,
      },
    })
    projectMotion
    .addLabel('a')
    .to(leftEL,{
      xPercent:-150,
      rotation : -10,
    },'a')
    .to(rightEL,{
      xPercent:150,
      rotation : 10
    },'a')
      .from(descEL,{
      opacity : 0,
      yPercent:10,
    },'a')
  })

  // footer
  $('.footer .email-area').mouseover(function(){
    gsap.to('.footer .label-area .label',{
      yPercent : -100,
    })
  })

  $('.footer .email-area').mouseleave(function(){
    gsap.to('.footer .label-area .label',{
      yPercent : 0,
    })
  })

  $('.footer .email-area').click(function(e){
    e.preventDefault();
    text = $(this).children().text();
    navigator.clipboard.writeText(text)
    gsap.to('.footer .label-area .label',{
      yPercent : -200,
    }) 
  })
}) //end