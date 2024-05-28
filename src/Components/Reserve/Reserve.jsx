import React from 'react'
import './Reserve.css'
import pt from "../../assets/Pattern.png"
import uI from "../../assets/rsrv/User.svg"
import pI from "../../assets/rsrv/phone.svg"
import mI from "../../assets/rsrv/mail.svg"
import bI from "../../assets/rsrv/book-open.svg"
import eI from "../../assets/rsrv/edit.svg"
const Reserve = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "API-KEY");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='rsrv'>
            <div className="textr">
                <p className="top">FLAT DISCOUNT</p>
                <h1>Claim up to 50% offer on the most popular services...</h1>
                <p className='desc'>Claim up to 50% off on our most popular services. Experience luxury and rejuvenation at an unbeatable price.</p>
                <div className="box">
                    <div className="boxtext">
                        <div className="inner">
                            <h2><img src={pt} alt="" /> MAIL US :</h2>
                            <p>kevincornelius1905@gmail.com</p>
                        </div>
                        <div className="inner">
                            <h2><img src={pt} alt="" /> CALL US :</h2>
                            <p>(+00) 123 4568 009</p>
                        </div>

                    </div>
                    <div className="disc">
                        <p>- GET FLAT -</p>
                        <h2>50%</h2>
                        <h3>DISCOUNT</h3>
                    </div>
                </div>
            </div>
            <div className="forms">
                <form onSubmit={onSubmit}>
                    <div className="boxs">
                        <img src={uI} alt="" />
                        <input type="text" name="name" placeholder='Name' />
                    </div>
                    <div className="boxs">
                        <img src={mI} alt="" />
                        <input type="text" name="email" placeholder='Email' />
                    </div>
                    <div className="boxs">
                        <img src={pI} alt="" />
                        <input type="tel" name="phone" placeholder='Phone' />
                    </div>
                    <div className="boxs">
                        <img src={bI} alt="" />
                        <input type="text" name="service needed" placeholder='Service You Need' />
                    </div>
                    <div className="boxsw" >
                        <img src={eI} alt="" />
                        <input type="text" name="notes" placeholder='Any Note For Us' />
                    </div>
                    <button type='submit'> GET AN APPOINTMENT </button>
                    <span>{result}</span>
                </form>

            </div>
        </div>
    )
}

export default Reserve
