import line from '../images/line.svg'

function Password () {
  return (
    <div className='login-form mb-5'>
      <div className='form-mobile-header my-3 py-2 d-flex login-form-header text-center d-block d-md-none'>
        <div className='ps-2 fs-1'>&#60;</div>
        <div className='flex-grow-1 align-self-center text-align-center'>НУУЦ ҮГ СЭРГЭЭХ</div>
      </div>
      <div className='form-md-header px-0 container d-none d-md-block'>
        <h5>
          <img src={line} /> НУУЦ ҮГ СЭРГЭЭХ
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
          <button type='submit' className='btn mt-5' id='login-button'>
            ҮРГЭЛЖЛҮҮЛЭХ
          </button>
        </div>
      </form>
    </div>
  )
}

export default Password;
