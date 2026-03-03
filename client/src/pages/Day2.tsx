import DayPageLayout, { TaskBlock, MetaRow, PlaceholderNote, PlaceholderLink, CongratusBanner } from "@/components/DayPageLayout";
import { siteConfig } from "@/lib/siteConfig";

export default function Day2() {
  return (
    <DayPageLayout day={2} subtitle="Curiosity Post">

      <TaskBlock number={1} title="Post Your Curiosity Post">
        <MetaRow label="Purpose">
          This type of post is intended to create curiosity, excitement and FOMO about what you're up to. You want people to think "What is she/he up to right now?"
        </MetaRow>
        <p>
          Your friends might reach out to ask you what you're doing, while others will be watching closely waiting for you to drop more info!
        </p>
        <MetaRow label="Best Practices">
          This is a short text post accompanied by an image of you.
        </MetaRow>
        <MetaRow label="What to Post">
          Here are examples of posts you might try:
        </MetaRow>
        <ol className="list-decimal pl-5 space-y-3 text-sm text-gray-700">
          <li>Change is coming and I can barely contain my excitement. I'm about to blow the lid off of something new. Stay tuned 🔥</li>
          <li>I'm starting something new in the [your general niche] space and it's going to be massive. It's never been done before and I'm literally jumping out of my skin. Stay tuned 🔥</li>
          <li>I've learned to trust my gut. And my gut has been telling me for quite a while to pivot. Now it's time to make big moves. Change is coming and I've never felt more at peace. ✌️💕</li>
        </ol>
        <PlaceholderNote>
          PLACEHOLDER: Provide screenshots of 4–6 examples of curiosity posts.
        </PlaceholderNote>
      </TaskBlock>

      <TaskBlock number={2} title="Contact the Next 3 People in Your Warm Market">
        <p>
          Use this authentic, transparent, and non-salesy approach to reach out to the next 3 people in your warm market.
        </p>
        <PlaceholderLink href={siteConfig.warmMarketTrainingUrl}>
          Link to Training on How to Authentically Reach Out to Warm Market
        </PlaceholderLink>
      </TaskBlock>

      <TaskBlock number={3} title="Respond to People Replying to Your Curiosity Post">
        <p>
          When people respond to your curiosity post, reply to them in the comment section.
        </p>
        <p className="italic text-gray-500 text-sm">
          (Do not say anything about your products or company in the comment section. You will kill curiosity and people might Google stuff about your company or products.)
        </p>
        <p className="mt-2">If people message you directly and ask "Hey! What are you up to?" Reply with something like:</p>
        <blockquote className="border-l-4 border-teal-400 pl-4 my-2 text-gray-600 italic text-sm">
          "Hey [first name]! Good to hear from you. I'm not quite ready to share but will be posting about it tomorrow and will definitely let you know when it drops! Hope that's ok. I'm really excited, but just getting myself organized."
        </blockquote>
      </TaskBlock>

      <TaskBlock number={4} title="Take Inventory of Useful Presentation Links for Future">
        <p>
          Here are specific links you will need for tomorrow and beyond that you'll want to have handy for prospects:
        </p>
        <div className="flex flex-col gap-2 mt-2">
          <PlaceholderLink href={siteConfig.productPresentationUrl}>
            Link to company presentation for product prospects
          </PlaceholderLink>
          <PlaceholderLink href={siteConfig.bizPresentationUrl}>
            Link to company presentation for biz prospects
          </PlaceholderLink>
        </div>
      </TaskBlock>

      <CongratusBanner day={2} groupName={siteConfig.fbGroupTeamName} />
    </DayPageLayout>
  );
}
