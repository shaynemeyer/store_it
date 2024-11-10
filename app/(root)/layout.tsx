import Header from "@/components/nav/Header";
import MobileNavigation from "@/components/nav/MobileNavigation";
import Sidebar from "@/components/nav/Sidebar";
import { getCurrentUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

async function RootLayout({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return redirect("/sign-in");
  }
  return (
    <main className="flex h-screen">
      <Sidebar {...currentUser} />
      <section className="flex h-full flex-1 flex-col">
        <MobileNavigation /> <Header />
        <div className="main-content">{children}</div>
      </section>
    </main>
  );
}
export default RootLayout;
