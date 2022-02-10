import styled from 'styled-components';

export const Container = styled.div`
    margin-bottom: 15px;
`

export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 200px;
    padding: 10px;
    border: 1px solid black;
`

export const Label = styled.label`
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 5px;
`
export const Input = styled.input`
  width: 200px;
  height: 20px;
margin-bottom: 15px;
outline: none;
border-radius: 4px;
border: 2px solid #7e8a8b;
&:focus{
    border: 4px solid #56b8d6
}
`
export const Button = styled.button`
    width: 150px;
    height: 25px;
    margin-top: 15px;
    font-weight: 400;
    font-size: 16px;
cursor: pointer;
border-radius: 4px;
border: 2px solid #7e8a8b;
    background-color: #fff;
    &:focus{
        border: 4px solid #56b8d6
    }
`