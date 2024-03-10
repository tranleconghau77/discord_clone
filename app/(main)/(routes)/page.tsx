import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <UserButton />
      <ModeToggle />
    </div>
  );
}
