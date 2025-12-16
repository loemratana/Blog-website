import { useLocation } from 'react-router-dom';

// Your nav items (same as your navbar)
const navItems = [
  { path: '/', link: 'Home' },
  { path: '/services', link: 'Services' },
  { path: '/about', link: 'About' },
  { path: '/blogs', link: 'Blogs' },
  { path: '/contact', link: 'Contact' },
];

// Custom banner titles per page
const bannerTitles = {
  '/': 'Welcome to Our Blogs',
  '/services': 'Explore Our Services',
  '/about': 'About Our Mission',
  '/blogs': 'Latest Blogs & Insights',
  '/contact': 'Get in Touch Today',
};

const Banner = () => {
  const location = useLocation();
  const pathname = location.pathname;

  // Get current page title
  const currentTitle = bannerTitles[pathname] || 'Welcome';

  return (
    <div className="overflow-x-hidden bg-gray-50">
      {/* Hero Section */}
      <section className="relative px-12 pt-8 sm:py-10 lg:pt-16 xl:pb-0 justify-center">
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <div class="section-center">
  
 </div>
            <p className="inline-flex px-4 py-2 text-gray-900 border text-base border-gray-200 rounded-full font-pj">
              Made by Developers, for Developers
            </p>

            {/* Dynamic H1 - Changes based on current route */}
            <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj animate-fade-in">
              {currentTitle}
            </h1>

            <p className="max-w-md mx-auto mt-5 text-base leading-7 text-gray-600 font-inter">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error consectetur maxime eum, quam ratione, quas obcaecati maiores perferendis officia deserunt illo veniam, animi suscipit saepe velit optio dolorum corporis a.
            </p>

            <div className="relative inline-flex mt-10 group">
              <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
              <a
                href="#"
                className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Get access to 4,958 resources
              </a>
            </div>
          </div>

          <div className="mt-16 md:mt-20">
            <img
              className="object-cover object-top w-full h-auto scale-150 2xl:max-w-screen-2xl xl:scale-100"
              src="https://d33wubrfki0l68.cloudfront.net/54780decfb9574945bc873b582cdc6156144a2ba/d9fa1/images/hero/4/illustration.png"
              alt="Hero illustration"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;