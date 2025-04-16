
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="h1">Tentang Kami</h1>
            <p className="text-muted-foreground mt-4 max-w-2xl text-lg">
              Mengenal lebih dekat Odading Mang Abo, perjalanan kami, dan nilai-nilai yang kami pegang.
            </p>
          </div>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="space-y-6">
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Sejarah Kami
                </span>
                <h2 className="h2">Cerita Odading Mang Abo</h2>
                <p className="text-muted-foreground">
                  Odading Mang Abo dimulai pada tahun 2014 sebagai usaha kecil-kecilan di Kota Bogor. Berawal dari kecintaan terhadap makanan tradisional Indonesia, pendiri kami memutuskan untuk membuka usaha makanan yang menyajikan odading, cakwe, dan pisang molen dengan resep rahasia keluarga.
                </p>
                <p className="text-muted-foreground">
                  Seiring berjalannya waktu, Odading Mang Abo semakin dikenal oleh masyarakat Bogor dan sekitarnya berkat kualitas produk dan pelayanan yang kami berikan. Komitmen kami untuk selalu menggunakan bahan-bahan berkualitas dan menjaga kebersihan dalam proses pembuatan menjadi kunci kesuksesan kami hingga saat ini.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/0 z-10" />
                <img
                  src="https://i0.wp.com/resepkoki.id/wp-content/uploads/2018/04/Resep-Odading.jpg?fit=1481%2C1144&ssl=1"
                  alt="Odading"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="glass-card p-8 rounded-2xl animate-fade-in opacity-0" style={{ animationDelay: "100ms" }}>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold">V</span>
                </div>
                <h3 className="h3">Visi</h3>
                <p className="text-muted-foreground">
                  Menjadi penyedia jajanan tradisional terkemuka di Bogor, dengan rasa yang autentik dan kualitas terbaik.
                </p>
              </div>
            </div>
            <div className="glass-card p-8 rounded-2xl animate-fade-in opacity-0" style={{ animationDelay: "300ms" }}>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold">M</span>
                </div>
                <h3 className="h3">Misi</h3>
                <p className="text-muted-foreground">
                  Memberikan pengalaman kuliner yang memuaskan bagi setiap pelanggan melalui produk yang berkualitas dan pelayanan yang ramah.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Menggunakan bahan-bahan berkualitas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Menjaga kebersihan dalam proses produksi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Memberikan pelayanan yang ramah dan cepat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Melestarikan resep tradisional</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="h2">Nilai-Nilai Kami</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              Nilai-nilai yang menjadi pondasi dalam setiap langkah bisnis kami.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-2xl border border-border p-6 hover:shadow-md transition-all duration-300 animate-fade-in opacity-0" style={{ animationDelay: "100ms" }}>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary font-semibold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Kualitas</h3>
              <p className="text-muted-foreground">
                Kami selalu mengutamakan kualitas dalam setiap aspek, dari pemilihan bahan hingga proses produksi.
              </p>
            </div>
            
            <div className="bg-background rounded-2xl border border-border p-6 hover:shadow-md transition-all duration-300 animate-fade-in opacity-0" style={{ animationDelay: "200ms" }}>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary font-semibold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Integritas</h3>
              <p className="text-muted-foreground">
                Kami menjalankan bisnis dengan kejujuran, transparansi, dan bertanggung jawab pada setiap keputusan.
              </p>
            </div>
            
            <div className="bg-background rounded-2xl border border-border p-6 hover:shadow-md transition-all duration-300 animate-fade-in opacity-0" style={{ animationDelay: "300ms" }}>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary font-semibold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Pelayanan</h3>
              <p className="text-muted-foreground">
                Kami berkomitmen untuk memberikan pelayanan terbaik dan pengalaman yang memuaskan bagi setiap pelanggan.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="h3 max-w-2xl">
              Ingin mencoba kelezatan produk Odading Mang Abo?
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              Kunjungi toko kami di Kp. Bakomsari, Kota Bogor Selatan atau hubungi kami untuk informasi pemesanan.
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
