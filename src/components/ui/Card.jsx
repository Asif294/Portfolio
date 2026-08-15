/** Surface used by every card on the page, so hover and border states stay identical. */
export default function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`rounded-2xl border border-ink-700 bg-ink-800/70 shadow-lg
                  transition duration-300 hover:border-accent-400/60
                  hover:shadow-accent-400/5 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
