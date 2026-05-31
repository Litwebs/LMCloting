import { Button } from "@/components/ui/button";
import { Leaf, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { enquireLink } from "@/lib/site";

const About = () => {
  return (
    <section className="container py-16 lg:py-24">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div className="space-y-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            About Us
          </span>
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Reasonably priced wellness, delivered with care.
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            The Thickening LTD supplies a hand-picked range of vitamins,
            supplements, and wellness products at honest, affordable prices.
            Whether you're after daily essentials or premium specialities like
            Shilajit, our team is just a WhatsApp message away — quick to reply,
            easy to deal with, and always happy to help.
          </p>
          <Button asChild variant="whatsapp" size="lg">
            <a href={enquireLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" /> Message us on WhatsApp
            </a>
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              icon: ShieldCheck,
              title: "Quality First",
              text: "Trusted supplements you can rely on.",
            },
            {
              icon: Leaf,
              title: "Wellness Focus",
              text: "Hand-picked for everyday health.",
            },
            {
              icon: MessageCircle,
              title: "Quick Replies",
              text: "Fast WhatsApp enquiries, real people.",
            },
            {
              icon: Sparkles,
              title: "Fair Prices",
              text: "Premium products without the markup.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-border bg-card p-5 shadow-soft"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
