import { socialLinks } from "../data";

const SocialLinks = (props) => {
  const {parentClass, childClass} = props
  return (
    <ul className={parentClass}>
      {socialLinks.map((link) => {
        return (
          <li key={link.id}>
            <a
              href={link.href}
              target="_blank"
              className={childClass}
              rel="noreferrer"
            >
              <i className={`fab fa-${link.class}`}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
export default SocialLinks