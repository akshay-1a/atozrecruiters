import React from "react";
import { VelocityScroll } from "@/components/ui/velocity-scroll";
import { companyGroups } from "@/lib/company";
import { H2, P } from "../animations/animated-tags";

export const CompanyShowcase: React.FC = () => {
    return (
        <div className="py-16 bg-gradient-to-b from-background to-background-dark">
            <div className="container mx-auto">
                <H2 className="text-4xl text-slate-800 text-center">Our Esteemed Clients</H2>
                <div className="my-6 text-center">
                    <P className="text-2xl font-semibold italic text-primary animate-pulse">
                        "Connecting Talent with Opportunity, One Success Story at a Time"
                    </P>
                </div>
                <VelocityScroll companies={companyGroups[0]} defaultVelocity={1} />
                <VelocityScroll companies={companyGroups[1]} defaultVelocity={-1} />                
            </div>
        </div>
    );
};
