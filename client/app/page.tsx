import CTA from './(components)/CTA';
import FeatureRow from './(components)/FeatureRow';
import Footer from './(components)/Footer';
import HeroSection from './(components)/HeroSection';
import PostsRow from './(components)/PostsRow';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeatureRow />
      <PostsRow />
      <CTA />
      <Footer />
    </main>
  );
}
