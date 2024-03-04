/* eslint-disable jsx-a11y/anchor-is-valid */
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
const stats = [
  { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
  { id: 2, name: 'Assets under holding', value: '$119 trillion' },
  { id: 3, name: 'New users annually', value: '46,000' },
];

const AboutUsScreen = () => {
  return (
    <>
      <Header />
      <div className='font-medium bg-gradient-to-b from-indigo-200 to-indigo-700 text-white h-[400px] text-4xl w-full flex justify-center items-center'>
        About Us
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 lg:mt-24'>
        <div className='lg:ml-14 md:p-6 sm:p-4'>
          <div className='flex flex-col justify-center'>
            <h1 className='text-xl lg:text-2xl font-bold text-gray-800 mt-3'>
              We are the leaders in school Accessories Business
            </h1>
            <p className='text-base lg:text-lg text-gray-500 py-4 lg:py-5'>
              we carry all major school uniforms, id Cards, ties, belts diaries
              and note books along side our very own customized styles to meet
              any schools unique Accessories needs. Offering the highest quality
              most competitive prices. SMC To one stop solution for all your
              accessiones needs.
            </p>
            <p className='text-base lg:text-lg font-bold text-gray-800'>
              Ram Prasad Allungalla
              <br />
              Founder & Managing director SMC pvt ld.
            </p>
          </div>
        </div>
        <div className='lg:mr-14 md:p-6 sm:p-4'>
          <img
            src='https://rankmagics.com/wp-content/uploads/2023/12/Post-1.jpg'
            alt='Hero Illustration'
            loading='eager'
            className='object-cover rounded-2xl max-w-full h-auto'
          />
        </div>
      </div>
      <div className='bg-white py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <dl className='grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3'>
            {stats.map((stat) => (
              <div
                key={stat.id}
                className='mx-auto flex max-w-xs flex-col gap-y-4'
              >
                <dt className='text-base leading-7 text-gray-600'>
                  {stat.name}
                </dt>
                <dd className='order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUsScreen;
