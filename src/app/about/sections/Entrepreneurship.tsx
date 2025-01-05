"use client";
import Image from "next/image";

export default function Entrepreneurship() {
  return (
    <section
      aria-labelledby="entrepreneurship-heading"
      role="contentinfo"
      className="flex flex-col lg:flex-row lg:items-center lg:justify-between min-h-screen gap-4"
    >
      <div className="space-y-12">
        <div className="flex flex-col sm:flex-row sm:space-x-8">
          <div className="mr-4 flex-shrink-0 md:block hidden">
            <Image
              src="/images/businesses/Allora_Hospitality.svg"
              alt="Allora Hospitality Logo"
              width={80}
              height={80}
              className="object-contain rounded-full"
              />
          </div>
          <div className="flex-1 mb-4">
            <div className="flex justify-between items-top">
              <h4 className="mb-0 text-gray-600">Allora Hospitality</h4>
              <p className="text-right text-md md:block hidden">2016 - 2022</p>
            </div>
            <div className="flex justify-between items-top">
              <p className="text-lg text-gray-500 mb-2">Owner / Operator</p>
              <p className="text-right text-sm text-gray-400 md:block hidden">Haddonfield, NJ</p>
            </div>
            <ul className="text-sm m-0 pl-3 text-gray-500">
              <li>Scaled three successful, award-winning ventures with a focus on customer engagement and operational efficiency.</li>
              <li>Grew business through innovative marketing strategies, achieving a three-month reservation waitlist.</li>
              <li>Fostered community impact by mentoring employees, hiring individuals with employment barriers, sourcing goods globally from small businesses, and by creating the resource-sharing Haddonfield Food & Beverage Collective.</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:space-x-8">
          <div className="mr-4 flex-shrink-0 md:block hidden">
            <Image
              src="/images/businesses/Gearadelphia.png"
              alt="Gearadelphia Logo"
              width={80}
              height={80}
              className="object-contain rounded-full"
              />
          </div>
          <div className="flex-1 mb-4">
            <div className="flex justify-between items-top">
              <h4 className="mb-0 text-gray-600">Gearadelphia</h4>
              <p className="text-right text-md md:block hidden">2013 - 2018</p>
            </div>
            <div className="flex justify-between items-top">
              <p className="text-lg text-gray-500 mb-2">Owner / Operator</p>
              <p className="text-right text-sm text-gray-400 md:block hidden">Philadelphia, PA</p>
            </div>
            <ul className="text-sm m-0 pl-3 text-gray-500">
              <li>Founded and operated an e-commerce business specializing in high-quality gear and apparel for outdoor, travel, and sports activities.</li>
              <li>Managed online presence through WooCommerce, Etsy, and social media, driving brand visibility and customer engagement.</li>
              <li>Handled product sourcing and supplier relations, ensuring top-tier products and efficient inventory management.</li>
              <li>Led marketing and customer service, increasing sales, customer satisfaction, and loyalty through targeted campaigns and exceptional support.</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:space-x-8">
          <div className="mr-4 flex-shrink-0 md:block hidden">
            <Image
              src="/images/businesses/Flyers_Faithful.png"
              alt="Flyers Faithful Logo"
              width={80}
              height={80}
              className="object-contain rounded-full"
              />
          </div>
          <div className="flex-1 mb-4">
            <div className="flex justify-between items-top">
              <h4 className="mb-0 text-gray-600">Flyers Faithful</h4>
              <p className="text-right text-md md:block hidden">2008 - 2014</p>
            </div>
            <div className="flex justify-between items-top">
              <p className="text-lg text-gray-500 mb-2">Owner / Operator</p>
              <p className="text-right text-sm text-gray-400 md:block hidden">Philadelphia, PA</p>
            </div>
            <ul className="text-sm m-0 pl-3 text-gray-500">
              <li>Founded and operated a leading sports media outlet focused on Philadelphia Flyers, with a staff of 30+ people.</li>
              <li>Credentialed as journalists and photographers for major Philadelphia sports teams, covering live events and producing exclusive content.</li>
              <li>Grew audience engagement to 10,000+ social media followers and 30,000 unique visitors per month, prior to selling to a sports radio statoin.</li>
              <li>Led Fundraisers featuring TV stars, athletes, and celebrities, raising significant funds and boosting brand visibility.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}