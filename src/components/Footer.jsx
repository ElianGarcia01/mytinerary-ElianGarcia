import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {

    return (
        <>
            <div className="border-t-2 border-black bg-black text-white flex justify-between flex-wrap gap-8 px-6 py-4 md:justify-around md:p-8">
                <div>
                    <ul className="space-y-4">
                        <li>
                            <a className="font-bold text-3xl" href="">Home</a>
                        </li>
                        <li>
                            <a href="">Cities</a>
                        </li>
                        <li>
                            <a href="">Login</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <ul className="space-y-4">
                        <li className="font-bold text-3xl">Contact Us
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
                        <li className="font-bold text-3xl">Follow Us
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
