export const site = {
  name: "TRIQUA WATERS",
  tagline: "Label Every Bottle. Mark Every Sip.",
  phone: "+92 325 1222622",
  phoneHref: "tel:+923251222622",
  whatsapp: "https://wa.me/923251222622",
  instagram: "https://www.instagram.com/triqua.waters/",
  linktree: "https://linktr.ee/triqua.waters",
  email: "triqua.waters@gmail.com",
  location: "Wah Cantt, Pakistan",
};
export const defaultMsg =
  "Assalamualaikum Triqua! I'm interested in customized bottled water for my business. Could you please share your pricing, available options, and minimum order quantity?";
export const wa = (msg: string = defaultMsg) => `${site.whatsapp}?text=${encodeURIComponent(msg)}`;
export const nav = [
  ["Home", "#home"], ["About Us", "#about"], ["Our Solutions", "#solutions"],
  ["Customization", "#customize"], ["How It Works", "#how"], ["Contact", "#contact"],
] as const;
export const audiences = [
  ["Restaurants", "Bring your restaurant's identity to every table with personalized bottled water.", "I own/manage a restaurant and would like customized water bottles featuring our branding. Please share the available options, pricing, and minimum order quantity."],
  ["Cafés", "Complement your café's atmosphere with bottles designed around your brand.", "I run a café and would like customized bottles with our branding. Please share options, pricing, and minimum order quantity."],
  ["Hotels & Hospitality", "Create a more cohesive guest experience with branded bottled water.", "I represent a hotel/hospitality business and am interested in branded bottled water. Please share options, pricing, and minimum order quantity."],
  ["Corporate Businesses", "Make your business identity visible at meetings, conferences, and corporate gatherings.", "I'm inquiring for a corporate office/event and would like branded bottled water. Please share options, pricing, and minimum order quantity."],
  ["Weddings & Events", "Add a personalized finishing touch to your special occasions.", "I'm planning a wedding/event and would like personalized bottles. Please share options, pricing, and minimum order quantity."],
  ["Catering Services", "Deliver a consistent presentation with customized water bottles.", "I run a catering service and would like customized water bottles. Please share options, pricing, and minimum order quantity."],
].map(([title, text, m]) => ({ title, text, msg: "Assalamualaikum Triqua! " + m }));
export const faqs = [
  ["Can I customize bottles with my restaurant's logo?", "Yes. Share your logo and brand colors and we will confirm the label design with you during consultation."],
  ["Do you accept bulk orders?", "Triqua is built around business and event requirements. Message us with your quantity and we will confirm what is possible."],
  ["Can I provide my own label design?", "Yes, you are welcome to share your own artwork. We will confirm the final label with you before ordering."],
  ["What is the minimum order quantity?", "Minimum quantities are confirmed directly. Please contact us on WhatsApp or phone for the current details."],
  ["How can I request pricing?", "Tap Get a Quote to message us on WhatsApp. Pricing depends on your requirements and is shared directly."],
  ["Do you provide bottles for weddings and corporate events?", "Yes, personalized bottles for weddings, conferences and corporate gatherings are part of what we offer. Contact us with your event details."],
  ["Where is Triqua based?", "We are based in Wah Cantt, Pakistan. Contact us to confirm delivery options for your area."],
  ["How do I place an order?", "Get in touch, share your branding, confirm your design, then confirm order details directly with the Triqua team."],
];
