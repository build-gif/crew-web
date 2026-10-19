import { permanentRedirect } from "next/navigation";

// The new home lived here before it replaced "/". Old links keep working.
export default function HomeV2Redirect() {
  permanentRedirect("/");
}
