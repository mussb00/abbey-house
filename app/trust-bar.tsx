const ITEMS = [
  { label: 'Gas Safe Registered', sub: 'All engineers certified' },
  { label: 'Same-Day Response', sub: 'Breakdowns prioritised' },
  { label: 'No Subcontractors', sub: 'Our own trained team' },
  { label: 'All Boiler Brands', sub: 'Worcester · Vaillant · Baxi' },
  { label: '5★ on Google', sub: '84 verified reviews' },
]

export function TrustBar() {
  return (
    <div className="border-t border-b border-border bg-white py-3 px-4 overflow-x-auto">
      <div className="max-w-7xl mx-auto flex gap-8 min-w-max lg:min-w-0 lg:justify-between">
        {ITEMS.map(({ label, sub }) => (
          <div key={label} className="flex items-center gap-2 shrink-0">
            <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
            <div>
              <div className="text-xs font-semibold text-foreground whitespace-nowrap">{label}</div>
              <div className="text-[10px] text-muted-foreground whitespace-nowrap">{sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
