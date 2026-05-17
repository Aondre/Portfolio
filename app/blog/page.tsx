import { Camera } from "lucide-react";
import { Home, User, StickyNote, Monitor, LucideIcon } from "lucide-react";

export default function Blog() {
  return (
    <main>
      <Camera size={48} color="red" strokeWidth={1} />
      <Home />
      <User />
      <StickyNote />
      <Monitor />
      Blog Page
    </main>
  );
}
