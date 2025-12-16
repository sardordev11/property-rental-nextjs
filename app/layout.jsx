import "@/assets/styles/globals.css";

export const metadata = {
  title: "Property Rental",
  keywords: "rental, real estate, property",
  description: "Find the perfect rental property",
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
