"use client";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeading";

export default function Education() {
  return (
    <section aria-labelledby="education-heading" role="contentinfo">
      <SectionHeader id="education" name="Education" />
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:space-x-8 mb-8">
          <div className="flex-shrink-0 mb-4 sm:mb-0 md:block hidden">
            <Image
              src="/images/schools/Boston_University_seal.svg"
              alt="Boston University Seal"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <h4 className="mb-0 text-gray-600">Boston University, Questrom</h4>
              <p className="text-right text-md md:block hidden">2005 - Current</p>
            </div>
            <div className="flex justify-between items-top">
              <p className="text-lg text-gray-500 mb-2">MBA Candidate</p>
              <p className="text-right text-sm text-gray-400 md:block hidden">Boston, MA</p>
            </div>
            <p className="text-gray-500 text-sm mb-2">
              Pursuing a Master of Business Administration with a focus on management and leadership in business environments.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:space-x-8">
          <div className="flex-shrink-0 mb-4 sm:mb-0 md:block hidden">
            <Image
              src="/images/schools/Saint_Josephs_University_seal.svg"
              alt="Saint Joseph's University Seal"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <h4 className="mb-0 text-gray-600">Saint Joseph&apos;s University</h4>
              <p className="text-right text-md md:block hidden">1996 - 2001</p>
            </div>
            <div className="flex justify-between items-top">
              <p className="text-lg text-gray-500 mb-2">Dual B.A. in English and Fine Arts</p>
              <p className="text-right text-sm text-gray-400 md:block hidden">Philadelphia, PA</p>
            </div>
            <p className="text-gray-500 text-sm mb-2">
              Dual Bachelor&apos;s degree focusing on English literature and Fine Arts, with a specific emphasis on Digital Design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
