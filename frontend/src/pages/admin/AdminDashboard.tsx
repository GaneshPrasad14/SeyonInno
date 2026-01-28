import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useToast } from '@/hooks/use-toast';
import { Trash2, Plus, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Project {
    _id: string;
    title: string;
    category: string;
    location: string;
    capacity: string;
    image: string;
}

const AdminDashboard = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [formData, setFormData] = useState({
        title: '',
        category: 'Residential',
        location: '',
        capacity: '',
        image: null as File | null
    });
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { toast } = useToast();
    const navigate = useNavigate();

    const fetchProjects = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/projects');
            setProjects(res.data);
        } catch (err) {
            console.error(err);
            toast({ title: "Error", description: "Failed to fetch projects", variant: "destructive" });
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/admin/login');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSelectChange = (value: string) => {
        setFormData({ ...formData, category: value });
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFormData({ ...formData, image: e.target.files[0] });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const data = new FormData();
        data.append('title', formData.title);
        data.append('category', formData.category);
        data.append('location', formData.location);
        data.append('capacity', formData.capacity);
        if (formData.image) {
            data.append('image', formData.image);
        }

        try {
            const token = localStorage.getItem('token');
            await axios.post('http://localhost:5000/api/projects', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'x-auth-token': token
                }
            });
            toast({ title: "Success", description: "Project added successfully" });
            setFormData({
                title: '',
                category: 'Residential',
                location: '',
                capacity: '',
                image: null
            });
            if (fileInputRef.current) fileInputRef.current.value = '';
            fetchProjects();
        } catch (err: any) {
            toast({
                title: "Error",
                description: err.response?.data?.msg || "Failed to add project",
                variant: "destructive"
            });
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this project?')) return;
        try {
            const token = localStorage.getItem('token');
            await axios.delete(`http://localhost:5000/api/projects/${id}`, {
                headers: { 'x-auth-token': token }
            });
            toast({ title: "Success", description: "Project deleted" });
            fetchProjects();
        } catch (err) {
            toast({ title: "Error", description: "Failed to delete project", variant: "destructive" });
        }
    };

    return (
        <div className="min-h-screen pt-24 pb-12 bg-secondary px-4">
            <div className="container mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold font-display text-foreground">Admin Dashboard</h1>
                    <Button variant="destructive" onClick={handleLogout} className="gap-2">
                        <LogOut className="w-4 h-4" /> Logout
                    </Button>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Add Project Form */}
                    <div className="lg:col-span-1">
                        <div className="bg-card p-6 rounded-xl shadow-md border border-border sticky top-24">
                            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Plus className="w-5 h-5 text-primary" /> Add New Project
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="title">Project Title</Label>
                                    <Input name="title" value={formData.title} onChange={handleChange} required />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="category">Category</Label>
                                    <Select value={formData.category} onValueChange={handleSelectChange}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select Category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Residential">Residential</SelectItem>
                                            <SelectItem value="Commercial">Commercial</SelectItem>
                                            <SelectItem value="Industrial">Industrial</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="location">Location</Label>
                                    <Input name="location" value={formData.location} onChange={handleChange} required />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="capacity">Capacity</Label>
                                    <Input name="capacity" value={formData.capacity} onChange={handleChange} required placeholder="e.g. 5kW" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="image">Project Image</Label>
                                    <Input type="file" ref={fileInputRef} onChange={handleFileChange} required accept="image/*" />
                                </div>

                                <Button type="submit" className="w-full solar-gradient text-primary-foreground">
                                    Add Project
                                </Button>
                            </form>
                        </div>
                    </div>

                    {/* Project List */}
                    <div className="lg:col-span-2">
                        <div className="grid md:grid-cols-2 gap-6">
                            {projects.map((project) => (
                                <div key={project._id} className="bg-card rounded-xl overflow-hidden shadow-sm border border-border group">
                                    <div className="relative aspect-video">
                                        <img
                                            src={`http://localhost:5000/uploads/${project.image}`}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute top-2 right-2">
                                            <Button
                                                variant="destructive"
                                                size="icon"
                                                className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                                                onClick={() => handleDelete(project._id)}
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="inline-block px-2 py-0.5 rounded-full bg-accent text-primary text-xs font-medium">
                                                {project.category}
                                            </span>
                                        </div>
                                        <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                                        <p className="text-sm text-muted-foreground">{project.location} • {project.capacity}</p>
                                    </div>
                                </div>
                            ))}
                            {projects.length === 0 && (
                                <p className="col-span-full text-center text-muted-foreground py-12">No projects yet.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
