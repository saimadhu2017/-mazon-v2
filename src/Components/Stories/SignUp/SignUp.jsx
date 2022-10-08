import './SignUp.css';

function SignUp() {
    return (
        <div className='cs_SignUp'>
            <h3 className='display-7 cs_heading'>Sign Up</h3>
            <form className='cs_form'>
                <div className='cs_input'>
                    <label className='form-label cs_label'>First Name</label>
                    <input className='form-control' type='text' />
                </div>
                <div className='cs_input'>
                    <label className='form-label cs_label'>Last Name</label>
                    <input className='form-control' type='text' />
                </div>
                <div className='cs_input'>
                    <label className='form-label cs_label'>Email</label>
                    <input className='form-control' type='text' />
                </div>
                <div className="cs_input">
                    <label className='form-label cs_label'>Password</label>
                    <input className='form-control' type='password' />
                </div>
                <div className="cs_input">
                    <label className='form-label cs_label'>Confirm Password</label>
                    <input className='form-control' type='password' />
                </div>
                <div className='cs_submit'>
                    <button className='btn btn-success'>Sign up</button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;
