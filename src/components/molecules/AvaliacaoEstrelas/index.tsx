import React from 'react';

import StarFull from '@icons/star-full.svg';
import StarEmpty from '@icons/star-empty.svg';

import Row from '@atoms/Row';

interface IAvaliacaoEstrelasProps {
  avaliacao: number;
  children?: React.ReactNode;
}

const AvaliacaoEstrelas: React.FC<IAvaliacaoEstrelasProps> = ({
  avaliacao,
}) => {
  return (
    <Row>
      {avaliacao >= 1 ? <StarFull /> : <StarEmpty />}
      {avaliacao >= 2 ? <StarFull /> : <StarEmpty />}
      {avaliacao >= 3 ? <StarFull /> : <StarEmpty />}
      {avaliacao >= 4 ? <StarFull /> : <StarEmpty />}
      {avaliacao >= 5 ? <StarFull /> : <StarEmpty />}
    </Row>
  );
};

export default AvaliacaoEstrelas;
