import React from 'react'
import "./Form.css"
import { Link } from 'react-router-dom'

const Form = ({handleChange, handleSubmit}) => {
    return (
        <>
        
        <div className='mainForm'>
            <form className='container frm'>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">Name</label>
                        <input onChange={handleChange} type="text" name='Name' className="form-control" id="inputEmail4" placeholder="Name" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputPassword4">Last Name</label>
                        <input onChange={handleChange} type="text" name='Lastname' className="form-control" id="inputPassword4" placeholder="Last Name" />
                    </div>
                </div>
                <div className="form-group col-md-6">
                    <label for="inputAddress">Address</label>
                    <input onChange={handleChange} type="text" name='Address1' className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div className="form-group col-md-6">
                    <label for="inputAddress2">Address 2</label>
                    <input onChange={handleChange} type="text" name='Address2' className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input onChange={handleChange} type="text" name='City' className="form-control" id="inputCity" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputCity">Skills</label>
                        <input onChange={handleChange} type="text" name='Skills' className="form-control" id="inputskills" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputCity">Eaducation</label>
                        <input onChange={handleChange} type="text" name='Eaducation' className="form-control" id="inputEaducation" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputCity">Experience</label>
                        <input onChange={handleChange} type="text" name='Experience' className="form-control" id="inputEaducation" />
                    </div>
                </div>
                <button onClick={handleSubmit} type="submit" className="btn btn-primary mt-3">Submitt</button>
            </form>
        </div>
        <Link to="/cv">
        <button className='checkcv btn btn-danger'>CheckCv</button>
        </Link>
        </>
    )
}

export default Form