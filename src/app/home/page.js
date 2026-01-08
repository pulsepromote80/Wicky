"use client"
import AboutWickWager from "./about/page";
import CommunitySection from "./community/page";
import ExchangeFeaturesSection from "./exchange/page";
import GetStartedSection from "./get/page";
import HeroSection from "./hero/page";
import LaunchSection from "./launch/page";
import PerformanceTargetingSection from "./performance/page";
import SecuritySection from "./security/page";
import StatsSection from "./stats/page";
import TradingStrategiesSection from "./trading/page";
import VisionPrinciples from "./vision/page";
import WKGTokenSection from "./wkgt/page";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutWickWager />
      <VisionPrinciples />
      <TradingStrategiesSection/>
      <PerformanceTargetingSection/>
      <ExchangeFeaturesSection/>
      <WKGTokenSection/>
      <CommunitySection/>
      <SecuritySection/>
      <GetStartedSection/>
      <LaunchSection/>
    </>
  );
}