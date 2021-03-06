import React from 'react'
import { Navbar, Container, Nav, Form, FormControl, NavLink } from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import foodDeliveryLogo from '../image/fooddelivery.svg'
import adminLogo from '../image/admin.svg'
import basket from '../image/basketIcon.svg'
import searchIcon from '../image/searchIcon.svg'
import { useState } from 'react'
import foods from '../data/foods.json'

function Menu () {

  
  //to toggle  between search icon and input
  const [searchInput, setSearchInput] = useState(false);
  
  function hideSearchIcon (event) {
    document.getElementById('search-icon').classList.add('d-none')
    setSearchInput(true)
  }
  
  function showSearchIcon () {
    document.getElementById('search-icon').classList.remove('d-none')
    setSearchInput(false)
  };
  
  const [searchTerm, setSearchTerm] = useState("");
  
  function handleSearhcInputChange(event){
    setSearchTerm(event.target.value)
  }
  
  let history =  useHistory();
  function HandleSearchInputSubmit(event){
    event.preventDefault();
    let searchResults = foods.filter(food => {
      return (
        food.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    });
    let path=`/search?food=${searchTerm}`
    history.push(path)
  }
  
  
  return (
    <div>
      <Navbar expand='md' className='mainss'>
        <Container className='text-align-center'>
          <Navbar.Toggle aria-controls='navbarScroll' className='changecolor' />
          <div className='del'>
            <a href='/home' className='text-decoration-none'>
              <img src={foodDeliveryLogo}></img>
              <p1 className='fooddelivery orangeFont poppins text-decoration-none'>Food Delivery</p1>
            </a>
          </div>
          <Navbar.Collapse id='navbarScroll'>
            <Nav className='me-auto my-2 my-lg-0' style={{ maxHeight: '100px' }}>
              <div className='d-flex tses1'>
                <NavLink to='/home' className='menu nuur black poppins'>
                  НҮҮР
                </NavLink>
                <NavLink to='/menu' className='menu poppins black'>
                  ХООЛНЫ ЦЭС
                </NavLink>
                <NavLink to='/delivery' className='menu poppins black'>
                  ХҮРГЭЛТИЙН БҮС
                </NavLink>
              </div>
              <div className='collapse1'>
                <div className='division'>
                  <div className='d-flex justify-content-between flex-row'>
                    <svg width='35' height='35' viewBox='0 0 35 35' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M12.1562 16.8086C12.0859 17.6172 12.7539 18.25 13.5625 18.25H15.5312C16.3047 18.25 16.9375 17.6523 16.9375 16.9141V1.62109C16.9375 0.882812 16.3047 0.25 15.5312 0.25C13.2812 0.25 10.1875 3.13281 10.1523 6.4375C10.1523 8.30078 11.1719 9.84766 12.6484 11.0078L12.1562 16.8086ZM11.3125 6.4375C11.3125 3.69531 13.9492 1.375 15.5312 1.375C15.6719 1.375 15.8125 1.48047 15.8125 1.62109V16.9141C15.8125 17.0195 15.6719 17.125 15.5312 17.125H13.5625C13.3867 17.125 13.2461 17.0195 13.2812 16.9141L13.8086 10.4805C12.4375 9.46094 11.3125 8.23047 11.3125 6.4375ZM8.5 1.44531C8.39453 0.777344 7.76172 0.25 6.88281 0.25C6.46094 0.25 6.03906 0.390625 5.72266 0.671875C5.40625 0.425781 5.01953 0.25 4.5625 0.25C4.07031 0.25 3.68359 0.425781 3.36719 0.671875C3.05078 0.390625 2.62891 0.25 2.20703 0.25C1.32812 0.25 0.695312 0.777344 0.589844 1.44531C0.519531 1.79688 0.0625 4.43359 0.0625 5.52344C0.0625 7.31641 0.976562 8.75781 2.55859 9.42578L2.13672 16.8438C2.10156 17.6172 2.69922 18.25 3.50781 18.25H5.61719C6.39062 18.25 6.98828 17.6172 6.95312 16.8438L6.56641 9.42578C8.11328 8.75781 9.0625 7.31641 9.0625 5.52344C9.0625 4.43359 8.57031 1.79688 8.5 1.44531ZM5.40625 8.6875L5.82812 16.9141C5.82812 17.0195 5.72266 17.125 5.61719 17.125H3.50781C3.36719 17.125 3.26172 17.0195 3.26172 16.9141L3.68359 8.6875C2.20703 8.40625 1.1875 7.17578 1.1875 5.52344C1.1875 4.50391 1.67969 1.65625 1.67969 1.65625C1.75 1.30469 2.69922 1.30469 2.73438 1.65625V5.94531C2.76953 6.36719 3.71875 6.36719 3.75391 5.98047L4.03516 1.65625C4.07031 1.30469 5.01953 1.30469 5.05469 1.65625L5.33594 5.98047C5.37109 6.36719 6.32031 6.36719 6.35547 5.94531V1.65625C6.39062 1.30469 7.33984 1.30469 7.41016 1.65625C7.41016 1.65625 7.90234 4.50391 7.90234 5.52344C7.9375 7.17578 6.88281 8.40625 5.40625 8.6875Z'
                        fill='#F17228'
                      />
                    </svg>

                    <Nav.Link to='/home' className='tses'>
                      Хоолны цэс
                    </Nav.Link>
                    <svg width='35' height='35' viewBox='0 0 35 35' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M0.953125 1.01758L0.367188 1.57422C0.25 1.7207 0.25 1.95508 0.367188 2.07227L5.66992 7.375L0.367188 12.707C0.25 12.8242 0.25 13.0586 0.367188 13.2051L0.953125 13.7617C1.09961 13.9082 1.30469 13.9082 1.45117 13.7617L7.60352 7.63867C7.7207 7.49219 7.7207 7.28711 7.60352 7.14062L1.45117 1.01758C1.30469 0.871094 1.09961 0.871094 0.953125 1.01758Z'
                        fill='#F17228'
                      />
                    </svg>
                  </div>
                  <div className='line'></div>
                  <div className='d-flex justify-content-between flex-row'>
                    <svg width='35' height='35' viewBox='0 0 35 35' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M20.0625 5.875C19.9922 5.875 19.9219 5.91016 19.8516 5.94531L13.875 8.125L13.4883 8.01953C14.332 6.78906 15 5.52344 15 4.57422C15 2.18359 12.9609 0.25 10.5 0.25C8.00391 0.25 6 2.21875 6 4.57422C6 4.99609 6.14062 5.48828 6.35156 6.01562L1.07812 7.84375C0.65625 8.01953 0.375 8.44141 0.375 8.89844V17.6875C0.375 18.0391 0.621094 18.25 0.9375 18.25C1.00781 18.25 1.07812 18.25 1.14844 18.2148L7.125 16L13.1719 18.1445C13.6289 18.2852 14.1211 18.3203 14.5781 18.1445L19.8867 16.2812C20.3438 16.1406 20.625 15.7188 20.625 15.2617V6.4375C20.625 6.12109 20.3438 5.875 20.0625 5.875ZM6.5625 15.0156L1.46484 16.8789L1.42969 8.93359L6.5625 7.14062V15.0156ZM10.5 1.375C12.3281 1.375 13.875 2.81641 13.875 4.57422C13.875 5.52344 12.5039 7.70312 10.5 10.0938C8.46094 7.70312 7.125 5.52344 7.125 4.57422C7.125 2.81641 8.63672 1.375 10.5 1.375ZM13.3125 17.0195L7.6875 15.0156V8.30078C8.53125 9.56641 9.51562 10.6914 10.043 11.3242C10.1484 11.4648 10.3242 11.5 10.5 11.5C10.6406 11.5 10.8164 11.4648 10.9219 11.3242C11.3789 10.7969 12.1172 9.95312 12.8203 8.96875L13.3125 9.14453V17.0195ZM14.4375 17.0195V9.14453L19.5 7.24609L19.5352 15.2266L14.4375 17.0195ZM11.3438 4.75C11.3438 4.29297 10.957 3.90625 10.5 3.90625C10.0078 3.90625 9.65625 4.29297 9.65625 4.75C9.65625 5.24219 10.0078 5.59375 10.5 5.59375C10.957 5.59375 11.3438 5.24219 11.3438 4.75Z'
                        fill='#F17228'
                      />
                    </svg>

                    <Nav.Link to='/delivery' className='tses'>
                      Хүргэлтийн бүс
                    </Nav.Link>
                    <svg width='35' height='35' viewBox='0 0 35 35' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M0.953125 1.01758L0.367188 1.57422C0.25 1.7207 0.25 1.95508 0.367188 2.07227L5.66992 7.375L0.367188 12.707C0.25 12.8242 0.25 13.0586 0.367188 13.2051L0.953125 13.7617C1.09961 13.9082 1.30469 13.9082 1.45117 13.7617L7.60352 7.63867C7.7207 7.49219 7.7207 7.28711 7.60352 7.14062L1.45117 1.01758C1.30469 0.871094 1.09961 0.871094 0.953125 1.01758Z'
                        fill='#F17228'
                      />
                    </svg>
                  </div>
                </div>
                <div className='division'>
                  <div className='d-flex justify-content-between flex-row'>
                    <svg width='35' height='35' viewBox='0 0 35 35' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M9.5 0.53125C4.68359 0.53125 0.78125 4.43359 0.78125 9.25C0.78125 14.0664 4.68359 17.9688 9.5 17.9688C14.3164 17.9688 18.2188 14.0664 18.2188 9.25C18.2188 4.43359 14.3164 0.53125 9.5 0.53125ZM14 15.3672C12.7344 16.3164 11.1523 16.8438 9.5 16.8438C7.8125 16.8438 6.23047 16.3164 5 15.3672V14.875C5 13.6445 5.98438 12.625 7.25 12.625C7.63672 12.625 8.19922 13.0469 9.5 13.0469C10.7656 13.0469 11.3281 12.625 11.75 12.625C12.9805 12.625 14 13.6445 14 14.875V15.3672ZM15.0547 14.418C14.8086 12.7656 13.4375 11.5 11.75 11.5C11.0117 11.5 10.6602 11.9219 9.5 11.9219C8.30469 11.9219 7.95312 11.5 7.25 11.5C5.52734 11.5 4.15625 12.7656 3.91016 14.418C2.64453 13.0469 1.90625 11.2539 1.90625 9.25C1.90625 5.06641 5.28125 1.65625 9.5 1.65625C13.6836 1.65625 17.0938 5.06641 17.0938 9.25C17.0938 11.2539 16.3203 13.0469 15.0547 14.418ZM9.5 4.46875C7.77734 4.46875 6.40625 5.875 6.40625 7.5625C6.40625 9.28516 7.77734 10.6562 9.5 10.6562C11.1875 10.6562 12.5938 9.28516 12.5938 7.5625C12.5938 5.875 11.1875 4.46875 9.5 4.46875ZM9.5 9.53125C8.41016 9.53125 7.53125 8.65234 7.53125 7.5625C7.53125 6.50781 8.41016 5.59375 9.5 5.59375C10.5547 5.59375 11.4688 6.50781 11.4688 7.5625C11.4688 8.65234 10.5547 9.53125 9.5 9.53125Z'
                        fill='#F17228'
                      />
                    </svg>

                    <Nav.Link to='./' className='tses'>
                      Хэрэглэгчийн мэдээлэл
                    </Nav.Link>
                    <svg width='35' height='35' viewBox='0 0 35 35' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M0.953125 1.01758L0.367188 1.57422C0.25 1.7207 0.25 1.95508 0.367188 2.07227L5.66992 7.375L0.367188 12.707C0.25 12.8242 0.25 13.0586 0.367188 13.2051L0.953125 13.7617C1.09961 13.9082 1.30469 13.9082 1.45117 13.7617L7.60352 7.63867C7.7207 7.49219 7.7207 7.28711 7.60352 7.14062L1.45117 1.01758C1.30469 0.871094 1.09961 0.871094 0.953125 1.01758Z'
                        fill='#F17228'
                      />
                    </svg>
                  </div>
                  <div className='line'></div>
                  <div className='d-flex justify-content-between flex-row'>
                    <svg width='35' height='35' viewBox='0 0 35 35' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M20.2031 6H17.4961L12.5742 0.585938C12.3633 0.339844 12.0117 0.339844 11.8008 0.550781C11.5547 0.761719 11.5547 1.11328 11.7656 1.32422L15.9844 6H4.98047L9.19922 1.32422C9.41016 1.11328 9.41016 0.761719 9.16406 0.550781C8.95312 0.339844 8.60156 0.339844 8.39062 0.585938L3.46875 6H0.796875C0.550781 6 0.375 6.21094 0.375 6.42188V6.70312C0.375 6.94922 0.550781 7.125 0.796875 7.125H1.35938L2.41406 14.6836C2.51953 15.5273 3.22266 16.125 4.06641 16.125H16.8984C17.7422 16.125 18.4453 15.5273 18.5508 14.6836L19.6055 7.125H20.2031C20.4141 7.125 20.625 6.94922 20.625 6.70312V6.42188C20.625 6.21094 20.4141 6 20.2031 6ZM17.4609 14.543C17.3906 14.8242 17.1797 15 16.8984 15H4.06641C3.78516 15 3.57422 14.8242 3.50391 14.543L2.48438 7.125H18.4805L17.4609 14.543ZM11.0625 9.09375C11.0625 8.8125 10.7812 8.53125 10.5 8.53125C10.1836 8.53125 9.9375 8.8125 9.9375 9.09375V13.0312C9.9375 13.3477 10.1836 13.5938 10.5 13.5938C10.7812 13.5938 11.0625 13.3477 11.0625 13.0312V9.09375ZM15 9.09375C15 8.8125 14.7188 8.53125 14.4375 8.53125C14.1211 8.53125 13.875 8.8125 13.875 9.09375V13.0312C13.875 13.3477 14.1211 13.5938 14.4375 13.5938C14.7188 13.5938 15 13.3477 15 13.0312V9.09375ZM7.125 9.09375C7.125 8.8125 6.84375 8.53125 6.5625 8.53125C6.24609 8.53125 6 8.8125 6 9.09375V13.0312C6 13.3477 6.24609 13.5938 6.5625 13.5938C6.84375 13.5938 7.125 13.3477 7.125 13.0312V9.09375Z'
                        fill='#F17228'
                      />
                    </svg>
                    <Nav.Link to='./' className='tses'>
                      Миний захиалга
                    </Nav.Link>
                    <svg width='35' height='35' viewBox='0 0 35 35' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M0.953125 1.01758L0.367188 1.57422C0.25 1.7207 0.25 1.95508 0.367188 2.07227L5.66992 7.375L0.367188 12.707C0.25 12.8242 0.25 13.0586 0.367188 13.2051L0.953125 13.7617C1.09961 13.9082 1.30469 13.9082 1.45117 13.7617L7.60352 7.63867C7.7207 7.49219 7.7207 7.28711 7.60352 7.14062L1.45117 1.01758C1.30469 0.871094 1.09961 0.871094 0.953125 1.01758Z'
                        fill='#F17228'
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
          <div className='d-flex'>
            <div>
              <Form className='sform' onSubmit={HandleSearchInputSubmit} >
                <FormControl type='text' placeholder='&#128269; Хайх' className='searchForm' aria-label='Search' value={searchTerm}  onChange={handleSearhcInputChange}/>
              </Form>
            </div>

            {/* search icon and inout for tab and phone */}
            <form className='searchIcon' id='search' onMouseEnter={hideSearchIcon} onMouseLeave={showSearchIcon} onSubmit={HandleSearchInputSubmit}>
              <img src={searchIcon} id='search-icon' alt="search icon"></img>
              {searchInput && <input type='text' id='search-input' value={searchTerm} onChange={handleSearhcInputChange} />}
            </form>

            <div className='px-3'>
              <img src={basket} className='basketLogo'></img>
              <a href='#action2' className='basket orangeFont poppins px-1'>
                Сагс
              </a>
            </div>
            <div>
              <img src={adminLogo} className='adminLogo'></img>
              <a href='/login' className='orangeFont admin poppins px-1 text-decoration-none'>
                Нэвтрэх
              </a>
            </div>
          </div>
        </Container>
      </Navbar>
      <div></div>
    </div>
  )
}

export default Menu
