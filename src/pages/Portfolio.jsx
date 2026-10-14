import { Button, Card } from "../components/ui"

export default function Portfolio() {
    return (
        <>
        <section className="w-full scroll-mt-24 bg-navy-900 px-6 py-24">
           <div>
            <p className="mb-4 text-body text-secondary">
            SELECTED WORKS
          </p>

          <div className= 'flex w-full items-center justify-between gap-4'>
            <h2 className="text-header font-sans">Brands we've helped <em className="font-serif text-sub text-secondary">grow</em></h2>
            
            <Button className=" text-secondary! shrink-0 border border-secondary bg-transparent ">Start your project</Button>
          </div>
            
           </div>
        </section>

        {/* Section 2*/}
        <section className="bg-navy-950 flex items-center justify-center font-sans text-body px-6 py-7">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-4 text-center text-body py-2">
                <p className="rounded-md border-none  border-secondary/90  bg-secondary/30 ">All</p>
                <p>Healthcare Technology </p>
                <p>Supply Chain & Logistics</p>
                <p>Creative Agency</p>
                <p>Deep Tech/AI</p>
                <p>E-commerce & Retail</p>
                <p>Financial Services</p>
            </div>
        </section>


        {/* Card section */}
      
        <section className="w-full scroll-mt-24 bg-navy-900 px-6 py-24">
        <div className="  mx-auto max-w-site grid gap-6 grid-cols-2 md:grid-cols-3">

            {/*First card */}
            
            <Card className=" flex h-full min-w-0 flex-col gap-4 p-6">
            <p className="text-blue-700 font-bold">NC</p>

            <p className="text-body font-sans text-muted">
                Financial Services
            </p>

            <p className="text-sub font-sans font-bold">
                NEXUS CAPITAL
            </p>

            <p className="text-body font-sans leading-relaxed">
                Redefining wealth management for the next generation
            </p>

            {/* Service tags */}
            <div className="flex flex-col gap-2">
                <p className="rounded-md bg-secondary/10 px-3 py-1 text-basic text-secondary">
                Website Development
                </p>
                <p className="rounded-md bg-secondary/10 px-3 py-1 text-basic text-secondary">
                Branding
                </p>
                <p className="rounded-md bg-secondary/10 px-3 py-1 text-basic text-secondary">
                Content Creation
                </p>
            </div>

            {/* Result */}
            <p className="mt-auto border-t border-line pt-4 font-semibold text-body">
                Inbound leads grew by 220 percent in four months
            </p>
            </Card>


            {/*Second card */}
            
        <Card className="flex h-full min-w-0 flex-col gap-4 p-6">
        <p className="text-blue-700 font-bold">SH</p>

        <p className="text-body font-sans text-muted">
            Healthcare Technology
        </p>

        <p className="text-sub font-sans font-bold">
            Solara Health
        </p>

        <p className="text-body font-sans leading-relaxed">
            Making personalized healthcare accessible to everyone.
        </p>
        {/* These components are not in UI. Manually styled}
        {/* Service tags */}
        <div className="flex flex-col gap-2">
            <p className="rounded-md bg-secondary/10 px-3 py-1 text-basic text-secondary">
            Digital Marketing
            </p>
            <p className="rounded-md bg-secondary/10 px-3 py-1 text-basic text-secondary">
            Website Development
            </p>
            <p className="rounded-md bg-secondary/10 px-3 py-1 text-basic text-secondary">
            Video Editing
            </p>
        </div>

        {/* Result */}
        <p className="mt-auto border-t border-line pt-4 font-semibold text-body">
            Patient Acquisition Tripled
        </p>
        </Card>

        {/*Third Card */}
        <Card className="flex h-full min-w-0 flex-col gap-4 p-6">
        <p className="text-blue-700 font-bold">OL</p>

        <p className="text-body font-sans text-muted">
            Logistics & Supply Chain
        </p>

        <p className="text-sub font-sans font-bold">
            Obris Logistics
        </p>

        <p className="text-body font-sans leading-relaxed">
            Moving goods smarter across 40+ countries.
        </p>
        {/* These components are not in UI. Manually styled}
        {/* Service tags */}
        <div className="flex flex-col gap-2">
            <p className="rounded-md bg-secondary/10 px-3 py-1 text-basic text-secondary">
            Advertising
            </p>
            <p className="rounded-md bg-secondary/10 px-3 py-1 text-basic text-secondary">
            Social Media Management
            </p>
            <p className="rounded-md bg-secondary/10 px-3 py-1 text-basic text-secondary">
            Branding
            </p>
        </div>

        {/* Result */}
        <p className="mt-auto border-t border-line pt-4 font-semibold text-body">
            Pipeline Value grew by 180 percent
        </p>
        </Card>

        {/*Fourth Card */}
        <Card className="flex h-full min-w-0 flex-col gap-4 p-6">
        <p className="text-blue-700 font-bold">VS</p>

        <p className="text-body font-sans text-muted">
            Healthcare Technology
        </p>

        <p className="text-sub font-sans font-bold">
            Venn Studio
        </p>

        <p className="text-body font-sans leading-relaxed">
            Where art direction meets direction commercial ambition.
        </p>
        {/* These components are not in UI. Manually styled}
        {/* Service tags */}
        <div className="flex flex-col gap-2">
            <p className="rounded-md bg-secondary/10 px-3 py-1 text-basic text-secondary">
            Branding
            </p>
            <p className="rounded-md bg-secondary/10 px-3 py-1 text-basic text-secondary">
            Content Creation
            </p>
            <p className="rounded-md bg-secondary/10 px-3 py-1 text-basic text-secondary">
            Website Development
            </p>
        </div>

        {/* Result */}
        <p className="mt-auto border-t border-line pt-4 font-semibold text-body">
            Booked 6 months in advance post-launch
        </p>
        </Card>

        {/*Fifth card */}
        <Card className="flex h-full min-w-0 flex-col gap-4 p-6">
        <p className="text-blue-700 font-bold">AL</p>

        <p className="text-body font-sans text-muted">
            Deep Tech/AI
        </p>

        <p className="text-sub font-sans font-bold">
            Arctern Labs
        </p>

        <p className="text-body font-sans leading-relaxed">
            Building AI infrastructure for enterprise teams.
        </p>
        {/* These components are not in UI. Manually styled}
        {/* Service tags */}
        <div className="flex flex-col gap-2">
            <p className="rounded-md bg-secondary/10 px-3 py-1 text-basic text-secondary">
            Website Development
            </p>
            <p className="rounded-md bg-secondary/10 px-3 py-1 text-basic text-secondary">
            Digital Marketing
            </p>
            <p className="rounded-md bg-secondary/10 px-3 py-1 text-basic text-secondary">
            Business Development
            </p>
        </div>

        {/* Result */}
        <p className="mt-auto border-t border-line pt-4 font-semibold text-body">
            Closed a 2.4 million seed round after launch
        </p>
        </Card>

        {/*Sixth card */}
        <Card className="flex h-full min-w-0 flex-col gap-4 p-6">
        <p className="text-blue-700 font-bold">MR</p>

        <p className="text-body font-sans text-muted">
            E-Commerce & Retail
        </p>

        <p className="text-sub font-sans font-bold">
            Meridian Retail
        </p>

        <p className="text-body font-sans leading-relaxed">
            Premium fashion, Zero compromise on experience.
        </p>
        {/* These components are not in UI. Manually styled}
        {/* Service tags */}
        <div className="flex flex-col gap-2">
            <p className="rounded-md bg-secondary/10 px-3 py-1 text-basic text-secondary">
            Advertising
            </p>
            <p className="rounded-md bg-secondary/10 px-3 py-1 text-basic text-secondary">
            Video Editing
            </p>
            <p className="rounded-md bg-secondary/10 px-3 py-1 text-basic text-secondary">
            Content Creation
            </p>
        </div>

        {/* Result */}
        <p className="mt-auto border-t border-line pt-4 font-semibold text-body">
            Delivered 4.8 times return on paid campaign
        </p>
        </Card>


        </div>
        </section>

            {/*Fourth Section */}
        <section className="mb-4 w-full bg-navy-950 px-6 py-24">
            <p className="mb-12 text-body text-secondary">Service We Provide</p>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                <Button>Website Development</Button>
                <Button>Content Creation</Button>
                <Button>Digital Marketing</Button>
                <Button>Video Editing</Button>
                <Button>Advertising</Button>
                <Button>Social Media Management</Button>
                <Button>Branding</Button>
                <Button>Business Development</Button>

            </div>
        </section>


        


        </>
    )
}