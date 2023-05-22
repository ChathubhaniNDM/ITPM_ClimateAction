import React, { useRef } from 'react'

import { useReactToPrint } from 'react-to-print';

import {ProjectReportClass} from './ProjectReportClass';



const ProjectReport = () => {

    const componentRef = useRef();

    const handlePrint = useReactToPrint({

        content: () => componentRef.current,

    });

    return (

        <div>          

            <ProjectReportClass ref={componentRef} />

            <button className="btn btn-secondary btn-sm" onClick={handlePrint}>Print this out!</button>

        </div>

    )

}

export default ProjectReport;