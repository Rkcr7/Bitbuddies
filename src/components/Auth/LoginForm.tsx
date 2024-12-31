import React, { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';
import { signIn } from '../../lib/auth';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    const isEmail = identifier.includes('@');
    const signInProps = {
      password,
      remember,
      ...(isEmail ? { email: identifier } : { username: identifier }),
    };

    try {
      await signIn(signInProps, navigate);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto p-8">
      <h2 className="text-2xl font-bold mb-6">Welcome Back!</h2>
      {error && (
        <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded-lg mb-4">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            Email or Username
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-black/30 rounded-lg focus:ring-2 focus:ring-accent-blue"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-black/30 rounded-lg focus:ring-2 focus:ring-accent-blue"
              required
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="text-accent-blue focus:ring-accent-blue"
            />
            <span className="text-sm">Remember me</span>
          </label>
        </div>
        <Button
          type="submit"
          variant="primary"
          className="w-full"
          {...(loading ? { loading: 'true' } : {})}
        >
          Sign In
        </Button>
      </form>
    </Card>
  );
};

export default LoginForm;