import React, { useState, useEffect } from 'react';

import { useCheckbox, useForm } from 'hooks';
import { Toggle } from 'utilities';
import { Button, CheckboxInput, Form, FormInput, FormLabel } from 'elements';

<<<<<<< HEAD
const CardSearchForm = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [values, handleFormChange] = useForm({ queryInput: '' });
    const [checkboxes, handleCheckboxChange] = useCheckbox({
        whiteCheckbox: false,
        blueCheckbox: false,
        blackCheckbox: false,
        redCheckbox: false,
        greenCheckbox: false,
        colorlessCheckbox: false,
        cmc0Checkbox: false,
        cmc1Checkbox: false,
        cmc2Checkbox: false,
        cmc3Checkbox: false,
        cmc4Checkbox: false,
        cmc5Checkbox: false,
        cmc6Checkbox: false,
        cmc7Checkbox: false,
        cmc8Checkbox: false,
        cmc9Checkbox: false,
        cmc10Checkbox: false,
    });
=======
const CardSearchForm = ({ setSearchResults, setSearchWasSuccessful }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [values, handleFormChange] = useForm({ queryInput: "" });
  const [checkboxes, handleCheckboxChange] = useCheckbox({
    whiteCheckbox: false,
    blueCheckbox: false,
    blackCheckbox: false,
    redCheckbox: false,
    greenCheckbox: false,
    colorlessCheckbox: false,
    cmc0Checkbox: false,
    cmc1Checkbox: false,
    cmc2Checkbox: false,
    cmc3Checkbox: false,
    cmc4Checkbox: false,
    cmc5Checkbox: false,
    cmc6Checkbox: false,
    cmc7Checkbox: false,
    cmc8Checkbox: false,
    cmc9Checkbox: false,
    cmc10Checkbox: false
  });
>>>>>>> 2300975d4aed7f46148aac5e939a0f5192bd6d59

    const checkboxItems = {
        colors: [
            { name: 'whiteCheckbox', label: 'White' },
            { name: 'blueCheckbox', label: 'Blue' },
            { name: 'blackCheckbox', label: 'Black' },
            { name: 'redCheckbox', label: 'Red' },
            { name: 'greenCheckbox', label: 'Green' },
            { name: 'colorlessCheckbox', label: 'Colorless' },
        ],

        manaCosts: [
            { name: 'cmc0Checkbox', label: '0' },
            { name: 'cmc1Checkbox', label: '1' },
            { name: 'cmc2Checkbox', label: '2' },
            { name: 'cmc3Checkbox', label: '3' },
            { name: 'cmc4Checkbox', label: '4' },
            { name: 'cmc5Checkbox', label: '5' },
            { name: 'cmc6Checkbox', label: '6' },
            { name: 'cmc7Checkbox', label: '7' },
            { name: 'cmc8Checkbox', label: '8' },
            { name: 'cmc9Checkbox', label: '9' },
            { name: 'cmc10Checkbox', label: '10+' },
        ],
    };

    useEffect(() => {
        let query;
        const card = [];

        function apiCall() {
            console.log('in api call');
            fetch(`https://api.scryfall.com/cards/search?q=${query}`)
                .then(function(response) {
                    return response.json();
                })
                .then(function(myJson) {
                    console.log(myJson.data);
                    let data = myJson.data;

<<<<<<< HEAD
                    for (let i = 0; i < data.length; i++) {
                        // const cardFaces = data[i].card_faces[0].image_uris;
                        // const cardImg = data[i].image_uris;
                        // const card = {};
                        // //add name
                        // if (data[i].name) {
                        //     card.name = data[i].name;
                        // }
                        // //add image
                        // if (cardFaces) {
                        //     if (cardFaces.normal) {
                        //         card.img_url = cardFaces.normal;
                        //     } else if (cardFaces.samll) {
                        //         card.img_url = cardFaces.small;
                        //     } else if (cardFaces.large) {
                        //         card.img_url = cardFaces.large;
                        //     } else if (cardFaces.png) {
                        //         card.img_url = cardFaces.png;
                        //     } else if (cardFaces.border_crop) {
                        //         card.img_url = cardFaces.border_crop;
                        //     } else if (cardFaces.art_crop) {
                        //         card.img_url = cardFaces.art_crop;
                        //     }
                        // }
                        // if (cardImg) {
                        //     if (cardImg.normal) {
                        //         card.img_url = cardImg.normal;
                        //     } else if (cardImg.samll) {
                        //         card.img_url = cardImg.small;
                        //     } else if (cardImg.large) {
                        //         card.img_url = cardImg.large;
                        //     } else if (cardImg.png) {
                        //         card.img_url = cardImg.png;
                        //     } else if (cardImg.border_crop) {
                        //         card.img_url = cardImg.border_crop;
                        //     } else if (cardImg.art_crop) {
                        //         card.img_url = cardImg.art_crop;
                        //     }
                        // }

                        if (data[i].card_faces) {
                            card[i] = {
                                id: i,
                                name: data[i].name,
                                color: data[i].card_faces[0].colors,
                                img_url: data[i].card_faces[0].image_uris.normal,
                                CMC: data[i].card_faces[0].cmc,
                                mana_cost: data[i].card_faces[0].mana_cost,
                                price: data[i].prices,
                            };
                        } else {
                            card[i] = {
                                id: i,
                                name: data[i].name,
                                color: data[i].colors,
                                img_url: data[i].image_uris,
                                CMC: data[i].cmc,
                                mana_cost: data[i].mana_cost,
                                price: data[i].prices,
                            };
                        }
                    }
                    console.log(card);
                    //data to save:
                    //CMC, colors, image_url, mana_cost, name, prices,
                    setFormSubmitted(false);
                });
        }
=======
          for (let i = 0; i < data.length; i++) {
            // const cardFaces = data[i].card_faces[0].image_uris;
            // const cardImg = data[i].image_uris;
            // const card = {};
            // //add name
            // if (data[i].name) {
            //   card.name = data[i].name;
            // }
            // //add image
            // if (cardFaces) {
            //   if (cardFaces.normal) {
            //     card.img_url = cardFaces.normal;
            //   } else if (cardFaces.samll) {
            //     card.img_url = cardFaces.small;
            //   } else if (cardFaces.large) {
            //     card.img_url = cardFaces.large;
            //   } else if (cardFaces.png) {
            //     card.img_url = cardFaces.png;
            //   } else if (cardFaces.border_crop) {
            //     card.img_url = cardFaces.border_crop;
            //   } else if (cardFaces.art_crop) {
            //     card.img_url = cardFaces.art_crop;
            //   }
            // }
            // if (cardImg) {
            //   if (cardImg.normal) {
            //     card.img_url = cardImg.normal;
            //   } else if (cardImg.samll) {
            //     card.img_url = cardImg.small;
            //   } else if (cardImg.large) {
            //     card.img_url = cardImg.large;
            //   } else if (cardImg.png) {
            //     card.img_url = cardImg.png;
            //   } else if (cardImg.border_crop) {
            //     card.img_url = cardImg.border_crop;
            //   } else if (cardImg.art_crop) {
            //     card.img_url = cardImg.art_crop;
            //   }
            // }

            if (data[i].card_faces) {
              card[i] = {
                id: i,
                name: data[i].name,
                color: data[i].card_faces[0].colors,
                img_url: data[i].card_faces[0].image_uris.normal,
                CMC: data[i].card_faces[0].cmc,
                mana_cost: data[i].card_faces[0].mana_cost,
                price: data[i].prices
              };
            } else {
              card[i] = {
                id: i,
                name: data[i].name,
                color: data[i].colors,
                img_url: data[i].image_uris,
                CMC: data[i].cmc,
                mana_cost: data[i].mana_cost,
                price: data[i].prices
              };
            }
          }
          console.log(card);
          //data to save:
          //CMC, colors, image_url, mana_cost, name, prices,

          setSearchWasSuccessful(true);
          setSearchResults(card)

          setFormSubmitted(false);
        });
    }
