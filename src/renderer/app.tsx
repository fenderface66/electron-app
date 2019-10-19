import * as React from 'react';
import GoogleLogin from 'react-google-login';

export class App extends React.Component<undefined, undefined> {
  responseGoogle(response: any) {
    console.log(response);
  }
  render() {
      console.log(process.env.GOOGLE_CLIENT_ID);
    return (
      <div>
        <GoogleLogin
            clientId={process.env.GOOGLE_CLIENT_ID as string}
            buttonText="Login"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
      </div>
    );
  }
}

export default App;
