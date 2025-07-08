export const ToothPattern = () => (
  <svg className="decorative-pattern" width="100" height="100" viewBox="0 0 100 100" fill="none">
    <path d="M50 15C42 15 35 22 35 30C35 38 42 45 50 45C58 45 65 38 65 30C65 22 58 15 50 15Z" fill="currentColor" fillOpacity="0.1"/>
    <path d="M35 70C35 78 42 85 50 85C58 85 65 78 65 70C65 62 58 55 50 55C42 55 35 62 35 70Z" fill="currentColor" fillOpacity="0.1"/>
  </svg>
);

export const WavePattern = () => (
  <svg className="wave-pattern" width="1440" height="100" viewBox="0 0 1440 100" fill="none">
    <path d="M0 50C240 50 240 0 480 0C720 0 720 50 960 50C1200 50 1200 0 1440 0V100H0V50Z" fill="currentColor" fillOpacity="0.05"/>
  </svg>
);

export const CrossPattern = () => (
  <svg className="cross-pattern" width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M20 5V35M5 20H35" stroke="currentColor" strokeWidth="2" strokeOpacity="0.1"/>
  </svg>
);

export const DentalBackground = () => (
  <div className="dental-background">
    <ToothPattern />
    <CrossPattern />
    <style jsx>{`
      .dental-background {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 0;
        overflow: hidden;
        pointer-events: none;
      }
      
      .decorative-pattern {
        position: absolute;
        color: var(--primary-color);
      }
      
      .wave-pattern {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        color: var(--primary-color);
      }
      
      .cross-pattern {
        position: absolute;
        color: var(--primary-color);
      }
    `}</style>
  </div>
); 