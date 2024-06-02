import CTA from "@/components/cta";
import FAQ from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import PainPoint from "@/components/pain-point";
import Pricing from "@/components/pricing";
import Testimonial from "@/components/testimonial";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col gap-8 lg:gap-16">
                <Hero />
                <Testimonial index={0}/>
                <PainPoint />
                <Testimonial index={1}/>
                <Features />
                <Testimonial index={2}/>
                <Pricing/>
                <Testimonial index={3}/>
                <FAQ />
                <Testimonial index={4}/>
                <CTA/>
                <Footer/>
            </div>
        </>
    );
}
