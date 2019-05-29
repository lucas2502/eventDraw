import React from "react";

import Colors from '../../styles/settings/colors'
import Spacing from '../../styles/settings/spacing'
import Reset from '../../styles/generic/reset'
import Base from '../../styles/base'

import Size from '../../styles/settings/size'

import WrapperForm from "../../objects/WrapperForm";
import FormLogin from "../../components/FormLogin";


const Login = () => (
    <>
        <Colors />
        <Size />
        <Spacing />
        <Reset />
        <Base />
        
        <WrapperForm>
            <FormLogin />
        </WrapperForm>
    </>
)

export default Login;