"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import SectionHeader from '@/components/ui/SectionHeading';

export default function AchievementsAndAwards() {
  return (
    <div className="space-y-8">
      <section aria-labelledby="select-awards-heading" className="space-y-4">
        <SectionHeader id="awards" name="Awards" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card bg-white p-6 shadow-lg rounded-xl">
            <FontAwesomeIcon icon={faTrophy} className="text-yellow-500 text-3xl mb-4" />
            <h3 className="font-semibold text-md leading-5">Best of Award for Public Service</h3>
            <p className="text-sm">
              Philadelphia Holocaust Remembrance Foundation Website and Interactive Timeline.
            </p>
          </div>
          <div className="card bg-white p-6 shadow-lg rounded-xl">
            <FontAwesomeIcon icon={faTrophy} className="text-yellow-500 text-3xl mb-4" />
            <h3 className="font-semibold text-md leading-5">Gold Award for Broadcast/Electronic Digital</h3>
            <p className="text-sm">
              Public Service award for the Philadelphia Holocaust Remembrance Foundation Website.
            </p>
          </div>
          <div className="card bg-white p-6 shadow-lg rounded-xl">
            <FontAwesomeIcon icon={faTrophy} className="text-yellow-500 text-3xl mb-4" />
            <h3 className="font-semibold text-md leading-5">Gold Award for Product Microsites</h3>
            <p className="text-sm">
              Digital Advertising award for the IKEA New Movers Microsite.
            </p>
          </div>
          <div className="card bg-white p-6 shadow-lg rounded-xl">
            <FontAwesomeIcon icon={faTrophy} className="text-yellow-500 text-3xl mb-4" />
            <h3 className="font-semibold text-md leading-5">Gold Award for Consumer Websites</h3>
            <p className="text-sm">
              Digital Advertising award for the IKEA Interactive Seasonal Catalog.
            </p>
          </div>
          <div className="card bg-white p-6 shadow-lg rounded-xl">
            <FontAwesomeIcon icon={faTrophy} className="text-yellow-500 text-3xl mb-4" />
            <h3 className="font-semibold text-md leading-5">Web Project of the Year Nominee</h3>
            <p className="text-sm">
              Philadelphia Holocaust Remembrance Foundation website development.
            </p>
          </div>
          <div className="card bg-white p-6 shadow-lg rounded-xl">
            <FontAwesomeIcon icon={faTrophy} className="text-yellow-500 text-3xl mb-4" />
            <h3 className="font-semibold text-md leading-5">Webby Awards Honoree</h3>
            <p className="text-sm">
              IKEA Seasonal Launch Vehicle digital catalog.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
