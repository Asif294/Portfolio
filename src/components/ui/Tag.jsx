/** Small pill used for tech stacks and skill chips. */
export default function Tag({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-ink-600
                  bg-ink-700/60 px-3 py-1 text-[13px] font-medium text-slate-200
                  transition duration-200 hover:border-accent-400/60 hover:text-accent-300 ${className}`}
    >
      {children}
    </span>
  );
}
