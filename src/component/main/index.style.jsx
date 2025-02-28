import styled from "styled-components";
export const Main = styled.div`
    width: 100vw;
    height: 1000px;
    background-color: #ffffff;
    display: flex;
    flex-wrap: wrap;
`

export const MainContent = styled.div`
    display: flex;
    width: 1000px;
    height: 300px;
    background-color: lightgray;
    border: 4px solid black;
    border-radius: 5px;
    margin-bottom: 50px;
    box-sizing: border-box;
`

export const MyRecord = styled.div`
    display: flex;
    width: 80vw;
    height: 200px;
    border: 4px solid black;
    border-radius: 5px;
    margin-bottom: 50px;
    box-sizing: border-box;
`

export const TrainingList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 450px;
    row-gap: 20px;
    box-sizing: border-box;
`

export const TestBox = styled.div`
    display: flex;
    width: 100px;
    height: 100px;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    word-break: keep-all;
    transition: .15s ease-in-out;
    box-sizing: border-box;
    cursor: pointer;
    &:hover {
        box-shadow: 3px 3px 3px grey;
    }
    > span {
        text-align: center;
        font-size: 16px;
    }
`

export const Check_Mi_Seat=styled.div`
    margin:70px auto;
    width:900px;
    height:750px;
    background-color: #b5b5b5;
`