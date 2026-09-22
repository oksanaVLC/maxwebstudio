const elements = document.querySelectorAll<HTMLElement>(
  "[data-reveal], [data-counter]",
);

if (elements.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const element = entry.target as HTMLElement;

        element.classList.add("is-visible");

        if (element.hasAttribute("data-counter")) {
          animateCounter(element);
        }

        observer.unobserve(element);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -8% 0px",
    },
  );

  elements.forEach((element) => observer.observe(element));
}

function animateCounter(element: HTMLElement) {
  const originalText = element.textContent?.trim() ?? "";

  const match = originalText.match(/[\d.,]+/);

  if (!match) return;

  const numberText = match[0];

  const numericValue = parseFloat(
    numberText.replace(/\./g, "").replace(",", "."),
  );

  if (!Number.isFinite(numericValue)) return;

  const prefix = originalText.slice(0, match.index);

  const suffix = originalText.slice((match.index ?? 0) + numberText.length);

  const decimals = numberText.includes(",")
    ? numberText.split(",")[1].length
    : 0;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (prefersReducedMotion) {
    return;
  }

  const duration = 1200;
  const startTime = performance.now();

  const locale = document.documentElement.lang || "es-ES";

  const formatter = new Intl.NumberFormat(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  function update(currentTime: number) {
    const progress = Math.min((currentTime - startTime) / duration, 1);

    const easedProgress = 1 - Math.pow(1 - progress, 3);

    const currentValue = numericValue * easedProgress;

    element.textContent = `${prefix}${formatter.format(currentValue)}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = originalText;
    }
  }

  requestAnimationFrame(update);
}
