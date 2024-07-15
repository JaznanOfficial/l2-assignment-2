import Header from "@/components/shared/header/Header";
import Footer from "@/components/shared/footer/Footer";
import { TRootLayout } from "@/types/RootType";
export default function HomePageLayout({ children }: TRootLayout) {
  return (
    <>
      <Header />
      <main className="">{children}</main>
      <Footer />
    </>
  );
}
