

import SliderMobile from './SliderMobile';
import SliderTab from './SliderTab';
import SliderWeb from './sliderWeb';





function ScrollWidth() {

  let width = window.innerWidth
  console.log(width)
  if (width < 376){
      return ( <SliderMobile />)
  }else if (width < 835) {
      return( <SliderTab />)
  }else return(
      <SliderWeb/>
  )
 
  

}

export default ScrollWidth;