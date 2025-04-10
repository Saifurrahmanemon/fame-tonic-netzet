import type { Metadata } from "next";
import HomePage from "~/components/pages/home-page";

export const metadata: Metadata = {
   title: "Fametonic - Turn Social Media Into a Profitable Career",
   description:
      "Discover your way to success with Fametonic. Start growing your influence right away with easy-to-follow lessons and expert-led courses.",
   openGraph: {
      title: "Fametonic - Turn Social Media Into a Profitable Career",
      description: "Discover your way to success with Fametonic",
   },
};

export default function Home() {
   return <HomePage />;
}
