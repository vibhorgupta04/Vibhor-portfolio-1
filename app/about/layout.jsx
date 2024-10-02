import Footer from "@/components/Footer";

export const metadata = {
	title: "Vibhor | About",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