>>>>>>> 2300975d4aed7f46148aac5e939a0f5192bd6d59

        const buildSearchQuery = () => {
            const {
                whiteCheckbox,
                blueCheckbox,
                blackCheckbox,
                redCheckbox,
                greenCheckbox,
                colorlessCheckbox,
                cmc0Checkbox,
                cmc1Checkbox,
                cmc2Checkbox,
                cmc3Checkbox,
                cmc4Checkbox,
                cmc5Checkbox,
                cmc6Checkbox,
                cmc7Checkbox,
                cmc8Checkbox,
                cmc9Checkbox,
                cmc10Checkbox,
            } = checkboxes;

            const { queryInput } = values;

            //declare vairable
            const white = whiteCheckbox ? 'w' : '';
            const blue = blueCheckbox ? 'u' : '';
            const red = redCheckbox ? 'r' : '';
            const green = greenCheckbox ? 'g' : '';
            const black = blackCheckbox ? 'b' : '';
            const colorless = colorlessCheckbox ? 'c' : '';

            const cmc0 = '0';
            const cmc1 = '1';
            const cmc2 = '2';
            const cmc3 = '3';
            const cmc4 = '4';
            const cmc5 = '5';
            const cmc6 = '6';
            const cmc7 = '7';
            const cmc8 = '8';
            const cmc9 = '9';
            const cmc10 = '10';

            const search = queryInput;
            let color = [];
            let CMC = [
                'cmc!=0+',
                'cmc!=1+',
                'cmc!=2+',
                'cmc!=3+',
                'cmc!=4+',
                'cmc!=5+',
                'cmc!=6+',
                'cmc!=7+',
                'cmc!=8+',
                'cmc!=9+',
                'cmc!=10+',
            ];

            colorType(white);
            colorType(blue);
            colorType(red);
            colorType(green);
            colorType(black);
            colorType(colorless);

            cmcFilter(cmc0, cmc0Checkbox);
            cmcFilter(cmc1, cmc1Checkbox);
            cmcFilter(cmc2, cmc2Checkbox);
            cmcFilter(cmc3, cmc3Checkbox);
            cmcFilter(cmc4, cmc4Checkbox);
            cmcFilter(cmc5, cmc5Checkbox);
            cmcFilter(cmc6, cmc6Checkbox);
            cmcFilter(cmc7, cmc7Checkbox);
            cmcFilter(cmc8, cmc8Checkbox);
            cmcFilter(cmc9, cmc9Checkbox);
            cmcFilter(cmc10, cmc10Checkbox);

            function colorType(type) {
                for (let i = 0; i < color.length; i++) {
                    if (color[i] === type && type !== '') {
                        return;
                    }
                }

                if (type !== '') {
                    color.push(type);
                } else {
                    for (let i = 0; i < color.length; i++) {
                        if (color[i] === type) {
                            color.splice(i, 1);
                        }
                    }
                }
            }

            //function that you pass the CMC value through and adds it to the query.
            function cmcFilter(num, checked) {
                if (CMC.indexOf(`cmc!=${num}+`) !== -1 && !checked) {
                    return;
                }
                if (checked) {
                    let index = CMC.indexOf(`cmc!=${num}+`);
                    if (index === -1) {
                        return;
                    }
                    CMC.splice(index, 1);
                }
            }

            //split deletes the delimeter, so this function works around that by adding in a place to seperate.
            function makeArray() {
                for (let i = 0; i < CMC.length; i++) {
                    if (CMC[i] === '+') {
                        CMC = CMC.slice(0, i + 1) + ',' + CMC.slice(i + 1);
                        i++;
                    }
                }
                CMC = CMC.split(',');
            }

            function queryText() {
                color = color.join('');
                CMC = CMC.join('');
                if (color !== '' && CMC.length !== 78) {
                    query = `color:${color}+${CMC}${search}`;
                } else if (CMC.length !== 78) {
                    query = `${CMC}${search}`;
                } else if (color !== '') {
                    query = `color:${color}+${search}`;
                } //add in if search is empty
                else {
                    query = `${search}`;
                }
            }
            console.log('query: ' + queryInput);
            queryText();
            apiCall();
            makeArray();
        };

        if (formSubmitted) {
            buildSearchQuery();
        }
    }, [formSubmitted]);

    return (
        <>
            <Form
                onSubmit={e => {
                    e.preventDefault();

                    setFormSubmitted(true);
                }}
            >
                <FormInput
                    name='queryInput'
                    type='text'
                    placeholder='Search for card...'
                    value={values.queryInput}
                    onChange={handleFormChange}
                />

                <Button type='submit'>Search</Button>
            </Form>

            <Toggle>
                {({ isToggled, setToggle }) => (
                    <>
                        <Button onClick={() => setToggle(!isToggled)}>Filter</Button>

                        {isToggled && (
                            <>
                                <section>
                                    <h3>Color</h3>
                                    {checkboxItems.colors.map((color, index) => (
                                        <FormLabel key={index}>
                                            <CheckboxInput
                                                name={color.name}
                                                checked={checkboxes[color.name]}
                                                onChange={handleCheckboxChange}
                                            />

                                            {color.label}
                                        </FormLabel>
                                    ))}
                                </section>
                                <section>
                                    <h3>Converted Mana Cost</h3>
                                    {checkboxItems.manaCosts.map((cmc, index) => (
                                        <FormLabel key={index}>
                                            <CheckboxInput
                                                name={cmc.name}
                                                type='checkbox'
                                                checked={checkboxes[cmc.name]}
                                                onChange={handleCheckboxChange}
                                            />

                                            {cmc.label}
                                        </FormLabel>
                                    ))}
                                </section>
                            </>
                        )}
                    </>
                )}
            </Toggle>
        </>
    );
};

export default CardSearchForm;
