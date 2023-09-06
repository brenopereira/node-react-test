import React, { useState } from 'react';
import {
  Container,
  Content,
  ModalContainer,
  ModalContent,
  ModalOverlay,
} from './styles';

const ListCopiesModal = ({
  show,
  setShow,
  copies,
}: {
  copies: any[];
  show: boolean;
  setShow: (status: boolean) => void;
}) => {
  const handleClick = () => {
    setShow(false);
  };

  if (!show) return null;

  return (
    <Container>
      <Content>
        <ModalContainer>
          <ModalContent>
            <table>
              <thead>
                <tr>
                  <th>ISBN</th>
                  <th>Código</th>
                </tr>
              </thead>
              <tbody>
                {copies.map(
                  (copy: { id: string; copy_code: string; isbn: string }) => (
                    <tr key={copy.id}>
                      <td>{copy.copy_code}</td>
                      <td>{copy.isbn}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </ModalContent>
        </ModalContainer>
      </Content>
      <ModalOverlay onMouseDown={handleClick} />
    </Container>
  );
};

export default ListCopiesModal;
