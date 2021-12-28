

import SliderMobile from './SliderMobile';
import SliderTab from './SliderTab'





function ScrollWidth() {

  let width = window.innerWidth
  console.log(width)
  if (width < 376){
      return ( <SliderMobile />)
  }else {
      return( <SliderTab />)
  }
 
  

}

export default ScrollWidth;