//* Packages
import React, { useState } from 'react';
import styled from 'styled-components';

//* Utilities
import { Toggle, spacing } from 'utilities';

//* Elements
import {
  Card,
  CardHeader,
  CardBody,
  CardDisplay,
  CardImage,
  CardSearchForm,
  Modal
} from 'elements';

const CardSearch = () => {
  const [searchWasSuccessful, setSearchWasSuccessful] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  return (
    <>
      {' '}
      <Card>
        <CardHeader as='h2'>Oracle Search</CardHeader>
        <CardBody>
          <CardSearchForm
            setSearchResults={setSearchResults}
            setSearchWasSuccessful={setSearchWasSuccessful}
          />
        </CardBody>
      </Card>
      {searchWasSuccessful && (
        <ResultsCard>
          <CardHeader>Results</CardHeader>
          <CardBody>
            <CardDisplay>
              {searchResults.map(card => (
                <article key={card.id}>
                  <Toggle>
                    {({ isToggled, setToggle }) => (
                      <>
                        <CardImage
                          src={card.img_url}
                          alt={card.name}
                          onClick={() => setToggle(true)}
                        />

                        {isToggled && (
                          <Modal isToggled={isToggled} setToggle={setToggle}>
                            <CardHeader>{card.name}</CardHeader>
                            <CardBody>
                              <img src={card.img_url} alt={card.name} />
                            </CardBody>
                          </Modal>
                        )}
                      </>
                    )}
                  </Toggle>
                </article>
              ))}
            </CardDisplay>
          </CardBody>
        </ResultsCard>
      )}
    </>
  );
};

export default CardSearch;

//* Styled Components
const ResultsCard = styled(Card)`
  margin: ${spacing.lg} 0;
`;
