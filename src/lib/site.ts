export const WHATSAPP_NUMBER = "447306060794";
export const WHATSAPP_DISPLAY = "07306060794";
export const EMAIL = "Lmclothing1@outlook.com";

export const enquireLink = (product?: string) =>
  product
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi LM Clothing, I am interested in ${product}`)}`
    : `https://wa.me/${WHATSAPP_NUMBER}`;

export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  price: {
    amount: number;
    currency: string;
    display: string;
  };
  availability: "available" | "sold_out";
  product_url: string;
  image_url: string;
};
