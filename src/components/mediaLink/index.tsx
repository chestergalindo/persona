import './styles.css';
import { SiGithub } from 'react-icons/si';
import { IoMail } from 'react-icons/io5';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { GrLinkedin } from 'react-icons/gr';

export const MediaLink = () => {
  return (
    <div className="mediaLink">
      <a href="">
        <IoMail />
      </a>
      <a href="">
        <BsFillTelephoneFill />
      </a>
      <a href="">
        <SiGithub />
      </a>
      <a href="">
        <GrLinkedin />
      </a>
    </div>
  );
};
