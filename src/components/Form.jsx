import Input from './common/input/Input'
import Select from './common/select/Select'
import './formStyles.scss'

const valueArr = ['Developer', 'Designer', 'CEO', "Manager"]

export default function Form({
    onChangeNameHandler, 
    userName, 
    email, 
    onChangeEmailHandler, 
    password, 
    onChangePasswordHandler, 
    onBlurEmailValidation, 
    emailErr,
    passwordErr,
    onBlurPasswordValidation,
    onChangePositionHandler,
    position,
    onSubmitHandler
}) {
    return(
        <form className="form" onSubmit={onSubmitHandler}>
            <h1 className="form-title"> Let's set up your account </h1>
            <p className="form-paragraph"> Already have an account? <a href="/#">Sign in</a></p>
            <Input
                className="form-input-margin"
                isValid = {true}
                width="100%"
                label="Your name"
                onChange={onChangeNameHandler}
                value={userName}
            />
            <Input
                className="form-input-margin"
                isValid={!emailErr}
                width="100%"
                label="Email address"
                onChange={onChangeEmailHandler}
                value={email}
                onBlur={onBlurEmailValidation} 
            />
            {emailErr &&
            <p className="form-message form-error"> {emailErr} </p>}
            <Select 
                className="form-input-margin" 
                width="100%" 
                label="I would describe my user type as" 
                valueArr={valueArr} 
                onChange={onChangePositionHandler}
            />
            <Input
                className="form-input-margin"
                isValid = {!passwordErr}
                width="100%"
                label="Password"
                onChange={onChangePasswordHandler}
                value={password}
                type="password"
                onBlur={onBlurPasswordValidation}
            />
            <p className="form-message"> Minimum 8 characters </p>
            <button className="form-button" disabled={!email || password.length < 8 || !position || !userName || emailErr} > 
                Next 
            </button>
            <p className="form-privatePolicy"> 
                By clicking the “Next” button, you agree to creating a free account, and to 
                <a href="/#"> Terms of Service</a> and <a href="/#">Privacy Policy</a>. 
            </p>
        </form>
    )
}