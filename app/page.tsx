import Image from 'next/image'
import Link from 'next/link'

const category = [
  {
    name: 'Neckleces',
    image: '/images/neckles-category.png',
    link: '/neckleces',
  },
  {
    name: 'Earrings',
    image: '/images/earring-category.png',
    link: '/earrings',
  },
  {
    name: 'Bracclets',
    image: '/images/bracclets-category.png',
    link: '/bracelets',
  },
  {
    name: 'Rings',
    image: '/images/rings-category.png',
    link: '/ring',
  },
  {
    name: 'Charms',
    image: '/images/charms-category.png',
    link: '/charms',
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
              href="/neckleces"
              className="p-4 text-background border border-background uppercase"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>
      <section className="md:px-16 md:py-12 py-8 px-8">
        <p className="md:text-4xl text-2xl font-garamond text-center">
          Shop by category
        </p>
        <p className="md:text-2xl text-lg font-garamond text-center mt-2 italic">
          Indulge in what we offer.
        </p>
        <div className="grid md:grid-cols-5 grid-cols-2 mt-16 md:gap-12 gap-8">
          {category.map((item, index) => (
            <Link href={item.link} key={index}>
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
      <section className="md:px-16 md:py-12 py-8">
        <div className="flex items-center justify-center relative">
          <div className="md:w-2/5 w-full">
            <Image
              src="/images/golden-hour.png"
              alt="Golden Hour"
              width={200}
              height={200}
              className="w-full max-md:hidden"
            />
            <Image
              src="/images/golden-hour-mob.png"
              alt="Golden Hour"
              width={200}
              height={200}
              className="w-full md:hidden"
            />
          </div>
          <div className="md:w-3/5 md:px-12 px-6 max-md:absolute max-md:text-background top-1/2 max-md:-translate-y-1/4">
            <p className="md:text-4xl text-3xl font-garamond mb-8">
              During the golden hour.
            </p>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus
              vulputate eu scelerisque felis imperdiet proin fermentum. Cras
              semper auctor neque vitae tempus quam pellentesque. Elementum
              sagittis vitae et leo duis.{' '}
            </p>
            <p className="mb-12">
              Elementum sagittis vitae et leo duis. Libero nunc consequat
              interdum varius. Habitant morbi tristique senectus et netus et
              malesuada fames ac.{' '}
            </p>
            <div className="mt-4">
              <button className="p-4 border md:border-text border-background uppercase w-fit">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="md:px-16 md:py-12 py-8">
        <div className="flex items-center justify-center relative">
          <div className="md:w-3/5 md:px-12 px-6 max-md:absolute top-1/2 max-md:-translate-y-1/4 max-md:text-background">
            <p className="md:text-4xl text-3xl font-garamond mb-8">
              Gifts of the season
            </p>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus
              vulputate eu scelerisque felis imperdiet proin fermentum. Cras
              semper auctor neque vitae tempus quam pellentesque. Elementum
              sagittis vitae et leo duis.
            </p>
          </div>
          <div className="md:w-2/5 w-full max-md:aspect-[7/8]">
            <Image
              src="/images/gift-of-season.png"
              alt="Gift of Season"
              width={200}
              height={200}
              className="w-full max-md:hidden"
            />
            <Image
              src="/images/gift-of-season.png"
              alt="Gift of Season"
              width={200}
              height={200}
              className="w-full md:hidden h-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="md:px-16 md:py-12 py-8 px-8">
        <p className="md:text-4xl text-2xl font-garamond text-center">Gifts</p>
        <p className="md:text-2xl text-lg font-garamond text-center mt-2 italic">
          Appreciate them materialistically.
        </p>
        <div className="flex items-center md:gap-12 max-md:flex-col mt-12">
          <div className="gift-layout">
            <div className="relative gift-1">
              <Image
                src="/images/best-selling-gifts.png"
                alt="Best Seller"
                width={1337}
                height={400}
                className="w-full h-full object-cover"
              />
              <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-garamond md:text-4xl text-2xl italic text-white">
                Best Selling Gifts
              </p>
            </div>
            <div className="relative gift-2">
              <Image
                src="/images/under-100.png"
                alt="Best Seller"
                width={1337}
                height={400}
                className="w-full h-full object-cover"
              />
              <p className="absolute bottom-0  md:left-10 left-1/2 max-md:-translate-x-1/2 -translate-y-1/2 font-garamond md:text-3xl text-lg italic text-white">
                Gifts $100 and Under
              </p>
            </div>
            <div className="relative gift-3">
              <Image
                src="/images/100-to-200.png"
                alt="Best Seller"
                width={1337}
                height={400}
                className="w-full h-full object-cover"
              />
              <p className="absolute bottom-0  md:left-10 left-1/2 max-md:-translate-x-1/2 -translate-y-1/2 font-garamond md:text-3xl text-lg italic text-white">
                Gifts $100 to $200
              </p>
            </div>
            <div className="relative gift-4">
              <Image
                src="/images/200-to-300.png"
                alt="Best Seller"
                width={1337}
                height={400}
                className="w-full h-full object-cover"
              />
              <p className="absolute bottom-0  md:left-10 left-1/2 max-md:-translate-x-1/2 -translate-y-1/2 font-garamond md:text-3xl text-lg italic text-white">
                Gifts $200 and $300
              </p>
            </div>
            <div className="relative gift-5">
              <Image
                src="/images/300-to-above.png"
                alt="Best Seller"
                width={1337}
                height={400}
                className="w-full h-full object-cover"
              />
              <p className="absolute bottom-0  md:left-10 left-1/2 max-md:-translate-x-1/2 -translate-y-1/2 font-garamond md:text-3xl text-lg italic text-white">
                Gifts $300 and Above
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="md:px-16 md:py-12 py-8">
        <div className="flex items-center justify-center relative">
          <div className="md:w-2/5 w-full">
            <Image
              src="/images/what-we-made.png"
              alt="What we made"
              width={200}
              height={200}
              className="w-full max-md:hidden"
            />
            <Image
              src="/images/what-we-made-mob.png"
              alt="What we made"
              width={200}
              height={200}
              className="w-full md:hidden"
            />
          </div>
          <div className="md:w-3/5 md:px-12 px-6 max-md:absolute max-md:text-background top-1/2 max-md:-translate-y-1/4">
            <p className="md:text-4xl text-3xl font-garamond mb-8">
              What were we made for?
            </p>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus
              vulputate eu scelerisque felis imperdiet proin fermentum. Cras
              semper auctor neque vitae tempus quam pellentesque. Elementum
              sagittis vitae et leo duis.
            </p>
            <p className="mb-12">
              Elementum sagittis vitae et leo duis. Libero nunc consequat
              interdum varius. Habitant morbi tristique senectus et netus et
              malesuada fames ac.
            </p>
            <div className="mt-4">
              <button className="p-4 border md:border-text border-background uppercase w-fit">
                About Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
