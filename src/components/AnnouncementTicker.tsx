const items = [
  "Local work marketplace for Bangladesh",
  "Post a task",
  "Hire someone nearby",
  "KaazDaak · কাজডাক",
  "Built mobile-first",
  "In development",
];

export default function AnnouncementTicker() {
  return (
    <div className="ticker" role="region" aria-label="KaazDaak announcements">
      <div className="ticker__track">
        {[...items, ...items].map((item, i) => (
          <span className="ticker__item" key={i}>
            {item}
            <span className="ticker__dot" aria-hidden="true">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
