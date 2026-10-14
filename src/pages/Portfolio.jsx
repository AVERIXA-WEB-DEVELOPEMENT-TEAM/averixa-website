import { Link } from "react-router"
import { Button, Card, CaseStudyCard } from "../components/ui"
import  works  from "../data/works"


console.log(works)



export default function Portfolio() {
    return (
        <>
        <section className="w-full scroll-mt-24 bg-navy-900 px-6 py-24">
           <div>
            <p className="mb-4 text-body text-secondary">
            SELECTED WORKS
          </p>

          <div className= 'flex w-full items-center justify-between gap-4 py-12'>
            <h2 className="text-header font-sans">Brands we've helped <em className="font-serif text-header text-secondary">grow</em></h2>
            
            <Link to="/services">
            <Button className=" text-secondary! shrink-0 border border-secondary bg-transparent ">Start your project</Button>
            </Link>
            
          </div>

          <p className="mt-auto text-body font-sans">Good work is collaborative. Explore what we made together, what changed and the results that followed</p>
            
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
 
                {works.map((work) => (
                    <CaseStudyCard
                    key={work.id}
                        {...work}
                    />
                ))}
                
        </div>
        </section>

            {/*Fourth Section */}
        <section className="mb-4 w-full bg-navy-950 px-6 py-24">
            <p className="mb-12 text-sub text-secondary">Service We Provide</p>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 font-sans">
                {works.map((work)=><Card key={work.id}>
                    <span>{work.industry}</span>
                </Card>)}

            </div>
        </section>


        


        </>
    )
}