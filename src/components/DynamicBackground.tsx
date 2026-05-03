export default function DynamicBackground() {
  return (
    <div className="app-background" aria-hidden="true">
      <div className="app-background__mesh" />
      <div className="app-background__grid" />
      <div className="app-background__sweep" />
      <div className="app-background__rails" />
    </div>
  )
}