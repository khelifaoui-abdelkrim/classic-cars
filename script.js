const menu = document.querySelector('.menu')
const target = document.querySelectorAll('.target')
const wrapper = document.querySelectorAll('.wrapper')

menu.addEventListener('click',()=>{
  target.forEach((item)=>{
    item.classList.toggle("change");
  })
})
wrapper.forEach((item)=>{
  item.addEventListener('click',()=>{
    target.forEach((item)=>{
      item.classList.remove("change");
    })
  })  
})

// video 
let video = document.querySelectorAll('.video')

video.forEach((vid)=>{
  vid.addEventListener('mouseover',()=>{
    vid.play();
  })
  vid.addEventListener('mouseout',()=>{
    vid.pause();
  })
})
// end of video 