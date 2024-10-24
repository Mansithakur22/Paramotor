import Image from 'next/image';

export function ReviewBackground() {
  return (
    <>
      <div className="absolute w-full h-full inset-0 bg-transparent grid place-content-center">
        <Image
          className="rounded-full"
          width={150}
          height={150}
          src={'/images/testimonials/testimonial-1.webp'}
          alt="testimonial-1"
        />
      </div>
      <Image
        className="absolute rounded-full left-[12%] top-[20%]"
        width={60}
        height={60}
        src={'/images/testimonials/testimonial-2.webp'}
        alt="testimonial-2"
      />
      <Image
        className="absolute rounded-full top-[32%] left-[20%]"
        width={80}
        height={80}
        src={'/images/testimonials/testimonial-3.webp'}
        alt="testimonial-3"
      />
      <Image
        className="absolute rounded-full top-[38%] left-[28%]"
        width={40}
        height={40}
        src={'/images/testimonials/testimonial-4.webp'}
        alt="testimonial-4"
      />
      <Image
        className="absolute rounded-full top-[58%] left-[18%]"
        width={50}
        height={50}
        src={'/images/testimonials/testimonial-5.webp'}
        alt="testimonial-5"
      />
      <Image
        className="absolute rounded-full top-[20%] right-[12%]"
        width={60}
        height={60}
        src={'/images/testimonials/testimonial-6.webp'}
        alt="testimonial-6"
      />
      <Image
        className="absolute rounded-full top-[31%] right-[20%]"
        width={80}
        height={80}
        src={'/images/testimonials/testimonial-7.webp'}
        alt="testimonial-7"
      />
      <Image
        className="absolute rounded-full top-[38%] right-[28%]"
        width={40}
        height={40}
        src={'/images/testimonials/testimonial-8.webp'}
        alt="testimonial-8"
      />
      <Image
        className="absolute rounded-full top-[58%] right-[18%]"
        width={50}
        height={50}
        src={'/images/testimonials/testimonial-9.webp'}
        alt="testimonial-9"
      />
    </>
  );
}
