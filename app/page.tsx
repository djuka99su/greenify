import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import SectionOne from "@/components/home/section-one";
import SectionTwo from "@/components/home/section-two";

export default function Home() {
  return (
    <>
      <SectionOne />
      <SectionTwo />
    </>
  );
}
