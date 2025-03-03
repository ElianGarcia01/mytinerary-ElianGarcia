import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Footer = () => {

    return (
        <>
            <div className="text-md border-black bg-black text-white flex justify-between flex-wrap gap-8 px-6 py-4 md:justify-around md:p-8">
                <div>
                    <ul className="space-y-4">
                        <li>
                            <NavLink to="/" className="font-bold text-xl md:text-3xl">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/cities">Cities</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Login</NavLink>
                        </li>
                    </ul>
                </div>

                <div>
                    <ul className="space-y-4">
                        <li className="font-bold text-xl md:text-3xl">Contact Us
                        </li>
                        <li>123 Street, City
                        </li>
                        <li>Email: contact@mytinerary.com
                        </li>
                        <li>Phone: (123) 456-7890
                        </li>
                    </ul>
                </div>

                <div>
                    <ul className="space-y-4">
                        <li className="font-bold text-xl md:text-3xl">Follow Us
                        </li>
                        <li>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="inline-block mr-2" /> Facebook
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="inline-block mr-2" /> Instagram
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="inline-block mr-2" /> Twitter
                            </a>
                        </li>
                    </ul>
                </div>
            </div >
        </>
    )
}

export default Footer
