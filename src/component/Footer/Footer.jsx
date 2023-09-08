import facebook from "../../assets/images/footer/facebook.png"
import youtube from "../../assets/images/footer/youtube.png"
import linkedin from "../../assets/images/footer/linkedin.png"

const Footer = () => {
    return (
        <div className="bg-black text-center text-white p-10">
            <h2 className="text-3xl font-bold   p-8"> Collaborative Task Management App</h2>
            <p className="text-lg font-semibold">Efficiency rules when work is appropriately divided within a team, responsibilities are shared, and tasks are more likely to be finished within a set time frame. Good teamwork also enhances group outcomes and the measurable effectiveness of organizations.</p>
            <p>Copyright © 2023 - All right reserved</p>
            <div className="flex gap-4 invert justify-center p-4">
                <img className="w-10 h-10" src={facebook} alt="" />
                <img className="w-10 h-10" src={youtube} alt="" />
                <img className="w-10 h-10" src={linkedin} alt="" />
            </div>
        </div>
    );
};

export default Footer;