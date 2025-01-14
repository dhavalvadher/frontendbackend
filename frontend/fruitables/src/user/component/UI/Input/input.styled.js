import styled from "styled-components";

export const Inputbut = styled.input`
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
    margin-bottom: 1.5rem !important;
    width: 100% !important;
    border: 0 !important;
    display: block;
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #747d88;
    background-color: #fff;
    background-clip: padding-box;
   -moz-appearance: none;
    appearance: none;
    border-radius: 10px;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    margin: 0;
    font-family: inherit;
    box-sizing: border-box;

    &:focus{
        color: #747d88;
        background-color: #fff;
        outline: 0;
        box-shadow: 0 0 0 .25rem rgba(129, 196, 8, .25);
    }

`;

export const SpanErr = styled.span`
    color: #dc3545;
    font-size: 12px;
`;