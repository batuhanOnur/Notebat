import RegisterForm from "../components/forms/RegisterForm"

const RegisterPage: React.FC = () => {

    return (
        <div className="bg-mainbackground min-h-screen w-full flex flex-col justify-center items-center relative">
            <div>
              <RegisterForm />
            </div>
        </div>
    )
}

export default RegisterPage