import './SignIn.css';

function SignIn() {
    return (
        <div className='cs_SignIn'>
            <h3 className='display-7 cs_heading'>Sign In</h3>
            <form>
                <label className='form-label'>Email</label>
                <input className='form-control' type='text' />
                <label className='form-label cs_label'>Password</label>
                <input className='form-control' type='password' />
                <div className='cs_submit'>
                    <button className='btn btn-success'>Login</button>
                </div>
            </form>
        </div>
    );
}

export default SignIn;
