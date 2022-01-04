



function FormLogin(){
return (
    <>  
        <div className="container d-flex login-form-header text-center d-block d-md-none">
            <div className="">&#60;</div>
            <div className="flex-grow-1 align-self-center text-align-center">НЭВТРЭХ</div>
        </div>
        <form>
            <div className="container">
                <div className="form-email">
                    <label for="exampleInputEmail1" className="form-label">И-мэйл</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="И-мэйл хаягаа оруулна уу."/>
                </div>
                <div className="form-password mt-4">
                    <label for="exampleInputPassword1" className="form-label">Нууц үг</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Нууц үгээ оруулна уу."/>
                    <p className="align">Нууц үгээ марсан уу?</p>
                </div>
                    <button type="submit" className="btn">НЭВТРЭХ</button>
                    <p>эсвэл</p>
                <div>
                    <a>БҮРТГҮҮЛЭХ</a>
                </div>
            </div>
        </form>
    </>
)
};

export default FormLogin;
