
import { useLocation } from 'react-router-dom'
import foods from '../data/foods.json'
import CardComp from './CardComponent'
import BreadCrumbComponent from './BreadCrumbComponent'
import Container from 'react-bootstrap/Container'
 
function SearchResultComponent(){
   
    const search = useLocation().search
    const searchTerm = new URLSearchParams(search).get('food')
    let searchResults = foods.filter(food => {
        return (
          food.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      });


    if (searchResults.length > 0) {
        return(
            <Container>
                <BreadCrumbComponent data={searchTerm}/>
                <CardComp data={searchResults}/>
            </Container>
        )
    }else {
        return(
            <Container className='my-5 text-center'>
                <BreadCrumbComponent data={searchTerm}/>
                <p id="no-item-in-search">Уучлаарай, илэрц олдсонгүй...</p>
            </Container>
        )
    }
    
}


export default SearchResultComponent;