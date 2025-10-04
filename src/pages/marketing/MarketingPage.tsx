import Heading from "@/layouts/marketingLayout/components/Heading";
import Heroes from "@/layouts/marketingLayout/components/Heroes";
import SEO from "../components/SEO";

export default function MarketingPage() {
    return (
        <main className='max-w-7xl mx-auto pt-20 flex flex-col justify-center items-center md:justify-start text-center gap-y-16 flex-1'>
            <SEO title="Homepage" description="organize your thoughts with notion" />
            <Heading />
            <Heroes />
        </main>
    )
}
