import logo from "../images/logo.svg"

function Footer(){
    const year = new Date().getFullYear();
    return(
        <footer className="pb-5">

            <div className='container pb-4 pt-4'>

                <div className="row mt-md-4 mt-5">
                    <h4 className='col-12 col-xs-12 col-md-4 col-lg-3'><img src={logo}/> Food Delivery</h4>
                    <div className="col-6 cols-xs-6 col-md-4 col-lg-2">
                        <p className=""><a>Нүүр</a></p>
                        <p><a>Хоолны цэс</a></p>
                        <p><a>Хүргэлтийн бүс</a></p>
                    </div>
                    <div className="col-6 col-xs-6 col-md-4 col-lg-2">
                        <p> Холбоо барих</p>
                        <p  className="textW400"> (976) 77123456</p>
                        <p  className="textW400"> (976) 77123345</p>
                    </div>
                </div>    
                <div className="row footer_bottom_section py-sm-2 mt-5">
                    <div className='col-md-4 social text-center text-md-start text-center'>
                        <p className="textW400 d-none d-md-block">Бидэнтэй нэгдээрэй</p>
                        <p className="px-md-4">
                            <a className="footer_icon pl-4" href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
                            <a className="footer_icon mx-3" href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
                            <a className="footer_icon" href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
                        </p>
                    </div>            
                    <div className="col-md-8 privacy_policy mt-4">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <p className="textW400 text-md-end col-md-12 order-md-2">Нууцлалын бодлого</p>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <p className="textW400 text-md-end col-md-12 order-md-1">Үйлчилгээний нөхцөл</p>    
                            </div>   
                            <div className="copyright col-lg-6 text-end">
                                <p className="mt-2 mb-0 textW400"> &#169; {year} Mstars Foods LLC</p>
                                <p className="d-md-block d-none textW400 mt-0">Зохиогчийн эрхээр хамгаалагдсан</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;