import React, { FunctionComponent, useState, KeyboardEvent, MouseEvent } from 'react';
import styled from 'styled-components';

import { Button } from '@blueprintjs/core';

import { Space, UIDimensions } from './theme';

const Container = styled.div`
  padding: ${Space.med};
`;

const EnterFileContainer = styled.div`
  display: flex;
  align-items; center;
`;
const AddFileButton = styled(Button)`
  margin-left: ${Space.sm};
  min-width: ${UIDimensions.med};
`;

type Props = {
  menuPopup: () => void;
  onCreate: (fileName: string) => void;
};

const CreateFile: FunctionComponent<Props> = ({
  menuPopup,
  onCreate
}) => {
  const [chars, setChars] = useState(0)
  const [fileName, setFileName] = useState('')
  const onInput = (e: KeyboardEvent<HTMLInputElement>) => {
    const element = e.target as HTMLInputElement
    setFileName(element.value);
    setChars(element.value.length);
  }

  const onContextMenu = (event: MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    menuPopup();
  }

  return (
    <Container>
      <EnterFileContainer>
        <input type='text' id='TextField' onKeyUp={onInput} onContextMenu={onContextMenu} />
        <AddFileButton onClick={() => onCreate(fileName)} icon='plus' />
      </EnterFileContainer>
      <div id='StatusBar'>
        {chars} chars in file name
      </div>
    </Container>
  );
};

export default CreateFile;

