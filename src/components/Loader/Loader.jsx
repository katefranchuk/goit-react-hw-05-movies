import { RotatingLines } from 'react-loader-spinner';
import { Overlay } from 'components/Overlay/Overlay.styled';

export const Loader = () => {
  return (
    <Overlay>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="140"
        visible={true}
      />
    </Overlay>
  );
};
