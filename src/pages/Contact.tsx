
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Pesan berhasil dikirim! Kami akan menghubungi Anda segera.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="h1">Hubungi Kami</h1>
            <p className="text-muted-foreground mt-4 max-w-2xl text-lg">
              Punya pertanyaan atau ingin memesan? Jangan ragu untuk menghubungi kami.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Info + Form Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="h3">Informasi Kontak</h2>
                <p className="text-muted-foreground">
                  Kami siap melayani Anda. Silakan hubungi kami melalui salah satu kontak di bawah ini.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2 mt-1">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Alamat</h3>
                    <p className="text-muted-foreground">
                      Kp. Bakomsari - Kota Bogor Selatan
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2 mt-1">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Telepon</h3>
                    <p className="text-muted-foreground">
                      <a href="https://wa.me/6285692369039" className="hover:text-primary transition-colors">
                        +62 856 9236 9039
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2 mt-1">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:odadingmangabo@gmail.com" className="hover:text-primary transition-colors">
                        odadingmangabo@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-2xl overflow-hidden h-60 md:h-72 shadow-md border border-border animate-fade-in opacity-0" style={{ animationDelay: "200ms" }}>
                <iframe 
                  src="https://maps.app.goo.gl/yd9c2ivp6WXHF9828" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Odading Mang Abo location"
                />
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-2xl animate-fade-in opacity-0" style={{ animationDelay: "300ms" }}>
              <h2 className="h3 mb-6">Kirim Pesan</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-medium">
                    Nama Lengkap
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Masukkan nama lengkap"
                    required
                    className="rounded-lg"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Masukkan alamat email"
                    required
                    className="rounded-lg"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="font-medium">
                    Pesan
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tulis pesan Anda di sini..."
                    required
                    className="min-h-[120px] rounded-lg resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full rounded-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
