import { Hero } from "@/components/sections/Hero";
import { CampusHub } from "@/components/sections/CampusHub";
import { Features } from "@/components/sections/Features";
import { EnrollmentBanner } from "@/components/ui/EnrollmentBanner";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Features />
      <CampusHub />
      <EnrollmentBanner />

      {/* Footer Placeholder for now */}
      <footer className="bg-navy text-white py-12 text-center text-sm text-gray-400">
        <div className="max-w-7xl mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Nedika Hope Schools. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
