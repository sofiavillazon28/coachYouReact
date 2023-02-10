import LoginSection from '../LoginPage/LoginSection'
import LogoSection from '../LoginPage/LogoSection'

const Login = () => {

    return (
        <main className="main">
            <div className='container flex gap-lg md:mt-80'>
                <LoginSection />

                <LogoSection />
            </div>
        </main>
    );
};

export default Login;