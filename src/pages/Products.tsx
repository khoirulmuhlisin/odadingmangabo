
import { ProductCard } from "@/components/ProductCard";

const products = [
  {
    id: "odading",
    name: "Odading",
    description: "Roti goreng manis dengan tekstur lembut dan renyah di luar. Odading kami dibuat dengan tepung berkualitas dan digoreng hingga keemasan sempurna.",
    price: "Rp 1.000",
    image: "https://i0.wp.com/resepkoki.id/wp-content/uploads/2018/04/Resep-Odading.jpg?fit=1481%2C1144&ssl=1",
    longDescription: "Odading adalah roti goreng manis khas Sunda yang sangat populer di Indonesia, terutama di daerah Jawa Barat. Kami membuat odading dengan bahan-bahan pilihan dan resep rahasia yang telah diturunkan dari generasi ke generasi. Teksturnya yang renyah di luar dan lembut di dalam membuat odading ini sangat digemari oleh berbagai kalangan."
  },
  {
    id: "cakwe",
    name: "Cakwe",
    description: "Cakwe kenyal yang sempurna untuk sarapan atau cemilan. Cakwe kami dibuat segar setiap hari untuk menjaga kualitas dan rasanya.",
    price: "Rp 1.000",
    image: "https://shopee.co.id/inspirasi-shopee/wp-content/uploads/2022/03/resep-cakwee.webp",
    longDescription: "Cakwe adalah makanan yang berasal dari Tiongkok yang telah menjadi bagian dari kuliner Indonesia. Kami membuat cakwe dengan teknik tradisional untuk memastikan teksturnya kenyal dan gurih. Cakwe kami dibuat dari adonan tepung yang difermentasi, kemudian digoreng hingga keemasan, sehingga menghasilkan cakwe yang lezat dan nikmat."
  },
  {
    id: "pisang-molen",
    name: "Pisang Molen",
    description: "Pisang molen renyah dengan isian pisang manis yang menggugah selera. Dibuat dengan pisang pilihan dan kulit yang crispy.",
    price: "Rp 1.000",
    image: "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/07/14054048/Cocok-untuk-Camilan-Ini-Resep-Pisang-Molen-Renyah-dan-Manis-.jpg.webp",
    longDescription: "Pisang Molen adalah camilan tradisional Indonesia yang terbuat dari pisang yang dibungkus dengan adonan pastry dan digoreng hingga keemasan. Kami menggunakan pisang raja pilihan yang manis dan kulit pastry yang dibuat dengan teliti untuk menghasilkan pisang molen yang renyah di luar dan lembut manis di dalam."
  },
  {
    id: "onde-onde",
    name: "Onde-onde",
    description: "Bola ketan renyah dan manis dengan isian kacang hijau manis dibalut dengan biji wijen.",
    price: "Rp 1.000",
    image: "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/6/3/869d23d7-5b24-44a6-b1b1-2fee610c1070.jpg",
    longDescription: "Onde-onde adalah camilan tradisional yang memiliki tekstur renyah di luar dan lembut di dalam. Dibuat dari tepung ketan berkualitas tinggi dan diisi dengan pasta kacang hijau yang manis, kemudian dibalut dengan biji wijen yang renyah. Onde-onde kami digoreng hingga keemasan sempurna, menciptakan perpaduan rasa yang lezat antara gurih dan manis."
  },
];

export default function Products() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="h1">Produk Kami</h1>
            <p className="text-muted-foreground mt-4 max-w-2xl text-lg">
              Temukan berbagai produk lezat dari Odading Mang Abo yang dibuat dengan resep rahasia dan bahan berkualitas.
            </p>
          </div>
        </div>
      </section>
      
      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                {...product}
                className="animate-fade-in opacity-0"
                style={{ animationDelay: `${index * 150}ms` }}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Product Details */}
      {products.map((product) => (
        <section
          key={product.id}
          id={product.id}
          className="py-16 bg-background"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-square object-cover"
                />
              </div>
              <div className="space-y-6">
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Best Seller
                </span>
                <h2 className="h2">{product.name}</h2>
                <p className="text-muted-foreground">{product.longDescription}</p>
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-semibold text-primary">{product.price}</span>
                  <span className="text-sm text-muted-foreground">per piece</span>
                </div>
                
                <div className="pt-4">
                  <h4 className="text-lg font-semibold mb-2">Hubungi untuk pemesanan:</h4>
                  <div className="flex flex-col space-y-1 text-muted-foreground">
                    <span>WhatsApp: +62 856 9236 9039</span>
                    <span>Email: odadingmangabo@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
