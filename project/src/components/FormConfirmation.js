import { Form } from "react-bootstrap"
import location_icon from "../images/location.png"



function FormConfirmation(){
    return(
        <div className="confirmation-form mt-5">
            <div className="address-info container">
                <p>Хаягийн мэдээлэл</p>
                <select class="form-select py-2" aria-label="Default select example" id="dropdown-address" >
                    <option selected id="selected">Дүүрэг сонгоно уу.</option>
                    <option value="1">Баянзүрх дүүрэг</option>
                    <option value="2">Хан Уул дүүрэг</option>
                    <option value="3">Баянгол дүүрэг</option>
                    <option value="4">Сонгинохайрхан дүүрэг</option>
                    <option value="5">Чингэлтэй дүүрэг</option>
                </select>
                <select class="form-select my-3 py-2" aria-label="Default select example">
                    <option selected>Хороо сонгоно уу.</option>
                    <option value="1">1-р хороо</option>
                    <option value="2">1-р хороо</option>
                    <option value="3">1-р хороо</option>
                    <option value="4">1-р хороо</option>
                    <option value="5">1-р хороо</option>
                    <option value="6">1-р хороо</option>
                    <option value="7">1-р хороо</option>
                    <option value="8">1-р хороо</option>
                    <option value="9">1-р хороо</option>
                </select>
                <select class="form-select py-2" aria-label="Default select example">
                    <option selected>Байр, гудамж сонгоно уу.</option>
                    <option value="1">34-р байр</option>
                    <option value="2">Нархан хотхон</option>
                    <option value="3">4-р байр</option>
                </select>

            </div>

            <div className="address-description container mt-3">
                <p className="d-block d-md-none">Хаягн дэлгэрэнгүй</p>
                <p className="d-none d-md-block">Нэмэлт мэдээлэл</p>

                <textarea className="form-control" id="" placeholder="Орц, давхар орцны код..."/>
             
            </div>
            <div className="phonenumber container mt-3">
                <p className="">Утасны дугаар*</p>
                <input type="text" className="form-control" id="" placeholder="Утасны дугаараа оруулна уу."/>
            </div>

            <div className="payment-option container mt-3">
                <p>Төлбөр төлөх</p>
                <div class="form-check d-inline-block">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="payment-radio" checked/>
                    <label class="form-check-label" for="flexRadioDefault1">
                        Бэлнээр
                    </label>
                    </div>
                    <div class="form-check d-inline-block ms-5">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="payment-radio"/>
                    <label class="form-check-label" for="flexRadioDefault2">
                        Картаар
                    </label>
                </div>                
            </div>
            <div className="container text-center">
                <button type="submit" className="btn mt-5" id="confirmation-button">Захиалах</button>
            </div>

        </div>
    )
}

export default FormConfirmation;

