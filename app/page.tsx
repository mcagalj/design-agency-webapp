import HelloBanner from "./_components/HelloBanner";
import Button from "./_components/ui/Button";

// Here we hardcode the content of the home page, but in a real-world scenario, this content would be fetched from a CMS or a DB.
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
        <img src={"./grow_business.png"} alt="Grown Business" />
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
    </main>
  );
}
