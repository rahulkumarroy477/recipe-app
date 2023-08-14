import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Sidebar({links,close})
{
    return(
        <div className="sidebar" onClick={close}>
            {links.map(link=>(
                <a href="#!" className="sidebar-link " key={link.name}>
                    <FontAwesomeIcon icon={link.icon}/>
                    {link.name}</a>
            ))}
        </div>

    );
}