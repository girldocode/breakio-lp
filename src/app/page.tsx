import {
  BetterEveryDay,
  BFavoriteTools,
  BHeader,
  BHero,
  BottomFooter,
  BreakTestimonial,
  FAQs,
  UpperFooter,
  UsersStories,
} from "@/components";
export default function Home() {
  return (
    <>
      <BHeader />
      <BHero />
      <BetterEveryDay />
      <UsersStories />
      <BreakTestimonial />
      <BFavoriteTools />
      <FAQs />
      <UpperFooter />
      <BottomFooter />
    </>
  );
}
