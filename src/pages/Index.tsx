import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const featuredProducts = [
  {
    id: "odading",
    name: "Odading",
    description: "Roti goreng manis dengan tekstur lembut dan renyah di luar.",
    price: "Rp 1.000",
    image: "https://i0.wp.com/resepkoki.id/wp-content/uploads/2018/04/Resep-Odading.jpg?fit=1481%2C1144&ssl=1",
  },
  {
    id: "cakwe",
    name: "Cakwe",
    description: "Cakwe kenyal yang sempurna untuk sarapan atau cemilan.",
    price: "Rp 1.000",
    image: "https://shopee.co.id/inspirasi-shopee/wp-content/uploads/2022/03/resep-cakwee.webp",
  },
  {
    id: "pisang-molen",
    name: "Pisang Molen",
    description: "Pisang molen renyah dengan isian pisang manis yang menggugah selera.",
    price: "Rp 1.000",
    image: "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/07/14054048/Cocok-untuk-Camilan-Ini-Resep-Pisang-Molen-Renyah-dan-Manis-.jpg.webp",
  },
  {
    id: "onde-onde",
    name: "Onde-onde",
    description: "Bola ketan renyah dan manis dengan isian kacang hijau manis dibalut dengan biji wijen.",
    price: "Rp 1.000",
    image: "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/6/3/869d23d7-5b24-44a6-b1b1-2fee610c1070.jpg",
  },
];

const testimonials = [
  {
    quote: "Rasanya enak banget! Odading Mang Abo selalu jadi pilihan saya buat sarapan.",
    author: "Ahmad Suparman",
    role: "Pelanggan Setia",
  },
  {
    quote: "Cakwenya kenyal dan enak, harganya juga terjangkau. Recommended!",
    author: "Siti Nurhaliza",
    role: "Mahasiswa",
  },
  {
    quote: "Pisang molennya juara, pisangnya manis dan kulitnya renyah. Perfect!",
    author: "Budi Santoso",
    role: "Pekerja Kantoran",
  },
  {
    quote: "Onde-ondenya lezat, kacang hijaunya pas manis dan kulitnya renyah. Puas banget!",
    author: "Diana Putri",
    role: "Food Blogger",
  },
];

export default function Index() {
  return (
    <div className="w-full">
      <Hero />
      
      {/* Featured Products Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="h2">Produk Unggulan</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              Nikmati produk unggulan kami yang dibuat dengan bahan berkualitas dan resep rahasia sejak 2014.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                {...product}
                className={`animate-fade-in opacity-0`}
                style={{ animationDelay: `${index * 150}ms` }}
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Button asChild variant="outline" size="lg" className="rounded-full px-6 group">
              <Link to="/products">
                Lihat Semua Produk
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 md:py-32 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                Tentang Kami
              </span>
              <h2 className="h2">Kisah Di Balik Kelezatan Odading Mang Abo</h2>
              <p className="text-muted-foreground">
                Sejak 2014, Odading Mang Abo berkomitmen untuk menyediakan makanan khas yang tidak hanya enak, tetapi juga berkualitas. Kami telah melayani pelanggan dengan penuh cinta dan dedikasi.
              </p>
              <Button asChild className="rounded-full px-6 group">
                <Link to="/about">
                  Baca Selengkapnya
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/0 z-10" />
              <img
                src="https://cdn0-production-images-kly.akamaized.net/bg99RqDUFpEuK2u711FVcSiyx6Q=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3242008/original/078997000_1600417527-KUE_ODADING.jpg"
                alt="Odading"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="h2">Kata Pelanggan</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              Dengarkan apa yang dikatakan pelanggan setia kami tentang produk-produk Odading Mang Abo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                {...testimonial}
                className="animate-fade-in opacity-0"
                style={{ animationDelay: `${index * 150}ms` }}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="h3 max-w-2xl">
              Tertarik untuk memesan? Hubungi kami sekarang untuk informasi lebih lanjut
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              Kami menerima pesanan untuk acara khusus, pesta, atau hanya untuk camilan sehari-hari.
            </p>
            <Button asChild size="lg" className="mt-8 rounded-full px-6">
              <Link to="/contact">
                Hubungi Kami
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
