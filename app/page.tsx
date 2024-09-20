import Image from 'next/image'
import Link from 'next/link'

const category = [
  {
    name: 'Neckleces',
    image: '/images/neckles-category.png',
  },
  {
    name: 'Earrings',
    image: '/images/earring-category.png',
  },
  {
    name: 'Bracclets',
    image: '/images/bracclets-category.png',
  },
  {
    name: 'Rings',
    image: '/images/rings-category.png',
  },
  {
    name: 'Charms',
    image: '/images/charms-category.png',
  },
]

export default function Home() {
  return (
    <>
      <section className="md:bg-[url('/images/swarna-home-banner.png')] bg-[url('/images/swarna-home-banner-mob.png')] bg-center bg-cover w-full xl:aspect-[1512/649] md:aspect-[1512/777] flex md:items-end items-center max-md:justify-center p-8 max-md:h-dvh">
        <div className="py-12">
          <h1 className="font-garamond text-5xl md:text-7xl text-background max-md:text-center">
            the autumn equinox
          </h1>
          <p className="text-background mt-4 mb-12 max-md:text-center">
            Fall has arrived. <br /> Shop for our new releases starting today.
          </p>
          <div className="mt-4 max-md:text-center">
            <Link
              href="#"
              className="p-4 text-background border border-background uppercase"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>
      <section className="md:px-16 md:py-12">
        <p className="md:text-4xl text-2xl font-garamond text-center">
          Shop by category
        </p>
        <p className="md:text-2xl text-lg font-garamond text-center mt-2 italic">
          Indulge in what we offer.
        </p>
        <div className="grid md:grid-cols-5 grid-cols-2 mt-16 md:gap-12">
          {category.map((item, index) => (
            <Link href="#" key={index}>
              <Image
                src={item.image}
                alt={item.name}
                width={200}
                height={200}
                className="w-full"
              />
              <p className="text-center font-garamond text-lg">{item.name}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
