import { Button } from "@/components/ui/button";
import { Leaf, Mail, MessageCircle } from "lucide-react";
import { EMAIL, WHATSAPP_DISPLAY, enquireLink } from "@/lib/site";
//
const Contact = () => {
  return (
    <section className="container py-16 lg:py-24">
      <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-gradient-hero p-8 shadow-card sm:p-12">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-3 text-muted-foreground">
            We reply quickly on WhatsApp — get your enquiry answered today.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <a
            href={enquireLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 rounded-2xl bg-card p-6 text-center shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
          >
            <MessageCircle className="h-6 w-6 text-whatsapp" />
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              WhatsApp
            </div>
            <div className="font-display font-semibold">{WHATSAPP_DISPLAY}</div>
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="flex flex-col items-center gap-2 rounded-2xl bg-card p-6 text-center shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
          >
            <Mail className="h-6 w-6 text-primary" />
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Email
            </div>
            <div className="font-display text-sm font-semibold break-all">
              {EMAIL}
            </div>
          </a>
          <div className="flex flex-col items-center gap-2 rounded-2xl bg-card p-6 text-center shadow-soft">
            <Leaf className="h-6 w-6 text-primary" />
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Business
            </div>
            <div className="font-display font-semibold">LM Clothing</div>
          </div>
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="whatsapp" size="lg">
            <a href={enquireLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" /> Enquire on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
