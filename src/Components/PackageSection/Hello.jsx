import { useState } from 'react';
import Accordion from './Accordion';

const Hello = () => {
  const [accordions, setAccordions] = useState([
    {
      id: 1,
      title: 'Accordion 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      isOpen: false,
    },
    {
      id: 2,
      title: 'Accordion 2',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      isOpen: false,
    },
    {
      id: 3,
      title: 'Accordion 3',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      isOpen: false,
    },
  ]);

  const toggleAccordion = (accordionId) => {
    const updatedAccordions = accordions.map((accordion) => {
      if (accordion.id === accordionId) {
        return {
          ...accordion,
          isOpen: !accordion.isOpen,
        };
      }
      return {
        ...accordion,
        isOpen: false,
      };
    });

    setAccordions(updatedAccordions);
  };

  return (
    <div>
      {accordions.map((accordion) => (
        <Accordion
          key={accordion.id}
          title={accordion.title}
          content={accordion.content}
          isOpen={accordion.isOpen}
          onToggle={() => toggleAccordion(accordion.id)}
        />
      ))}
    </div>
  );
};

export default Hello;
