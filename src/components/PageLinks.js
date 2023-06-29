import { pageLink } from '../data';

const PageLinks = (props) => {
  const { parentClass, childClass } = props;
  return (
    <ul className={parentClass} id="nav-links">
      {pageLink.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.href} className={childClass}>
              {link.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default PageLinks;
