import logo from "../images/logo.svg"

function Footer(){

    const year = new Date().getFullYear();
    return(
    


        <footer>
            <h4 className=''><img src={logo}/>Food Delivery</h4>
            <div className='container'>
            <div className="row">
                <div className="col-6">
                    <p className=""><a>Нүүр</a></p>
                    <p><a>Хоолны цэс</a></p>
                    <p><a>Хүргэлтийн бүс</a></p>
                </div>
                <div className="col-6">
                    <p> Холбоо барих</p>
                    <p  className="textW400"> (976) 77123456</p>
                    <p  className="textW400"> (976) 77123345</p>
                </div>
            </div>
            <div className='social text-center'>
                <a className="footer_icon" href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
                <a className="footer_icon mx-3" href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
                <a className="footer_icon" href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
            </div>

            <hr/>
            
            <div className="privacy_policy">
                <p className="textW400">Нууцлалын бодлого</p>
                <p className="textW400">Үйлчилгээний нөхцөл</p>
            </div>
            <div className="copyright">
                <p className="textW400"> &#169; {year} Mstars Foods LLC</p>
            </div>
            </div>
        </footer>

    
    )
}

export default Footer;