import { createBrowserRouter, Outlet, ScrollRestoration } from "react-router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { FloatingChatbot } from "./components/FloatingChatbot";
import { SchemaMarkup } from "./components/SchemaMarkup";
import { Home } from "./pages/Home";
import { PlaceholderPage } from "./pages/PlaceholderPage";

function RootLayout() {
  return (
    <>
      <SchemaMarkup />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <FloatingChatbot />
      <ScrollRestoration />
    </>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", element: <PlaceholderPage title="About Us" /> },
      { path: "doctors", element: <PlaceholderPage title="Our Doctors" /> },
      { path: "departments", element: <PlaceholderPage title="Departments & Centers" /> },
      { path: "treatments", element: <PlaceholderPage title="Treatments & Procedures" /> },
      { path: "packages", element: <PlaceholderPage title="Health Packages" /> },
      { path: "stories", element: <PlaceholderPage title="Patient Stories" /> },
      { path: "blogs", element: <PlaceholderPage title="Health Articles & Blogs" /> },
      { path: "careers", element: <PlaceholderPage title="Careers at Kalra" /> },
      { path: "international", element: <PlaceholderPage title="International Patients" /> },
      { path: "insurance", element: <PlaceholderPage title="Insurance & TPA" /> },
      { path: "emergency", element: <PlaceholderPage title="Emergency Care" /> },
      { path: "contact", element: <PlaceholderPage title="Contact Us" /> },
      { path: "book", element: <PlaceholderPage title="Book Appointment" /> },
      { path: "privacy", element: <PlaceholderPage title="Privacy Policy" /> },
      { path: "terms", element: <PlaceholderPage title="Terms of Service" /> },
      { path: "sitemap", element: <PlaceholderPage title="Sitemap" /> },
      { path: "*", element: <PlaceholderPage title="Page Not Found" /> },
    ],
  },
]);
