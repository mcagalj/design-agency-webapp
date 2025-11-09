import Image from "next/image";
import Button from "./ui/Button";

type TestimonialProps = {
  image: string;
  buttonText: string;
};

export default function Testimonial({ image, buttonText }: TestimonialProps) {
  return (
    <div className="-mx-8">
      <div className="relative w-full h-[390px]">
        <Image
          src={image}
          alt={buttonText}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
      <div className="px-8 py-4 bg-white">
        <Button
          ghost
          className="border-none uppercase text-brand px-0 w-full max-w-full justify-between bg-white"
          iconClassName="w-4 h-4"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
