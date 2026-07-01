@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --ivory: #F7F3EE;
  --taupe: #E8E0D5;
  --umber: #9B7B6E;
  --rose-dust: #C9A99A;
  --brown-deep: #2C2420;
  --brown-mid: #5C4A42;
}

html { scroll-behavior: smooth; }

body {
  background-color: var(--ivory);
  color: var(--brown-deep);
  font-family: 'DM Sans', system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
}

::selection {
  background-color: #C9A99A44;
}

@layer components {
  .btn-primary {
    @apply inline-flex items-center gap-2 px-8 py-3.5 bg-brown-deep text-ivory text-sm tracking-widest uppercase font-sans font-light transition-all duration-300 hover:bg-brown-mid;
  }
  .btn-outline {
    @apply inline-flex items-center gap-2 px-8 py-3.5 border border-brown-deep text-brown-deep text-sm tracking-widest uppercase font-sans font-light transition-all duration-300 hover:bg-brown-deep hover:text-ivory;
  }
  .btn-outline-light {
    @apply inline-flex items-center gap-2 px-8 py-3.5 border border-ivory text-ivory text-sm tracking-widest uppercase font-sans font-light transition-all duration-300 hover:bg-ivory hover:text-brown-deep;
  }
  .label {
    @apply text-xs tracking-[0.2em] uppercase font-sans text-umber;
  }
  .section-pad {
    @apply py-20 md:py-28 lg:py-32;
  }
  .container-max {
    @apply max-w-content mx-auto px-6 md:px-10 lg:px-16;
  }
}

@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
