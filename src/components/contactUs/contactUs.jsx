import { Button, Transition } from '../ui';

export function ContactUs() {
  return (
    <div
      className="
        flex md:flex-row justify-between max-w-7xl mx-auto items-center gap-8 
        px-20 py-14 rounded-2xl bg-primary
      "
    >
      <Transition>
        <h2 className="mt-4 mb-3 text-white text-2xl md:text-3xl font-semibold">
          Have any questions?
        </h2>
        <p className="text-white text-lg md:text-xl">
          Ask us anything. Do you have a question you want us to answer?
        </p>
      </Transition>
      <div>
        <Transition>
          <Button
            className="
              py-5 px-8 bg-white text-black hover:text-white rounded-xl
            "
          >
            Contact Us
          </Button>
        </Transition>
      </div>
    </div>
  );
}
