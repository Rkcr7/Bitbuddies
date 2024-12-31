import React, { useState } from 'react';
import { AuthLayout } from '../components/Auth/AuthLayout';
import LoginForm from '../components/Auth/LoginForm';
import RegisterForm from '../components/Auth/RegisterForm';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <AuthLayout
      title={isLogin ? 'Welcome Back!' : 'Create Account'}
      subtitle={
        isLogin
          ? "Don't have an account? Sign up"
          : 'Already have an account? Sign in'
      }
    >
      {isLogin ? <LoginForm /> : <RegisterForm />}
      <div className="mt-6 text-center">
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-accent-blue hover:underline"
        >
          {isLogin ? 'Need an account?' : 'Already have an account?'}
        </button>
      </div>
    </AuthLayout>
  );
};

export { LoginPage };