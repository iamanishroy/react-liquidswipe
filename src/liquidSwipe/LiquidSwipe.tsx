import React, { ReactElement } from 'react';
import { useRef, useState, useEffect, FC } from 'react';
import Page from './Page';
import { LQSW_CONTAINER } from './Styled';

export default function LiquidSwipe({ components, style }: { components: FC[], style?: any }): ReactElement {
  const sizeOfSwipe = components.length;
  const [isActive, setActive] = useState(0);
  const [elm, setElm] = useState<ReactElement>();
  const parentElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setElm(
      <Page
        key={isActive}
        index={isActive}
        prev={components[isActive - 1] || null}
        current={components[isActive]}
        next={components[isActive + 1] || null}
        setActive={setActive}
        parentElement={parentElement} />
    );
  }, [isActive, components]);

  if (sizeOfSwipe !== 0) {
    return (
      <>
        <LQSW_CONTAINER ref={parentElement} style={style}>
          {elm}
        </LQSW_CONTAINER>
      </>
    );
  } else {
    return <></>;
  }
};
