import RegisterSection from '../RegisterPage/RegisterSection'
import LogoSection from '../RegisterPage/LogoSection'

const Register = () => {

    return (
        <main className="main">
            <div className='container flex gap-lg  md:mt-80'>
                <RegisterSection />

                <LogoSection />
            </div>
        </main>
    );
};

export default Register;