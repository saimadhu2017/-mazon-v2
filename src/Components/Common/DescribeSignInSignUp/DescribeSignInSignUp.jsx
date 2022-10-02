import './DescribeSignInSignUp.css';
import Typewriter from 'typewriter-effect';

function DescribeSignInSignUp(props) {
    return (
        <div className='cs_describeSignInSignUp'>
            <div className="cs_square">
                <span className='cs_text_inside_square'>
                    <Typewriter
                        options={{
                            strings: `Hi, There Welcome to the ${props.pageType} page`,
                            autoStart: true,
                            loop: true
                        }}
                    />
                </span>
            </div>
        </div>
    );
}

export default DescribeSignInSignUp;
