import React, { FunctionComponent} from 'react';
import GoogleLogin from 'react-google-login';

const Login: FunctionComponent = () => {
    const responseGoogle = (response: any) => {
        console.log(response);
    }
    return (
        <GoogleLogin
            clientId={process.env.GOOGLE_CLIENT_ID as string}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    );
}

export default Login;
