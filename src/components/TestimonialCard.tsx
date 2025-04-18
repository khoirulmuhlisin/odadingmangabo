
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function TestimonialCard({ quote, author, role, className, style }: TestimonialCardProps) {
  return (
    <div 
      className={cn(
        "bg-background rounded-2xl border border-border/40 p-6 shadow-sm hover:shadow-md transition-all duration-300",
        className
      )}
      style={style}
    >
      <div className="space-y-4">
        <svg
          className="h-8 w-8 text-primary/30"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p className="text-foreground leading-relaxed">{quote}</p>
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-primary/10 h-8 w-8 flex items-center justify-center">
            <span className="text-primary font-medium text-sm">
              {author.charAt(0)}
            </span>
          </div>
          <div>
            <p className="font-medium">{author}</p>
            {role && <p className="text-sm text-muted-foreground">{role}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
