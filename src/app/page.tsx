import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import Hero from '@/components/home/Hero';
import Logement from '@/components/home/Logement';
import Couchages from '@/components/home/Couchages';
import Equipements from '@/components/home/Equipements';
import Exterieur from '@/components/home/Exterieur';
import Localisation from '@/components/home/Localisation';
import Teletravail from '@/components/home/Teletravail';
import CTAReservation from '@/components/home/CTAReservation';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Logement />
        <Couchages />
        <Equipements />
        <Exterieur />
        <Localisation />
        <Teletravail />
        <CTAReservation />
      </main>
      <Footer />
    </>
  );
}
