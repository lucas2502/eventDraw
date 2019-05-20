import React from 'react';
import LoginWrapper from '../../objects/LoginWrapper';
import FormLogin from '../../componets/FormLogin';
import InputLogin from '../../objects/InputLogin';
import LabelForm from '../../objects/LabelLogin';
const Login = () => (

        <LoginWrapper>
            <FormLogin>
                <LabelForm>Usuário:</LabelForm>
                <InputLogin
                        type="text"
                        placeholder="nome.sobrenome"
                />
                <LabelForm>Senha:</LabelForm>
                <InputLogin
                        type="password"
                        placeholder="*******"
                />
                <button>ENTRAR</button>
            </FormLogin>
        </LoginWrapper>

)
    
export default Login;


