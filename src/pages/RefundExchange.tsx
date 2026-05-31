import { Link } from "react-router-dom";
import {
  ShieldCheck,
  RotateCcw,
  PackageCheck,
  MessageCircle,
  Mail,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { enquireLink, EMAIL } from "@/lib/site";

const sections = [
  {
    icon: PackageCheck,
    title: "Unopened Items",
    body: "We accept returns on any unopened, sealed product within 14 days of the confirmed delivery date. The item must be in its original packaging, unused and undamaged. Once we receive and inspect the return, a full refund will be issued to your original payment method within 5–7 business days.",
  },
  {
    icon: RotateCcw,
    title: "Exchanges",
    body: "Changed your mind or want to try something different? We're happy to exchange any eligible item for a product of equal or greater value. Simply reach out to us via WhatsApp or email before sending anything back and we'll guide you through the process.",
  },
  {
    icon: AlertTriangle,
    title: "Damaged or Incorrect Items",
    body: "If you receive a product that is damaged in transit or not what you ordered, please contact us within 48 hours of delivery with a photo of the item and your order details. We will arrange a free replacement or full refund promptly — no need to return the item.",
  },
  {
    icon: AlertTriangle,
    title: "Opened Products",
    body: "For hygiene and safety reasons, opened supplements cannot be returned unless the product itself is found to be faulty or defective. If you believe a product is faulty, please contact us within 7 days of opening with details and we will assess on a case-by-case basis.",
  },
];

const steps = [
  {
    step: "01",
    label: "Contact us",
    detail:
      "Reach out via WhatsApp or email with your order details and reason for return.",
  },
  {
    step: "02",
    label: "Get approval",
    detail:
      "We'll confirm eligibility and provide return instructions within 24 hours.",
  },
  {
    step: "03",
    label: "Send it back",
    detail: "Package the item securely and post it to the address we provide.",
  },
  {
    step: "04",
    label: "Refund or exchange",
    detail:
      "Once received and inspected, we'll process your refund or dispatch your replacement.",
  },
];

const RefundExchange = () => {
  return (
    <section className="container py-16 lg:py-24">
      {/* Header */}
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft mb-5">
          <ShieldCheck className="h-7 w-7" />
        </div>
        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Refund &amp; Exchange Policy
        </h1>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          We stand behind every product we sell. If something isn't right, we'll
          make it right — quickly and without hassle.
        </p>
      </div>

      {/* Policy cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mb-16">
        {sections.map(({ icon: Icon, title, body }) => (
          <div
            key={title}
            className="rounded-2xl border border-border/60 bg-card p-6 shadow-soft"
          >
            <div className="flex items-start gap-4">
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-display font-semibold mb-2">{title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {body}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* How it works */}
      <div className="mx-auto mb-16 max-w-3xl">
        <h2 className="font-display text-2xl font-bold text-center mb-8">
          How to Initiate a Return
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ step, label, detail }) => (
            <div
              key={step}
              className="relative flex flex-col items-center text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground font-display font-bold text-sm shadow-soft mb-3">
                {step}
              </div>
              <h3 className="font-display font-semibold mb-1">{label}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Important notes */}
      <div className="mx-auto mb-16 max-w-2xl rounded-2xl border border-border bg-secondary/40 p-6">
        <h2 className="font-display font-semibold mb-3 flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-primary" /> Important Notes
        </h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-2.5">
            <span className="text-primary font-bold shrink-0 mt-0.5">•</span>
            Return postage costs are the responsibility of the customer unless
            the item was damaged or incorrect.
          </li>
          <li className="flex gap-2.5">
            <span className="text-primary font-bold shrink-0 mt-0.5">•</span>
            Refunds are processed to the original payment method and may take
            5–7 business days to appear.
          </li>
          <li className="flex gap-2.5">
            <span className="text-primary font-bold shrink-0 mt-0.5">•</span>
            Items must be returned in their original condition. Products showing
            signs of use or damage will not be accepted.
          </li>
          <li className="flex gap-2.5">
            <span className="text-primary font-bold shrink-0 mt-0.5">•</span>
            Please do not send items back without first contacting us —
            unauthorised returns cannot be processed.
          </li>
        </ul>
      </div>

      {/* Contact CTA */}
      <div className="mx-auto max-w-xl rounded-2xl border border-primary/20 bg-card p-8 text-center shadow-soft">
        <h2 className="font-display text-xl font-bold mb-2">
          Need to get in touch?
        </h2>
        <p className="text-sm text-muted-foreground mb-6">
          Our team is ready to help with any return or exchange. Reach out via
          WhatsApp for the fastest response.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild variant="whatsapp">
            <a
              href={enquireLink("a return/exchange")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={`mailto:${EMAIL}`}>
              <Mail className="h-4 w-4" /> Email Us
            </a>
          </Button>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Or{" "}
          <Link
            to="/contact"
            className="underline underline-offset-2 hover:text-foreground transition-colors"
          >
            visit our contact page
          </Link>{" "}
          for more options.
        </p>
      </div>
    </section>
  );
};

export default RefundExchange;
