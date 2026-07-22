export default function SMPLLogo({ variant = 'dark' }) {
  const isDark = variant === 'dark';

  return (
    <div
      className={`inline-flex items-center ${
        isDark ? '' : 'rounded-xl bg-white px-3 py-2 shadow-sm'
      }`}
    >
      <img
        src="/image/nirmanLogo.png"
        alt="Supernirman Materials Pvt. Ltd."
        className="block h-auto w-[190px] object-contain sm:w-[220px]"
        loading="eager"
      />
    </div>
  );
}
