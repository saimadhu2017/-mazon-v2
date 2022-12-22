import './DescribeSignInSignUp.css';
import Typewriter from 'typewriter-effect';

function DescribeSignInSignUp(props) {
    const options = {
        strings: `Hi, There Welcome to the ${props.pageName} page`,
        autoStart: true,
        loop: true
    }
    return (
        <div className='cs_describeSignInSignUp'>
            <div className="cs_square">
                <span className='cs_text_inside_square'>
                    <Typewriter
                        options={options}
                    />
                </span>
            </div>
        </div>
    );
}

export default DescribeSignInSignUp;
