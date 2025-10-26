function Hamburger() {
  return (
    <button
      className="flex md:hidden flex-col justify-center items-end w-11 h-11 p-2 space-y-1.5 rounded-sm hover:bg-brand-stroke-weak active:bg-brand-stroke-weak"
      aria-label="Open menu"
    >
      <span className="w-7 h-1 bg-brand-black rounded-full" />
      <span className="w-4 h-1 bg-brand-black rounded-full" />
      <span className="w-6 h-1 bg-brand-black rounded-full" />
    </button>
  );
}

export default Hamburger;
