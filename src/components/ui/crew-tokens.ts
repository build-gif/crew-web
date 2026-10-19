// Design tokens with no React in the module, so server components can import
// them too. crew-shared.tsx re-exports CREW_TOKENS for the existing pages.
export const CREW_TOKENS = {
  orange: '#FF5A1F', orangeDark: '#E64A0F',
  ink: '#0A0A0A', ink2: '#161616',
  cream: '#F5EFE6', bone: '#EFE9DE',
  line: 'rgba(10,10,10,0.12)',
  // Home v2: white cards on cream, orange that passes contrast as text,
  // warm placeholders for avatars, and the hover of the black button.
  surface: '#FFFFFF', orangeText: '#C2410C',
  sand: '#EDE7DE', sand2: '#E3DCD1', inkHover: '#2A2A2A',
};
