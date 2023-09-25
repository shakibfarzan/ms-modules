import React from 'react';
import { Login as MSLogin } from '@microsoft/mgt-react';
const Login: React.FC = () => {
    return (
        <header>
            <MSLogin />
        </header>
    );
} 


export default Login;