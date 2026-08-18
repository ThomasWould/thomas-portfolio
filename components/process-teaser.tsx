export function ProcessTeaser() {
  const steps = ["Understand", "Design", "Build", "Test", "Iterate"];

  return (
    <section
      className="process-teaser"
      id="process-teaser"
      aria-label="Process preview"
    >
      <div className="teaser-shell">
        <p className="teaser-label">A working rhythm</p>
        <p className="process-line">
          {steps.map((step, index) => (
            <span key={step}>
              <span>{step}</span>
              {index < steps.length - 1 && (
                <span className="process-arrow" aria-hidden="true">
                  →
                </span>
              )}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

