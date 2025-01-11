import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core'; // Import Viewer components
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';
import Header from '../components/Header';
import '../style.css';
import Contact from "../components/Contact";

const WorkExperience = () => {
    const toolbar = toolbarPlugin({
        items: (items) => {
            return {
                ...items,
                // Customize the toolbar to show only zoom, download, and print buttons
                toolbarItems: [
                    items.zoomOutButton,  // Zoom out button
                    items.zoomInButton,   // Zoom in button
                    items.printButton,    // Print button
                    items.downloadButton, // Download button
                ],
            };
        },
    });

    return (<div>
        <Header />

        <div
            className={"background-section"}
            style={{
                backgroundImage: "url('/images/Background.png')",
            }}>
            <p className={"resume"}>Resume</p>

            <div className="pdf-viewer">
                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.7.107/build/pdf.worker.min.js`}>
                    <div style={{height: '600px', display: 'flex', flexDirection: 'column'}}>
                        {/* Toolbar for Download and Other Controls */}
                        <div style={{borderBottom: '1px solid #ccc'}}>
                            {toolbar.Toolbar()}
                        </div>

                        {/* PDF Viewer with Zoom */}
                        <Viewer
                            fileUrl={"/pdf/resume.pdf"}
                            plugins={[toolbar]} // Use the zoom and toolbar plugins
                        />
                    </div>
                </Worker>
            </div>

            <Contact/>
        </div>
    </div>)
}

export default WorkExperience;