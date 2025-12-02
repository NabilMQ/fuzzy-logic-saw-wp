export default function Accordion({title, children} : {title : string; children : React.ReactNode}) {

  return (
    <details className="group [&amp;_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer font-bold text-[12px] sm:text-[14px] md:text-[16px] items-center gap-4 rounded px-3 py-2">
        <span>{title}</span>

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill transition-transform duration-300 group-open:-rotate-180" viewBox="0 0 16 16">
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
        </svg>
      </summary>

      {children}
    </details>
  )
}