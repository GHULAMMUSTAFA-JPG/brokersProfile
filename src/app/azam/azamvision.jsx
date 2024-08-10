import { motion } from "framer-motion";

const Azamvision = () => {
  return (
    <div className="hero-header  hero-header__three align-items-center d-flex position-relative header-gradient">
      <div className="container position-relative">
        <div className="row justify-content-center justify-content-lg-between align-items-center">
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="col-sm-10 col-md-10 col-lg-6 col-xl-6 col-xxl-6 pe-xxl-5"
          >
            {/* Start Title */}
            <h1 className="hero-header_title display-2 fw-bold text-capitalize">
              <p className="text-gold-600">
                PROPERTY
                <br />
              </p>
              <p className="text-gold-600">VISIONARY</p>
            </h1>
            {/* /.End Title */}
            {/* Start Text */}
            <p className="fs-18 mb-5 text-black">
              Azam is the visionary behind CRESCO RE, the dynamic real estate
              brokerage positioned at the convergence of technology, media,
              entertainment, and education.
            </p>
            {/* /.End Text */}
            {/* Start Main Search Content */}
            {/* /.End Main Search Content */}
            <div className="flex flex-col text-black gap-y-3">
              <p>total transactions in UAE Real Estate</p>
              <span className="flex gap-x-4">
                <h1 className="text-gold-600 font-bold text-4xl">
                  AED 1 Billion +
                </h1>
                <p>
                  92% Closing Rate <br />
                  Successful UAE Realtor
                </p>
              </span>
              <div className="border-l border-1 h-26 border-gold-600"></div>
              <div>
                <p className=" font-semibold">
                  Rank # 1 At Cresco Real Estate as Sales HeadSales & Operations
                  Director in 2024
                </p>
                <span className="text-sm text-black">By the team and CEO</span>
              </div>
              <div>
                <p className="font-semibold ">
                  50 Million+ Views on Youtube & Instagram in 2024
                </p>
                <span className="text-sm text-black">
                  Real Estate social media influencer & coach
                </span>
              </div>
            </div>
          </motion.div>
          <div className="col-lg-6 col-xl-6 col-xxl-6 ps-xl-5 d-none d-lg-block">
            <div className="row g-3 g-sm-5 align-items-center">
              <div className="col-6">
                <div className="position-relative">
                  <div className="line-shape-home" />
                  <div
                    className="position-relative image-bg-shape"
                    data-aos="zoom-in"
                  >
                    <div className="rounded-4 overflow-hidden position-relative">
                      <img
                        src="assets/img/am1.jpeg"
                        className="img-fluid position-relative image-parallax z-1"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-6 align-self-end">
                <div
                  className="overflow-hidden rounded-4"
                  data-aos="zoom-in"
                  data-aos-easing="ease"
                  data-aos-delay={200}
                >
                  <img
                    src="assets/img/am3.jpeg"
                    className="img-fluid rounded-4 image-parallax"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Azamvision;
