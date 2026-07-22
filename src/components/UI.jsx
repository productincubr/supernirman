export const Card = ({ children, className = '' }) => (
  <div className={`rounded-2xl border border-slate-100 bg-white shadow-sm ${className}`}>
    {children}
  </div>
);

export const Button = ({ children, className = '', ...props }) => (
  <button
    {...props}
    className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors hover:opacity-90 ${className}`}
  >
    {children}
  </button>
);
