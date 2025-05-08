import React from "react";
import { Navbar5 } from "../public-com/Navbar5";
import { Header26 } from "./components/Header26";
import { Layout3 } from "./components/Layout3";
import { Layout252 } from "./components/Layout252";
import { Layout22 } from "./components/Layout22";
import { Cta45 } from "./components/Cta45";
import { Footer5 } from "./components/Footer5";
import FloatingChatBox from "../tools/chat-bot";

export default function Page() {
  return (
    <div>
      <Navbar5 />
      <Header26 />
      <Layout3 />
      <Layout252 />
      <Layout22 />
      <Cta45 />
      <Footer5 />
      <FloatingChatBox />
    </div>
  );
}
