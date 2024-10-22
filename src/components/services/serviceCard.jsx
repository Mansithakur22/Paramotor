import Image from "next/image";

export function ServiceCard() {
  return (
    <>
      <div className="flex w-full hover:shadow-xl p-4 bg-white rounded-lg space-x-4 items-center">
        <div className="flex items-center space-x-4 mb-4 p-4">
          <Image
            src="/images/coins.png"
            width={50}
            height={50}
            className="rounded-full bg-black object-cover"
            alt="Chart Graph"
          />

          <div className="flex flex-col">
            <h2 className="text-lg font-bold">Payment Solution</h2>
            <p className="text-sm text-gray-600">
              Volutpat id molestie quisque lorem tristique nibh consectetur
              fringilla habitant odio urna.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4 mb-4 p-4">
          <Image
            src="/images/chart_graph.png"
            width={50}
            height={50}
            className="rounded-full bg-black object-cover"
            alt="Chart Graph"
          />

          <div className="flex flex-col">
            <h2 className="text-lg font-bold">Growth Business</h2>
            <p className="text-sm text-gray-600">
              Volutpat id molestie quisque lorem tristique nibh consectetur
              fringilla habitant odio urna.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4 mb-4 p-4">
          <Image
            src="/images/ui-user-group.png"
            width={50}
            height={50}
            className="rounded-full bg-black object-cover"
            alt="Chart Graph"
          />

          <div className="flex flex-col">
            <h2 className="text-lg font-bold">Connected People</h2>
            <p className="text-sm text-gray-600">
              Volutpat id molestie quisque lorem tristique nibh consectetur
              fringilla habitant odio urna.
            </p>
          </div>
        </div>
    
      </div>
    </>
    // <>
    //  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    //   <div class="bg-white p-6 rounded-lg shadow-md text-left">
    //     <div class="flex items-center space-x-4 mb-4">
    //       <div class="bg-black text-white p-2 rounded-full">
    //         <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    //           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 14l2-2m0 0l2-2m-2 2l2 2m-2-2v6"></path>
    //         </svg>
    //       </div>
    //       <h3 class="text-xl font-semibold text-gray-800">Payment Solution</h3>
    //     </div>
    //     <p class="text-gray-500">
    //       Volutpat id molestie quisque lorem tristique nibh consectetur fringilla habitant odio urna.
    //     </p>
    //   </div>

    //   <div class="bg-white p-6 rounded-lg shadow-md text-left">
    //     <div class="flex items-center space-x-4 mb-4">
    //       <div class="bg-black text-white p-2 rounded-full">
    //         <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    //           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 9l6-6m0 0l6 6m-6-6v18"></path>
    //         </svg>
    //       </div>
    //       <h3 class="text-xl font-semibold text-gray-800">Growth Business</h3>
    //     </div>
    //     <p class="text-gray-500">
    //       Volutpat id molestie quisque lorem tristique nibh consectetur fringilla habitant odio urna.
    //     </p>
    //   </div>

    //   <div class="bg-white p-6 rounded-lg shadow-md text-left">
    //     <div class="flex items-center space-x-4 mb-4">
    //       <div class="bg-black text-white p-2 rounded-full">
    //         <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    //           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7h18M9 3v2m6-2v2m-6 16v-2m6 2v-2m-8 2h8a2 2 0 002-2V9a2 2 0 00-2-2H8a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
    //         </svg>
    //       </div>
    //       <h3 class="text-xl font-semibold text-gray-800">Connected People</h3>
    //     </div>
    //     <p class="text-gray-500">
    //       Volutpat id molestie quisque lorem tristique nibh consectetur fringilla habitant odio urna.
    //     </p>
    //   </div>
    // </div>
    // </>
  );
}
