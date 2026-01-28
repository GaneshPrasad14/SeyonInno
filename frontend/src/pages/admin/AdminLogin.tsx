import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const AdminLogin = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const navigate = useNavigate();
    const { toast } = useToast();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', formData);
            localStorage.setItem('token', res.data.token);
            navigate('/admin/dashboard');
            toast({
                title: "Success",
                description: "Logged in successfully",
            });
        } catch (err: any) {
            toast({
                title: "Error",
                description: err.response?.data?.msg || "Login failed",
                variant: "destructive"
            });
        }
    };

    return (
        <div className="min-h-screen pt-24 pb-12 flex items-center justify-center bg-secondary px-4">
            <div className="w-full max-w-md bg-card p-8 rounded-xl shadow-lg border border-border">
                <h1 className="text-2xl font-bold mb-6 text-center text-foreground">Admin Login</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="username">Email</Label>
                        <Input
                            id="username"
                            name="username"
                            type="email"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <Button type="submit" className="w-full solar-gradient text-primary-foreground">
                        Login
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
