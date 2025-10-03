import Heading from "@/layouts/marketingLayout/components/Heading";
import Heroes from "@/layouts/marketingLayout/components/Heroes";

export default function MarketingPage() {
    return (
        <main className='max-w-7xl mx-auto pt-20 flex flex-col justify-center items-center md:justify-start text-center gap-y-16 flex-1'>
            <Heading />
            <Heroes />
        </main>
    )
}
