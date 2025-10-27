import HelloBanner from "./_components/HelloBanner";

// Here we hardcode the content of the home page, but in a real-world scenario, this content would be fetched from a CMS or a DB.
export default function Home() {
  return (
    <main className="container space-y-6 p-8">
      <HelloBanner />
      <div className="space-y-2">
        <h1 className="text-5xl font-heading font-black tracking-tight text-balance">
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
    </main>
  );
}
