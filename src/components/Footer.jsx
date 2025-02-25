import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {

    return (
        <>
            <div className="border-t-2 border-black bg-[#2E4A38] flex justify-around text-gray-300 p-8">
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
                        <li>
                            <a className="font-bold text-3xl" href="">Contact Us</a>
                        </li>
                        <li>
                            <a href="">123 Street, City</a>
                        </li>
                        <li>
                            <a href="">Email: contact@mytinerary.com</a>
                        </li>
                        <li>
                            <a href="">Phone: (123) 456-7890</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <ul className="space-y-4">
                        <li>
                            <a className="font-bold text-3xl" href="">Follow Us</a>
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
