import React from 'react';
import '../styles.css'; // Import the CSS
import { Link } from 'react-router-dom';

const GetInTouchForm = () => (
  <div className="form-wrapper">
    <div className="form-container">
      <h2>GET IN TOUCH</h2>
      <form>
        <div className="form-row">
          <input type="text" placeholder="Name" required />
          <input type="text" placeholder="Phone" required />
        </div>
        <div className="form-row">
          <input type="email" placeholder="Email" required />
          <select required>
            <option value="">What are you celebrating?</option>
            <option value="Birthday">Birthday</option>
            <option value="Wedding">Wedding</option>
          </select>
        </div>
        <div className="form-row">
          <input type="number" placeholder="Number Of People" required />
          <select required>
            <option value="">Location Preferred</option>
            <option value="Beach">Beach</option>
            <option value="Mountain">Mountain</option>
          </select>
        </div>
        <div className="form-row">
          <input type="date" placeholder="Tentative Check In" required />
          <select required>
            <option value="">What is Your Per Person Budget?</option>
            <option value="5000">₹5000</option>
            <option value="10000">₹10000</option>
          </select>
        </div>

           <div className='form-wrap'>
    <div>
    <label className='additional-assistance'>Would you require additional assistance for decor/set-ups?</label>
        <div className="radio-group">

            <div>
            <input className='radio-input' type="radio" name="decor" value="Yes" /> 
            <label>Yes</label>
            </div>

      
         <div>
         <input className='radio-input' type="radio" name="decor" value="No" /> 
         <label>No</label>
         </div>
       
          
        </div>
    </div>
       

         <div>
        <label className='additional-assistance'>Your Plan *</label>
        <div className="radio-group">

<div>
<input className='radio-input' type="radio" name="decor" value="Yes" /> 
<label>Overnight Stay</label>
</div>


<div>
<input className='radio-input' type="radio" name="decor" value="No" /> 
<label>Day Event</label>
</div>


</div>
        </div>

        </div>

        <input type="text" placeholder="If yes, please specify." />

        <p>By clicking on submit you agree to our privacy policy</p>

        <Link to='/insert'>
        <button type="submit" className="submit-button">Request a Quote</button>
        <h1>Hello World</h1>
        </Link>
      </form>
    </div>
  </div>
);

export default GetInTouchForm;
