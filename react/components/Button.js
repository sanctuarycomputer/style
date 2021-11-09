const Hero = ({ headline, tagline }: { headline: string, tagline?: string }) => {
  return (
    <div class="hero">
      <h1 class="hero-title">Heading</h1>
      <p class="hero-tagline">Tagline</p>
    </div>
  );
};
