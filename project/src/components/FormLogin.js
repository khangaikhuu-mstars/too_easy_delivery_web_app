



function FormLogin(){
return (
    <form>
    <div className="form-general">
        <label for="exampleInputEmail1" className="form-label">И-мэйл</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="И-мэйл хаягаа оруулна уу."/>
    </div>
    <div className="form-general">
        <label for="exampleInputPassword1" className="form-label">Нууц үг</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Нууц үгээ оруулна уу."/>
        <p>Нууц үгээ марсан уу?</p>
    </div>
    <button type="submit" className="btn btn-primary">НЭВТРЭХ</button>
    <p>эсвэл</p>
    <div>
        <a>БҮРТГҮҮЛЭХ</a>
    </div>

    </form>
)
};

export default FormLogin;
