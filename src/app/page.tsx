import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import StatsSection from '@/components/home/StatsSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import TechStackSection from '@/components/home/TechStackSection';
import ScreenshotsSection from '@/components/home/ScreenshotsSection';
import DownloadCTASection from '@/components/home/DownloadCTASection';

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <HowItWorksSection />
      <TechStackSection />
      <ScreenshotsSection />
      <DownloadCTASection />
    </main>
  );
}
