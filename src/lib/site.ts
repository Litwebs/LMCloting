import shilajitResin from "@/assets/products/01_shilajit_resin.png";
import shilajitCapsules from "@/assets/products/02_shilajit_capsules.png";
import vitaminTablets from "@/assets/products/03_vitamin_tablets.png";
import vitaminGummies from "@/assets/products/04_vitamin_gummies.png";
import vitaminD3 from "@/assets/products/05_hux_d3.png";
import multivitamin from "@/assets/products/06_multivitamin_tablets.png";
import vitaminC from "@/assets/products/07_vitamin_c_tablets.png";
import zinc from "@/assets/products/08_zinc_tablets.png";
import magnesium from "@/assets/products/09_magnesium_tablets.png";
import codLiverOil from "@/assets/products/10_cod_liver_oil_capsules.png";
import iron from "@/assets/products/11_iron_tablets.png";
import b12 from "@/assets/products/12_b12_tablets.png";
import hairSkinNails from "@/assets/products/13_hair_skin_nails_gummies.png";
import kidsGummies from "@/assets/products/14_kids_multivitamin_gummies.png";
import biotinImg from "@/assets/products/15_biotin_10000_mcg.png";

export const WHATSAPP_NUMBER = "447956736032";
export const WHATSAPP_DISPLAY = "07956736032";
export const EMAIL = "thethickeningltd@outlook.com";

export const enquireLink = (product?: string) =>
  product
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi The Thickening LTD, I am interested in ${product}`)}`
    : `https://wa.me/${WHATSAPP_NUMBER}`;

export type Product = {
  name: string;
  price: number;
  description: string;
  image: string;
  tag?: string;
};

export const products: Product[] = [
  { name: "Shilajit Resin", price: 55, description: "Authentic Himalayan shilajit resin packed with over 85 ionic minerals and fulvic acid. Traditionally used to enhance energy, sharpen mental clarity, and support overall vitality.", image: shilajitResin, tag: "Bestseller" },
  { name: "Shilajit Capsules", price: 45, description: "All the power of pure Himalayan shilajit in an easy daily capsule. Standardised for fulvic acid content to support sustained energy, stamina, and optimal nutrient absorption.", image: shilajitCapsules },
  { name: "Vitamin Tablets", price: 65, description: "A high-strength, A-to-Z daily formula expertly crafted to fill nutritional gaps. Supports immune function, energy metabolism, and long-term whole-body health.", image: vitaminTablets, tag: "Premium" },
  { name: "Vitamin Gummies", price: 25, description: "Delicious fruit-flavoured gummies delivering your essential daily vitamins without the need to swallow tablets. A tastier, fuss-free way to stay on top of your wellness.", image: vitaminGummies },
  { name: "Hux D3", price: 10, description: "High-potency Vitamin D3 for strong bones, a resilient immune system, and mood support. Especially vital during low-sunlight months when dietary intake alone falls short.", image: vitaminD3 },
  { name: "Multivitamin Tablets", price: 12, description: "A comprehensive blend of essential vitamins and minerals to complement your daily diet. Designed to keep your body performing at its best, day after day.", image: multivitamin },
  { name: "Vitamin C Tablets", price: 8, description: "A powerful antioxidant that strengthens immune defences and supports collagen production. Our high-dose formula is easy to swallow and gentle on the stomach.", image: vitaminC },
  { name: "Zinc Tablets", price: 7, description: "An essential trace mineral that bolsters immune function, accelerates skin repair, and supports hormonal balance. Ideal for reinforcing the body's natural defences.", image: zinc },
  { name: "Magnesium Tablets", price: 9, description: "Helps ease muscle cramps, promotes deeper restful sleep, and calms a stressed nervous system. A must-have mineral for active individuals and those with busy lifestyles.", image: magnesium },
  { name: "Cod Liver Oil Capsules", price: 6, description: "A natural source of Omega-3 fatty acids with Vitamins A and D. Supports heart health, joint mobility, and healthy skin — all from a single daily capsule.", image: codLiverOil },
  { name: "Iron Tablets", price: 5, description: "Formulated to reduce tiredness and fatigue by supporting healthy red blood cell production. A gentle-release formula designed to minimise digestive discomfort.", image: iron },
  { name: "B12 Tablets", price: 10, description: "Essential for energy metabolism and a healthy nervous system. Particularly beneficial for vegans, vegetarians, and anyone experiencing persistent low energy or brain fog.", image: b12 },
  { name: "Hair, Skin & Nails Gummies", price: 15, description: "Biotin-enriched beauty gummies with Vitamins C and E to nourish hair from root to tip, fortify brittle nails, and support a healthy, radiant complexion every day.", image: hairSkinNails },
  { name: "Kids Multivitamin Gummies", price: 11, description: "Specially formulated for growing children, these fun and fruity gummies deliver a carefully balanced blend of vitamins to support development, immunity, and daily energy.", image: kidsGummies },
  { name: "Biotin (10,000 mcg)", price: 50, description: "High-strength Biotin (Vitamin B7) to promote healthy hair growth, strengthen brittle nails, and support clear, glowing skin. A favourite for those elevating their natural beauty routine.", image: biotinImg, tag: "New" },
];
