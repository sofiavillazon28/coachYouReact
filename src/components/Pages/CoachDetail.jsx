import Header from "../PrincipalSections/Header"
import Footer from "../PrincipalSections/Footer";
import CoachDetailSection from "../CoachDetail/CoachDetailSection";
import CardElm from "../Molecules/CardElm";
import CardInfo from "../Molecules/CardInfo";

const CoachDetail = () => {

  return (
    <>
      <Header></Header>

      <div className='container'>
        <div className='section mt-60'>
        </div>
      </div>

      <section className="section section-cards flex">
        <div className="container flex gap-xl">
          
          <section>
            <CoachDetailSection />
          </section>

          <section className="flex flex-column gap-xl">
            <CardElm />
            <CardInfo />
          </section>

        </div>
      </section>

      <Footer></Footer>
    </>
  );
};

export default CoachDetail;