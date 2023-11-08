export default function Badge({ children, className, ...props }) {
  return (
    <span
      className={`absolute flex cursor-pointer items-center justify-center rounded-lg border border-[#bfbfbf] bg-white p-1 ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}
