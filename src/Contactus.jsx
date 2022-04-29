import React from 'react'

const Contactus = () => {

    const Submit=()=>{

    }
    return (
        <>
       <div className="container-fluid ">
            <div className="row">
                <div className="col-12 mx-auto">
                    <form action="">
                        <div className="input-field">
                            <div className="input-user">
                            <input type="text" name="username" id="username" placeholder='Enter Full Name' />
                            </div>
                            <div className="input-number">
                                <input type="tel" name="number" id="number" placeholder='Enter Mobile Number' />
                            </div>
                            <button className="btn btn-success btn-form" onClick={Submit}>Contact Us</button>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default Contactus