import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import {SignInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            email:'',
            password:''
        }
    }

    handleSubmit = (event) =>
    {
        event.preventDefault();
        this.setState({email:'',password:''});   
    }
    handleChange = (event) =>
    {
        const {name,value} = event.target;

        this.setState({[name]:value});
    }
    render()
    {
        return(
            <div className="sign-in">
                
                <h2 className="title">I already have an account</h2>
                
                <span>Sign in with your email and password</span>
               
                <form onSubmit={this.handleSubmit}>
                    
                    <FormInput  
                    type="email" 
                    name="email" 
                    label="Email"
                    value={this.state.email} 
                    handleChange={this.handleChange} 
                    required />
                    
                    <FormInput  
                    type="password" 
                    name="password"
                    label="Password" 
                    value={this.state.password} 
                    onChange={this.handleChange} 
                    required />
                  
                  <div class="buttons">

                  <CustomButton type="submit">Sign in</CustomButton>

                  <CustomButton onClick={SignInWithGoogle} isGoogleSignIn >{' '} Sign in with Google {' '}</CustomButton>

                  </div>
                    
                </form>
            </div>
        );
    }
}

export default SignIn;