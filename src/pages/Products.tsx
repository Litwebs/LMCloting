import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, ShieldCheck } from "lucide-react";
import { enquireLink } from "@/lib/site";
import { useProducts } from "@/hooks/use-products";

const Products = () => {
  const { products, loading } = useProducts();
  return (
    <section className="container py-16 lg:py-24">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Our Products
        </h1>
        <p className="mt-3 text-muted-foreground">
          Curated clothing &amp; streetwear at honest prices. Enquire on
          WhatsApp for any item.
        </p>
      </div>

      {loading ? (
        <div className="text-center text-muted-foreground py-20">
          Loading products…
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <article
              key={p.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card hover:border-primary/20"
            >
              <div className="relative aspect-square overflow-hidden bg-gradient-hero">
                {p.availability === "sold_out" && (
                  <span className="absolute left-3 top-3 z-10 rounded-full bg-muted px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground shadow-md">
                    Sold Out
                  </span>
                )}
                <img
                  src={p.image_url}
                  alt={p.name}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent pointer-events-none" />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {p.category}
                  </p>
                  <h2 className="font-display font-semibold leading-tight">
                    {p.name}
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </div>
                <div className="mt-auto flex items-center justify-between gap-3 pt-2">
                  <span className="font-display text-2xl font-bold">
                    {p.price.display}
                  </span>
                  {p.availability === "available" ? (
                    <Button asChild variant="whatsapp" size="sm">
                      <a
                        href={enquireLink(p.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Enquire about ${p.name} on WhatsApp`}
                      >
                        <MessageCircle className="h-4 w-4" /> Enquire
                      </a>
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm" disabled>
                      Sold Out
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Returns policy link */}
      <div className="mx-auto mt-16 max-w-2xl text-center">
        <div className="inline-flex items-center gap-2 rounded-2xl border border-border/60 bg-card px-6 py-4 shadow-soft">
          <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
          <p className="text-sm text-muted-foreground">
            Not satisfied? Read our full{" "}
            <Link
              to="/refund-exchange"
              className="font-semibold text-foreground underline underline-offset-2 hover:text-primary transition-colors"
            >
              Refund &amp; Exchange Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
