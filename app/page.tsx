import HelloBanner from "./_components/HelloBanner";
import Button from "./_components/ui/Button";
import Testimonial from "./_components/Testimonial";
import Image from "next/image";

// Here we hardcode the content of the home page, but in a real-world scenario, this content would be fetched from a CMS or a DB.
const testimonials = [
  {
    image: "/design_system.jpg",
    buttonText: "Design system",
  },
  {
    image: "/from_scratch.jpg",
    buttonText: "Design from scratch",
  },
  {
    image: "/brand_transform.jpg",
    buttonText: "Brand transformation",
  },
  {
    image: "/book_cover.jpg",
    buttonText: "Book cover design",
  },
];

export default function Home() {
  return (
    <main className="container space-y-14 p-8">
      <HelloBanner />
      <section className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-heading font-black tracking-tight text-balance">
            Where Vision Meets Innovation
          </h1>
          <h4 className="text-2xl text-brand-text-weak tracking-tight">
            Entrust us with your digital appearance
          </h4>
        </div>
        <p className="leading-6">
          We are a full-service digital agency that specializes in web design,
          development, and digital marketing. We create digital experiences that
          are unique to your brand and help you achieve your goals.
        </p>
        <Button secondary>Book a meeting</Button>
      </section>

      <section className="space-y-6">
        <h1 className="container text-3xl font-heading font-bold tracking-tight text-balance">
          Grow Your Business With Us
        </h1>
        <Image
          src="/grow_business.png"
          alt="Grown Business"
          width={800}
          height={400}
          className="w-full h-auto rounded"
          priority
        />
        <div className="container space-y-6">
          <h4 className="text-xl font-lato text-brand-text-weak tracking-tight">
            Beautify your website and brand
          </h4>
          <p className="leading-6">
            First impressions last forever. When someone lands on your website,
            what do you think their instinctive, gut reaction will be? When a
            user visits your website, the first thing they notice is the look
            (design) and feel (UX).
          </p>
          <Button
            ghost
            className="border-none uppercase text-brand px-0"
            iconClassName="w-4 h-4"
          >
            Get in touch
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="space-y-12">
        <h1 className="container text-3xl font-lato font-bold tracking-tight text-balance">
          What Our Customers Say
        </h1>
        <h4 className="container text-xl font-lato text-brand-text-weak tracking-tight">
          Read case studies of our happy customers
        </h4>
        {testimonials.map(({ image, buttonText }, index) => (
          <Testimonial key={index} image={image} buttonText={buttonText} />
        ))}
      </section>

      <div className="w-full text-center pb-14">
        <Button secondary>{`Let's build the future`}</Button>
      </div>
    </main>
  );
}
