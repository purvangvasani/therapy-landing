"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ShineBorder } from "@/components/magicui/shine-border";
import { useTheme } from "next-themes";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Mail } from 'lucide-react';

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    subject: z.string().min(5, {
        message: "Subject must be at least 5 characters.",
    }),
    description: z.string().min(10, {
        message: "Description must be at least 10 characters.",
    }),
});

type FormValues = z.infer<typeof formSchema>;

export function ShineBorderDemo2() {
    const theme = useTheme();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormValues) => {
        try {
            // Here you would typically send the data to your API
            console.log('Form submitted:', data);
            toast.success('Message sent successfully!');
            reset();
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error('Failed to send message. Please try again.');
        }
    };

    return (
        <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center overflow-hidden mb-12">
                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                    Contact Us
                </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto px-4 sm:px-6">
                {/* Contact Form */}
                <Card className="relative overflow-hidden h-full w-full">
                    <ShineBorder shineColor={theme.theme === "dark" ? "white" : "black"} />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <CardContent className="space-y-4 pt-6">
                            <div className="grid gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Name *</Label>
                                    <Input
                                        id="name"
                                        placeholder="Your name"
                                        {...register('name')}
                                        className={errors.name ? 'border-red-500' : ''}
                                    />
                                    {errors.name && (
                                        <p className="text-sm text-red-500">{errors.name.message}</p>
                                    )}
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email *</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="your.email@example.com"
                                        {...register('email')}
                                        className={errors.email ? 'border-red-500' : ''}
                                    />
                                    {errors.email && (
                                        <p className="text-sm text-red-500">{errors.email.message}</p>
                                    )}
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="subject">Subject *</Label>
                                    <Input
                                        id="subject"
                                        placeholder="How can we help you?"
                                        {...register('subject')}
                                        className={errors.subject ? 'border-red-500' : ''}
                                    />
                                    {errors.subject && (
                                        <p className="text-sm text-red-500">{errors.subject.message}</p>
                                    )}
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="description">Message *</Label>
                                    <Textarea
                                        id="description"
                                        placeholder="Please provide details about your inquiry..."
                                        rows={5}
                                        {...register('description')}
                                        className={errors.description ? 'border-red-500' : ''}
                                    />
                                    {errors.description && (
                                        <p className="text-sm text-red-500">{errors.description.message}</p>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter style={{ padding: '1rem' }}>
                            <Button type="submit" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </Button>
                        </CardFooter>
                    </form>
                </Card>

                {/* Contact Information */}
                <div className="space-y-6 sm:space-y-8">
                    <Card className="relative overflow-hidden h-full p-4 sm:p-6 md:p-8">
                        <ShineBorder shineColor={theme.theme === "dark" ? "white" : "black"} />
                        <div className="space-y-4 sm:space-y-6">
                            <h3 className="text-2xl font-bold text-foreground">Get in Touch</h3>
                            <p className="text-muted-foreground">
                                Have questions, feedback, or just want to say hello? <br />
                                We’re always here to listen — just like our app.
                            </p>

                            <div className="space-y-6 pt-4">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                                        <Mail className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Email</h4>
                                        <a href="mailto:info@mytherapy.co.in" className="text-primary hover:text-primary transition-colors break-all" target="_blank" rel="noopener noreferrer">
                                            info@mytherapy.co.in
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                                        <Mail className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Email</h4>
                                        <a href="mailto:support@mytherapy.co.in" className="text-primary hover:text-primary transition-colors break-all" target="_blank" rel="noopener noreferrer">
                                            support@mytherapy.co.in
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4">
                                {/* <h4 className="font-medium mb-3">Follow Us</h4>
                                <div className="flex space-x-4 justify-center sm:justify-start">
                                    <a href="#" className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-full hover:bg-primary/10" aria-label="
Facebook">
                                        <Facebook className="h-5 w-5" />
                                    </a>
                                    <a href="#" className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-full hover:bg-primary/10" aria-label="
Twitter">
                                        <Twitter className="h-5 w-5" />
                                    </a>
                                    <a href="#" className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-full hover:bg-primary/10" aria-label="
Instagram">
                                        <Instagram className="h-5 w-5" />
                                    </a>
                                    <a href="#" className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-full hover:bg-primary/10" aria-label="
LinkedIn">
                                        <Linkedin className="h-5 w-5" />
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
