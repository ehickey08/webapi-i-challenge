import styled from 'styled-components';

export const UsersDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 600px;
    margin: 0 auto;
    border: 2px solid palevioletred;
    background: #e9edec;
    border-radius: 5px;
    margin-top: 50px;
    padding: 40px;
`;

export const UserDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 250px;
    height: 125px;
    background: papayawhip;
    border-radius: 5px;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    border: 1px solid palevioletred;
    margin: 20px;

    span {
        color: #44786b;

        &:hover {
            text-decoration: underline;
            cursor: pointer;
        }
    }
`;

export const UserButton = styled.button`
    width: 100px;
    margin: 0 auto;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    padding: 2px 10px;
    border-radius: 5px;
    color: #44786b;
    background: #f1c5d3;
    border: 1px solid #44786b;
    outline: 

    &:hover {
        background: #44786b;
        color: papayawhip;
        border: 1px solid papayawhip;
    }
`;

export const ModalDiv = styled.div`
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);

    div {
        background-color: papayawhip;
        margin: 300px auto;
        padding: 20px;
        border: 1px solid palevioletred;
        border-radius: 5px;
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;

        span {
            line-height: 30px;
            color: palevioletred;
        }
    }

    .close {
        margin-left: 10px;
        color: #palevioletred;
        float: right;
        font-size: 30px;
        font-weight: bold;

        &:hover,
        &:focus {
            color: #9B264C;
            text-decoration: none;
            cursor: pointer;
        }
    }
`;
