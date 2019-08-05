import styled from 'styled-components'

export const UserForm = styled.form`
    display: flex;
    flex-direction: column;
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    width: 600px;
    margin: 50px auto 0px;
    padding: 25px 0px;
    height: 300px;
    align-items: center;
    justify-content: space-between;
    border: 2px solid palevioletred;
    background: papayawhip;
    border-radius: 5px;
`

export const InputDiv = styled.div`
    input{
        width: 267px;
        height: 45px;
        border-radius: 5px;
        border: 1px solid palevioletred;
        outline: none;
        font-size: 20px;
        font-family: 'Poppins', sans-serif;
        padding-left: 5px;
        color: #44786B;
    }

    label {
        float: left;
        width: 60px;
        margin-right: 10px;
        text-align: right;
        line-height: 45px;
        text-decoration: underline;
        color: palevioletred;
    }

    .bio_label{
        line-height: 90px;
    }
    textarea{
        font-family: 'Poppins', sans-serif;
        padding-left: 5px;
        font-size: 20px;
        border-radius: 5px;
        outline: none;
        border: 1px solid palevioletred;
        color: #44786B;
    }

`

export const SubmitButton = styled.button`
    margin-left: 60px;
    border-radius: 5px;
    border: 1px solid #222;
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    padding: 10px 30px;
    color: #44786B;
    background: #F1C5D3;
    border: 1px solid #44786B;
    outline: none;

    &:hover{
        background: #44786B;
        color: papayawhip;
        border: 1px solid papayawhip;
    }
`