import './styles.css';
import { ItemMenu } from '../itemMenu';

const items = [
  {
    name: 'Summary',
    path: '/',
  },
  {
    name: 'Skills',
    path: '/skills',
  },
  {
    name: 'Experience',
    path: '/experience',
  },
  {
    name: 'Education',
    path: '/education',
  },
  {
    name: 'Side Project',
    path: '/side-project',
  }
]

export const Navigation = () => {
  return(
    <nav className="navigation">
      <ul className='navigationMenu'>
        {items.map(item =>
          <ItemMenu key={item.name} name={item.name} path={item.path} />
        )}
      </ul>
    </nav>
  )
};
