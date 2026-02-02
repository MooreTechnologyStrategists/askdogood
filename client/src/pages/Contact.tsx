import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:askdogood@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    toast.success("Opening your email client...");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            {/* Image */}
            <div className="mb-8">
              <img 
                src="https://askdogoodassets.blob.core.windows.net/images/Contact-DoGood.webp" 
                alt="Contact illustration" 
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions, feedback, or just want to share your story? I'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Let's Connect
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're on your own journey, have questions about my experiences, 
                or want to collaborate, I'm here to listen and support.
              </p>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <MessageCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Share Your Story</CardTitle>
                        <CardDescription>
                          I read every message and respond personally
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Email Me Directly</CardTitle>
                        <CardDescription>
                          <a href="mailto:askdogood@gmail.com" className="text-primary hover:underline">
                            askdogood@gmail.com
                          </a>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7a1 1 0 00.9 1.45h12.2a1 1 0 00.9-1.45L17 13M7 13V6a1 1 0 011-1h5a1 1 0 011 1v7" /></svg>
                      </div>
                      <div>
                        <CardTitle className="text-lg">Call or Text</CardTitle>
                        <CardDescription>
                          <a href="tel:+1234567890" className="text-primary hover:underline">(202) 420-0682</a>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Send className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Quick Response</CardTitle>
                        <CardDescription>
                          I typically respond within 24-48 hours
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me what's on your mind..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Looking for Something Specific?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Check out my blog for in-depth articles on health, recovery, and personal growth, 
            or explore my journey timeline to see how far I've come.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="outline" size="lg" asChild>
              <a href="/blog">Browse Blog Posts</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/journey">View My Journey</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}