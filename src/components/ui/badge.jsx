export default function Badge({ children, className, ...props }) {
  return (
    <>
      <span
        className={`absolute top-0 cursor-pointer rounded-lg border border-[#bfbfbf] bg-white p-0.5 px-1 text-xs ${className}`}
        {...props}
      >
        {children}
      </span>
    </>
  )
}
