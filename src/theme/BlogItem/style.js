import styled from 'styled-components';

export const BlogItemWrapper = styled.div`
    width: 70vw;
    height: 35vh;
    display: flex;
    justify-content: start;
    .blogItemLeft{
        height: 100%;
        width: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .timeLine{
            height: calc(100% - 100px);
            border: 1px solid gainsboro;
            transform: scale(0 .5);
        }
    }
`
export const TimeCircle = styled.div`
    height: 100px;
    width: 100px;
    border-radius: 50%;
    text-align: center;
    line-height: 100px;
    box-sizing: border-box;
    font-size: 40px;
    background-color: ${props => props.color ? props.color : 'black'};
    color: #edf6f9;
`

export const BlogItemRight = styled.div`
    width: 70%;
    height: 80%;
    background: ${props => props.bgimage ? `url('${props.bgimage}')` : `url('../../../static/img/4.jpg')`} no-repeat center center;
    background-size: cover;
    min-height: 180px;
    margin: 25px;
    padding: 20px 20px 65px;
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    flex-basis: auto;
    .tag-name{
        background-color: white;
    }
    .tag-name h2{
        font-size: 23px;
        padding: 3vh 30px;
    }
    .tag-name h2 a{
        text-decoration: none;
        color: black;
    }
    .tag-description{
        background-color: white;
        padding-left: 30px;
        padding-bottom: 40px;
    }
`