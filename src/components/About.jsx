import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4 text-center" >
                        Jewellery (or jewelry in AmE) consists of decorative items worn for personal adornment, such as brooches, rings, necklaces, earrings, pendants, bracelets, and cufflinks. Jewellery may be attached to the body or the clothes. From a western perspective, the term is restricted to durable ornaments, excluding flowers for example. For many centuries metal such as gold often combined with gemstones, has been the normal material for jewellery, but other materials such as glass, shells and other plant materials may be used.

Jewellery is one of the oldest types of archaeological artefact – with 100,000-year-old beads made from Nassarius shells thought to be the oldest known jewellery.[1] The basic forms of jewellery vary between cultures but are often extremely long-lived; in European cultures the most common forms of jewellery listed above have persisted since ancient times, while other forms such as adornments for the nose or ankle, important in other cultures, are much less common.
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/about.png" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
