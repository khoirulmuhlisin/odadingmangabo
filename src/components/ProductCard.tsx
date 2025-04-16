
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  className?: string;
  style?: React.CSSProperties;
}

export function ProductCard({ id, name, description, price, image, className, style }: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-background border border-border/40 hover:border-primary/20 transition-all duration-300 h-full flex flex-col",
        className
      )}
      style={style}
    >
      <div className="aspect-square w-full overflow-hidden">
        <div className={cn(
          "h-full w-full relative bg-foreground/5",
          !imageLoaded && "image-loading"
        )}>
          <img
            src={image}
            alt={name}
            onLoad={() => setImageLoaded(true)}
            className={cn(
              "object-cover w-full h-full transition-all duration-500 group-hover:scale-105",
              !imageLoaded && "opacity-0",
              imageLoaded && "opacity-100"
            )}
          />
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-display text-xl font-bold">{name}</h3>
        <p className="mt-2 text-muted-foreground flex-grow">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-semibold text-primary">{price}</span>
          <Button asChild variant="outline" size="sm" className="rounded-full">
            <Link to={`/products#${id}`}>
              Detail
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
