import { styled } from 'styled-components';
import React from 'react'

const Container = styled.div`
flex:1;
`;
const Image = styled.img``;
const Info = styled.div``;
const Title = styled.h1``;
const Button = styled.button``;

const CategoryItem = () => {
    return (
        <Container><Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW!</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem