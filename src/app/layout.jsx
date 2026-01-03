import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./Components/ClientLayout/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Coachlete",
  description:
    "Coachlete is a sports coaching platform designed to help athletes discover and connect with coaches across multiple sports. The app provides tools to search for coaches based on sport type, location, experience, and availability. Users can explore detailed coach profiles that include background information, experience details, and user feedback to support informed decision-making. Coachlete enables session scheduling and booking through an in-app subscription system, making it easier to manage coaching interactions. Coaches can manage their profiles, availability, and session schedules directly within the app. Athletes receive session reminders and can track their participation history to stay organized and engaged. Coachlete is built to streamline communication and scheduling between athletes and coaches, offering a structured platform to support training coordination and coaching management.",
  icons: {
    icon: "/assets/Clock_Coachlete.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
