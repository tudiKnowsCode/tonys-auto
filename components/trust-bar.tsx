/*
  Repeated trust bar. Light gray strip of credentials, centered.
*/
const items = [
  "ASE-certified",
  "Bosch Service center",
  "Authorized Nokian dealer",
  "BBB A+",
  "Serving Manchester since 1979",
];

export function TrustBar() {
  return (
    <div className="w-full border-y border-black/10 bg-[#eeeef0] px-6 py-5 sm:px-10">
      {/* Flex-wrap: each credential stays on one line, but the row wraps
          between credentials on narrow screens instead of overflowing. */}
      <p className="m-0 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center font-serif text-[14px] leading-[1.7] text-label sm:text-[15px]">
        {items.map((item, i) => (
          <span key={item} className="flex items-center gap-2 whitespace-nowrap">
            {item}
            {i < items.length - 1 && (
              <span className="text-accent" aria-hidden="true">
                ·
              </span>
            )}
          </span>
        ))}
      </p>
    </div>
  );
}
