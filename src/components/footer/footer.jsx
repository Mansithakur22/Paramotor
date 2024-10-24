export function Footer() {
    return (
      <footer className=" bg-gray-800 text-grey py-8">
        <div className="flex flex-row container mx-auto px-4">
          <div className="mb-6">
            <p className="text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-6">
            <div>
              <h3 className="font-semibold mb-2">Company</h3>
              <ul>
                <li><a href="#" className="hover:underline">Our core Businesses</a></li>
                <li><a href="#" className="hover:underline">Our company purpose</a></li>
                <li><a href="#" className="hover:underline">Jobs & Careers</a></li>
                <li><a href="#" className="hover:underline">Our Responsibility</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Solutions</h3>
              <ul>
                <li><a href="#" className="hover:underline">Compliance Publications</a></li>
                <li><a href="#" className="hover:underline">Annual Reports</a></li>
                <li><a href="#" className="hover:underline">CSR Reports</a></li>
                <li><a href="#" className="hover:underline">Financial documentation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Products</h3>
              <ul>
                <li><a href="#" className="hover:underline">Gift Card</a></li>
                <li><a href="#" className="hover:underline">Prepaid Gift Card</a></li>
                <li><a href="#" className="hover:underline">Our job offers</a></li>
                <li><a href="#" className="hover:underline">Our websites</a></li>
              </ul>
            </div>
          </div>
  
        </div>
          {/* Copyright Section */}
          <div className="border-t border-gray-700 pt-4">
            <p className="text-sm text-gray-400 text-center">
              Copyright © 2024 Paramotordt. All rights reserved.
            </p>
          </div>
      </footer>
    );
  }
  