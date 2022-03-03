import { Container, Content} from './styles';

interface IProgressBarProps {
  totalCompleted: number;
};

const Progressbar = (props: IProgressBarProps) => {
  const { totalCompleted } = props;
  return (
    <Container>
      <Content 
        totalCompleted={totalCompleted}
      >
        <span>{`${totalCompleted.toFixed(2)}%`}</span>
      </Content>
    </Container>
  );
};

export default Progressbar;