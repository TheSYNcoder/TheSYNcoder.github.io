import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaGithub,
    FaLinkedin,
    FaLinkedinIn,

} from "react-icons/fa";
import { FiInstagram, FiMail } from "react-icons/fi"


const SocialButton = ({ name, link }) => {
    let FBStyles = { color: "blue", fontSize: "1.5em" };
    let TwitterStyles = { color: "#00acee", fontSize: "1.5em" };
    let GithubStyles = { color: "black", fontSize: "1.5em" };
    let InstaStyles = { color: "orange", opacity: "0.6", fontSize: "1.5em" };
    let MailStyles = { color: "red", fontSize: "1.5em" };
    let LinkedinStyles = { color: "#00a0dc", fontSize: "1.5em" };
    return (
        <a href={link} target="_blank">
            <div className="relative flex flex-col items-center group">
                <span className="h-7 w-7 bg-white rounded-3xl flex items-center justify-center p-1">
                    {
                        name === 'fb' ? <FaFacebookF style={FBStyles} /> :
                            name === 'twitter' ? <FaTwitter style={TwitterStyles} /> :
                                name === 'github' ? <FaGithub style={GithubStyles} /> :
                                    name === 'mail' ? <FiMail style={MailStyles} /> :
                                        name === 'insta' ? <FaInstagram style={InstaStyles} /> :
                                            name === 'linkedin' ? <FaLinkedinIn style={LinkedinStyles} /> : <div></div>
                    }
                </span>
                <div className="absolute bottom-0 flex-col items-center hidden mb-8 group-hover:flex">
                    <span className="relative z-10 p-2 mb-2 text-xs leading-none text-black whitespace-no-wrap bg-white shadow-2xl rounded-lg">
                        {
                            name === 'fb' ? "Facebook" :
                                name === 'twitter' ? "theSYNcoder" :
                                    name === 'github' ? "github.com/thesyncoder" :
                                        name === 'mail' ? "contact@shuvayan.com" :
                                            name === 'insta' ? "chroma_mania" :
                                                name === 'linkedin' ? "shuvayan-ghosh-dastidar" : <div></div>
                        }
                    </span>
                    <div class="w-3 h-3 -mt-4 transform rotate-45 bg-white"></div>
                </div>
            </div>
        </a>
    )
}

const Socials = () => {


    return (
        <div className="grid grid-cols-6 gap-2 md:gap-1 w-3/4 mx-auto">
            <SocialButton name="linkedin" link='https://www.linkedin.com/in/shuvayan-ghosh-dastidar' />
            <SocialButton name="github" link='https://github.com/TheSYNcoder/' />
            <SocialButton name="insta" link='https://www.instagram.com/chroma_mania/' />
            <SocialButton name="mail" link='mailto:contact@shuvayan.com' />
            <SocialButton name="twitter" link='https://twitter.com/TheSYNcoder' />
            <SocialButton name="fb" link='https://www.facebook.com/shuvayan.ghoshdastidar' />
        </div>
    )
}

export default Socials;