type LogoProps = {
  theme?: "light" | "dark";
  className?: string;
};

const Logo = ({ theme = "light", className = "" }: LogoProps) => {
  return (
    <p className={`font-heading text-2xl font-black ${className}`}>
      {theme === "light" ? (
        <>
          <span className="text-brand">design</span>
          <span className="text-brand-text-strong">matters</span>
          <span className="text-brand">.</span>
        </>
      ) : (
        <>
          <span className="text-brand-stroke-weak">design</span>
          <span className="text-brand-stroke-strong">matters</span>
          <span className="text-brand-stroke-weak">.</span>
        </>
      )}
    </p>
  );
};

export default Logo;
