import line from "../images/line.svg"

function FormRegister(){
    return(
        <div className="login-form">  
        <div className="form-mobile-header my-3 py-2 d-flex login-form-header text-center d-block d-md-none">
            <div className="ps-2">&#60;</div>
            <div className="flex-grow-1 align-self-center text-align-center">НЭВТРЭХ</div>
        </div>
        <div className="form-md-header px-0 container d-none d-md-block">
            <h5><img src={line}/> НЭВТРЭХ</h5>
        </div>
        <form>
            <div className="container px-0">
                <div className="form-email">
                    <label for="exampleInputEmail1" className="form-label ps-2">И-мэйл</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="И-мэйл хаягаа оруулна уу."/>
                </div>
                <div className="form-password mt-3">
                    <label for="exampleInputPassword1" className="form-label ps-2">Нууц үг</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Нууц үгээ оруулна уу."/>
                </div>
                <div className="form-password mt-3">
                    <label for="exampleInputPassword1" className="form-label ps-2">Нууц үг давтах</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Нууц үгээ оруулна уу."/>
                </div>
                <div className="form-check text-center">
                    <div className="d-inline-block mt-3">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label text-primary text-decoration-underline" for="flexCheckDefault">
                            <a>Үйлчилгээний нөхцөл зөвшөөрөх</a>
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn mt-5" id="login-button">БҮРТГҮҮЛЭХ</button>
            </div>
        </form>
    </div>
    )
}

export default FormRegister;