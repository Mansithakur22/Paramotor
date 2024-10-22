import { ServiceCard } from "./serviceCard";

export function Services () {
return (
    <>
     <div class="flex flex-rowcontainer mx-auto text-center p-10 bg-gray">
    <h2 class="text-3xl font-bold text-gray-900 mb-4">
      Pay without worry, trust we wont make you sorry
    </h2>
    <p class="text-gray-500 mb-10 max-w-lg mx-auto">
      Sem morbi non arcu primis porttitor mollis sodales maecenas. Ac nibh sapien senectus sagittis amet porta enim.
    </p>


    </div>
    <ServiceCard/>
    </>
)
}