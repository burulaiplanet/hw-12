import React, { useState, useEffect } from 'react';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
//debouncing, debounce

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState(''); // write some email
  const [emailIsValid, setEmailIsValid] = useState(); // check is email valid or not
  const [enteredPassword, setEnteredPassword] = useState(''); // write some password
  const [passwordIsValid, setPasswordIsValid] = useState(); // check is password valid or not
  const [formIsValid, setFormIsValid] = useState(false); // email and password are valid

  useEffect(() => {
    const timer = setTimeout(() => {
      setFormIsValid(enteredEmail.includes('@') && enteredPassword.trim().length > 6);
      console.log('changed');
    }, 3000);
    // clean up function
    return () =>    {
      clearTimeout(timer);//ar bir basylgan saiyn eseptebei eski taimerdi ochurup saldy bir ele jolu proverka kylyp koidu
    };
   
  }, [enteredEmail, enteredPassword]);//enteredEmail, enteredPassword  ozgorgon saiyn useEffect da ozgorot,egerde pustoi ele massiv bolso al emne ozgorup jatkanyn bilbei bir ele jolu ishteit

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };


  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };



  const validateEmailHandler = () => { //inputtun korunushuno joop beret
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {//inputtun korunushuno joop beret
    setPasswordIsValid(enteredPassword.trim().length > 6);



  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div className={`${classes.control} ${emailIsValid === false ? classes.invalid : ''}`}>
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}//focus ochkondo ishteit,email terildibi jokbu oshonu teksheret
          />
        </div>
        <div className={`${classes.control} ${passwordIsValid === false ? classes.invalid : ''}`}>
          
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}//focus ochkondo ishteit,parol' terildibi jokbu oshonu teksheret
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>//dannylar tuura terilgende gana knopka ishteit
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};
export default Login;