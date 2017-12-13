import React from 'react';
import Hero from './Hero/Hero';
import Button from '../components/UI/Button';

const Heroes = (props) => {

    return (
        <div>
            <Hero name="Spiderman" superpowers="use spider web" />
            <Button type="Add 1"> </Button>
            <Hero name="Thor" superpowers="use the hammer" />
            <Button type="Substract 1"></Button>
            <Hero name="Batman" superpowers="not do shit, lol"/>
            <Hero name="Superman" superpowers="fly and fry shit with lazer" />
        </div>
    )
}

export default Heroes;