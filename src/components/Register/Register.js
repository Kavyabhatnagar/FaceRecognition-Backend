import React from 'react'
class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
            RegisterName:'',
            RegisterEmail:'',
            RegisterPassword:''
        }
    }
    onRegisterEmail=(event)=>{
        this.setState({RegisterEmail:event.target.value})
    }
    onRegisterPassword=(event)=>{
        this.setState({RegisterPassword:event.target.value})
    }
    onRegisterName=(event)=>{
        this.setState({RegisterName:event.target.value})
    }
    onSubmitRegister=()=>{
        fetch('http://localhost:3000/register',{
            method:'post',
            headers:{'Content-type':'Application/json'},
            body: JSON.stringify({
            name:this.state.RegisterName,
            email:this.state.RegisterEmail,
            password:this.state.RegisterPassword})
        })
        .then(response=>response.json())
        .then(user=>{
            if(user)
            {
                this.props.loaduser(user);
                this.props.onRoutChange('home');
            }
        })
        // this.props.onRoutChange('home');
    }

    render(){
        return(
            <>
            <article className="br-3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                    <main className="pa4 black-80">
                    <form className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" For="name">Name</label>
                            <input onChange={this.onRegisterName} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" For="email-address">Email</label>
                            <input onChange={this.onRegisterEmail} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" For="password">Password</label>
                            <input onChange={this.onRegisterPassword} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                        </div>
                        </fieldset>
                        <div className="">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        onClick={this.onSubmitRegister}
                        type="submit"
                         value="Register"/>
                        </div>
                    </form>
                    </main>
                    </article>
            </>
        )

    }
    
}
export default Register;