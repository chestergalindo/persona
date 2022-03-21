import './styles.css';

interface IItemMenu {
  path: string | undefined;
  name: string;
}

export const ItemMenu = (props: IItemMenu) => {
  return (
    <li>
      <a className="itemMenu" href={props.path}>
        {props.name}
      </a>
    </li>
  );
};
