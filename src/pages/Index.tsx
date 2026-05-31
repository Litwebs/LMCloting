import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  ShieldCheck,
  Truck,
  Leaf,
  Sparkles,
} from "lucide-react";
import heroImage from "@/assets/hero-vitamins.jpg";
import { enquireLink, products } from "@/lib/site";

const Index = () => {
  const featured = products.slice(0, 4);
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container grid gap-12 py-16 md:grid-cols-2 md:items-center md:py-24 lg:py-32">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary shadow-soft">
              <Sparkles className="h-3.5 w-3.5" /> UK-Based Wellness Store
            </span>
            <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Premium Vitamins
              <br />& Wellness Products
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              Quality supplements available from The Thickening LTD. Message us
              on WhatsApp to enquire — fast, friendly, no hassle.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="whatsapp" size="lg">
                <a
                  href={enquireLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" /> Enquire on WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/products">Browse Products</Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" /> Trusted quality
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-primary" /> UK-based
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="h-4 w-4 text-primary" /> Affordable
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-primary/20 blur-3xl" />
            <img
              src={heroImage}
              alt="Premium vitamin supplements from The Thickening LTD"
              width={1536}
              height={1024}
              className="relative w-full rounded-3xl object-cover shadow-elegant"
            />
          </div>
        </div>
      </section>

      <section className="container py-20 lg:py-28">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Products
          </h2>
          <p className="mt-3 text-muted-foreground">
            A taste of our wellness essentials. View the full range on the
            products page.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <article
              key={p.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <div className="relative aspect-square overflow-hidden bg-gradient-hero">
                {p.tag && (
                  <span className="absolute left-3 top-3 z-10 rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                    {p.tag}
                  </span>
                )}
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <div>
                  <h3 className="font-display font-semibold leading-tight">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </div>
                <div className="mt-auto flex items-center justify-between gap-3 pt-2">
                  <span className="font-display text-2xl font-bold">
                    £{p.price}
                  </span>
                  <Button asChild variant="whatsapp" size="sm">
                    <a
                      href={enquireLink(p.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4" /> Enquire
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/products">View all products</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Index;
