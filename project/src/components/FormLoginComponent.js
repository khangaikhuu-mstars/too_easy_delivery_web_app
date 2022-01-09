import line from '../images/line.svg'

function FormLogin () {
  return (
    <div className='login-form mb-5'>
      <div className='form-mobile-header my-3 py-2 d-flex login-form-header text-center d-block d-md-none'>
        <div className='ps-2'>&#60;</div>
        <div className='flex-grow-1 align-self-center text-align-center'>НЭВТРЭХ</div>
      </div>
      <div className='form-md-header px-0 container d-none d-md-block'>
        <h5>
          <img src={line} /> НЭВТРЭХ
        </h5>
      </div>
      <form>
        <div className='container px-0'>
          <div className='form-email'>
            <label for='exampleInputEmail1' className='form-label ps-2'>
              И-мэйл
            </label>
            <input
              type='email'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              placeholder='И-мэйл хаягаа оруулна уу.'
            />
          </div>
          <div className='form-password mt-3'>
            <label for='exampleInputPassword1' className='form-label ps-2'>
              Нууц үг
            </label>
            <input
              type='password'
              className='form-control'
              id='exampleInputPassword1'
              placeholder='Нууц үгээ оруулна уу.'
            />
          </div>
          <div className='forget-password text-end'>
            <p className=''>Нууц үгээ марсан уу?</p>
          </div>
          <button type='submit' className='btn mt-5' id='login-button'>
            НЭВТРЭХ
          </button>
        </div>
      </form>
      <div className='container px-0'>
        <p className='text-decoration text-center my-3 text-muted'>
          <u>эсвэл</u>
        </p>
        <div className='text-center py-1' id='register-link'>
          <a>БҮРТГҮҮЛЭХ</a>
        </div>
      </div>
    </div>
  )
}

export default FormLogin;
