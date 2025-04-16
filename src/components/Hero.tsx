
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center py-20 overflow-hidden">
      <div 
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-20 dark:opacity-10"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=1920&q=80')`,
          backgroundPosition: "center 30%"
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/0 via-background/50 to-background" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="space-y-2">
            <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
              Sejak 2014
            </span>
            <h1 className="h1 text-balance">
              Selamat datang di{" "}
              <span className="text-primary">Odading Mang Abo</span>
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-2xl text-balance">
            Nikmati cita rasa autentik dari Odading Mang Abo, di mana setiap gigitan menghadirkan kenikmatan yang tak terlupakan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg" className="rounded-full px-6 group">
              <Link to="/products">
                Lihat Produk
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-6">
              <Link to="/contact">
                Hubungi Kami
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
