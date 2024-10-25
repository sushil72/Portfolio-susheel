import java from "../assets/logos/java.png";
import dbms from "../assets/logos/dbms.png";
import net from "../assets/logos/networking.png";
import eclipse from "../assets/logos/eclipse.png";
import processor from "../assets/logos/processor.png";

const Bar = () => {
    return (
        <div className="bar bg-slate-950 py-8 px-4 md:px-10">
            <div>
                <ul className="flex flex-wrap justify-around items-center gap-4 md:gap-8">
                    <li className="w-16 md:w-20 lg:w-24"><img src={dbms} className="opacity-60 w-full" alt="DBMS" /></li>
                    <li className="w-16 md:w-20 lg:w-24"><img src={eclipse} className="opacity-60 w-full" alt="Eclipse" /></li>
                    <li className="w-16 md:w-20 lg:w-24"><img src={java} className="opacity-60 w-full" alt="Java" /></li>
                    <li className="w-16 md:w-20 lg:w-24"><img src={processor} className="opacity-60 w-full" alt="Processor" /></li>
                    <li className="w-16 md:w-20 lg:w-24"><img src={net} className="opacity-60 w-full" alt="Networking" /></li>
                </ul>
            </div>
        </div>
    );
}

export default Bar;
