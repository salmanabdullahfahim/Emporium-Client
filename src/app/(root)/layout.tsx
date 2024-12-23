import BackToTop from "@/components/shared/BackToTop";
import NavigationMenu from "@/components/shared/NavigationMenu";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className=" mx-auto">
        <NavigationMenu />
        <div className="pt-8">{children}</div>
        <BackToTop />
      </div>
    </main>
  );
}
